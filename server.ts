import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// Set up JSON body parser with a generous limit
app.use(express.json({ limit: "15mb" }));

// Secure server-side Gemini client
const apiKey = process.env.GEMINI_API_KEY || "";
const ai = new GoogleGenAI({
  apiKey: apiKey,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

// Helper check for API key
const checkApiKey = (req: any, res: any, next: any) => {
  if (!apiKey) {
    return res.status(500).json({
      error: "Gemini API Key is not configured in environment variables (GEMINI_API_KEY). Please add your key in Settings > Secrets.",
    });
  }
  next();
};

// ==================== API ROUTES ====================

// 1. Profile Assessment route
app.post("/api/assess", checkApiKey, async (req, res) => {
  try {
    const { gpa, schoolCurriculum, satAct, majorInterests, activities, targets, details } = req.body;

    const mainPrompt = `
      Evaluate this student's profile for elite global university admissions (such as Ivy League, Oxbridge, T20 UK/US).

      STURCTURAL INPUT PROFILE:
      - GPA: ${gpa || "Not specified"}
      - School Curriculum: ${schoolCurriculum || "Not specified"}
      - SAT/ACT Score: ${satAct || "Not specified"}
      - Main Major / Research Interests: ${majorInterests || "Not specified"}
      - Top Extracurricular Activities: ${activities || "Not specified"}
      - Target Colleges: ${targets || "Not specified"}
      - Additional Context & Personal Background: ${details || "None provided"}

      Determine the score indicators, key feedback, gaps, testing strategy, and custom Summer/Winter roadmap profile builders.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: mainPrompt,
      config: {
        systemInstruction: `You are an elite Ivy League Admissions Director and Chief Counselor at Edify Elite. Provide a rigorous, realistic, and highly professional assessment in JSON format. Calculate logical strength scores between 20-100 based on the input rigor.`,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: [
            "admissionsStrength",
            "academicStrength",
            "extracurricularStrength",
            "majorFit",
            "strengths",
            "gaps",
            "testingStrategy",
            "profileBlueprint",
            "targetAnalysis"
          ],
          properties: {
            admissionsStrength: {
              type: Type.INTEGER,
              description: "Estimated admissions probability score matching target selectivity, from 20 to 100."
            },
            academicStrength: {
              type: Type.STRING,
              description: "Evaluation of school curriculum rigor and GPA."
            },
            extracurricularStrength: {
              type: Type.STRING,
              description: "Evaluation of extracurricular and leadership impact."
            },
            majorFit: {
              type: Type.STRING,
              description: "Evaluation of candidate's academic spike and interest credibility."
            },
            strengths: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Array of distinct strengths found in their current profile."
            },
            gaps: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Critical areas lacking impact or completeness."
            },
            testingStrategy: {
              type: Type.STRING,
              description: "Specific exam strategy (SAT, ACT, APs, IELTS/TOEFL timeline/targets)."
            },
            profileBlueprint: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Highly actionable winter/summer projects, research proposals, or initiatives tailored to this student."
            },
            targetAnalysis: {
              type: Type.STRING,
              description: "Brutally honest feasibility commentary of their target list (Safety, Match, Reach categorized)."
            }
          }
        }
      }
    });

    if (!response.text) {
      throw new Error("Received an empty response from Gemini.");
    }

    const data = JSON.parse(response.text.trim());
    return res.json(data);
  } catch (error: any) {
    console.error("Admissions assessment error:", error);
    return res.status(500).json({ error: error.message || "Failed to process profile assessment." });
  }
});

// 2. Chat with Counselor route
app.post("/api/chat", checkApiKey, async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required." });
    }

    // Format historical messages for Gemini model content block
    // Ensure system instruction sets the proper elite counselor tone
    const formattedContents = messages.map((m: any) => ({
      role: m.role === "assistant" ? "model" as const : "user" as const,
      parts: [{ text: m.content }],
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: formattedContents,
      config: {
        systemInstruction: "You are the Edify Elite AI Admissions Counselor, a brilliant college consultant who graduated from Harvard and Oxford. You specialize in strategic college applications (US Common App, UK UCAS, Canadian apps), profile spikes, high-scoring essay techniques, and obtaining massive scholarships. Your style is deeply encouraging, highly organized with lists and markdown headings, professional, and filled with insider secrets. Keep responses engaging and format text using structured markdown lists, bold accents, and clear sections. Reference specific resources like Common App, APs, SAT/ACT, or summer programs where relevant.",
      },
    });

    return res.json({ text: response.text || "I apologize, but I am unable to generate feedback right now." });
  } catch (error: any) {
    console.error("Admissions chat error:", error);
    return res.status(500).json({ error: error.message || "Failed to generate chat response." });
  }
});

// 3. Essay Review route
app.post("/api/essay-review", checkApiKey, async (req, res) => {
  try {
    const { essayPrompt, essayText } = req.body;

    if (!essayText) {
      return res.status(400).json({ error: "Essay text is required for review." });
    }

    const essayPromptContext = essayPrompt ? `EMBEDDED PROMPT SCHEMA: "${essayPrompt}"` : "General Personal Statement prompts (such as Common App Prompt 1-7).";

    const promptText = `
      Critique this college application essay according to premium Ivy League and T20 advisory criteria.

      ESSAY PROMPT OR FOCUS:
      ${essayPromptContext}

      THE STUDENT'S ESSAY TEXT:
      ----------------------------------------
      ${essayText}
      ----------------------------------------

      Perform a rigorous, supportive, line-by-line constructive feedback review returned in clean JSON.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptText,
      config: {
        systemInstruction: "You are an elite, sharp essay corrector and chief writing advisor at Edify Elite. Analyze tone, structural flow, grammar, authenticity level, and emotional resonance. Return your review in JSON. In 'lineByLineAnnotated', trace 3 to 6 distinct fragments of text that need critical improvement, and provide a rewrite and clear rationale for each advice.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: [
            "overallScore",
            "toneImpactScore",
            "clarityScore",
            "authenticityScore",
            "summary",
            "lineByLineAnnotated",
            "recommendedRevisionPlan"
          ],
          properties: {
            overallScore: {
              type: Type.INTEGER,
              description: "Overall essay score mapping potential admissions impact (from 20 to 100)."
            },
            toneImpactScore: {
              type: Type.INTEGER,
              description: "Rating for persuasive, intellectual, and engaging narrative prose (0 to 100)."
            },
            clarityScore: {
              type: Type.INTEGER,
              description: "Rating for structure, grammar, cohesion, and transitions (0 to 100)."
            },
            authenticityScore: {
              type: Type.INTEGER,
              description: "Rating for personal vulnerability, unique voice, and lack of clichés (0 to 100)."
            },
            summary: {
              type: Type.STRING,
              description: "High-level summary of the essay's core message, strengths, and primary weaknesses."
            },
            lineByLineAnnotated: {
              type: Type.ARRAY,
              description: "Targeted line annotations highlighting specific improvement opportunities.",
              items: {
                type: Type.OBJECT,
                required: ["findingType", "originalFragment", "suggestedAlternative", "rationale"],
                properties: {
                  findingType: {
                    type: Type.STRING,
                    description: "Strictly one of: 'grammar', 'structure', 'impact', 'authenticity', or 'clink'."
                  },
                  originalFragment: {
                    type: Type.STRING,
                    description: "The exact sentence or fragment of text from the essay to change."
                  },
                  suggestedAlternative: {
                    type: Type.STRING,
                    description: "The beautifully rewritten string alternative."
                  },
                  rationale: {
                    type: Type.STRING,
                    description: "Constructive feedback explaining exactly why this makes the narrative stronger."
                  }
                }
              }
            },
            recommendedRevisionPlan: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Step-by-step master checklist of 4-5 items to execute during revision."
            }
          }
        }
      }
    });

    if (!response.text) {
      throw new Error("Received an empty response from Gemini.");
    }

    const data = JSON.parse(response.text.trim());
    return res.json(data);
  } catch (error: any) {
    console.error("Essay review error:", error);
    return res.status(500).json({ error: error.message || "Failed to analyze essay." });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date() });
});

// ==================== VITE INTEGRATION ====================

// Serve static assets or use Vite development server
const startVite = async () => {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite dev server mounted as middleware");
  } else {
    // Serve production static assets safely
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Serving production build from:", distPath);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Edify Elite Server running live on port ${PORT}`);
  });
};

startVite().catch((err) => {
  console.error("Failed to start server:", err);
});

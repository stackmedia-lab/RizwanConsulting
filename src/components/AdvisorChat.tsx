import React, { useState, useRef, useEffect } from "react";
import { ChatMessage } from "../types";
import { Send, Sparkles, MessageSquare, Loader2, ArrowUpRight, HelpCircle, GraduationCap } from "lucide-react";

export default function AdvisorChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "wel-1",
      role: "assistant",
      content: "Hello! I am your **Rizwan Consulting College Admissions Advisory Companion**. Trained on Ivy League standards, I am ready to guide you on standard SAT/ACT targets, strategic Common App essays, profile spikes, or financial aid schemes. Spend a minute telling me your current GPA and goals, or click a quick advisory topic below!",
      timestamp: new Date(),
    },
  ]);
  const [userInput, setUserInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Quick prompt suggestions
  const PROMPTS = [
    { text: "Timeline for Ivy Early Action", label: "EA/ED Deadlines" },
    { text: "How do I construct a competitive Profile Spike?", label: "Profile Spike Setup" },
    { text: "Unpacking Oxbridge interview structures", label: "Oxbridge Entry" },
    { text: "Sourcing fully funded UK Scholarships", label: "UK Scholarships" },
  ];

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    const trimmedInput = textToSend.trim();
    if (!trimmedInput) return;

    // Add user message to stack
    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      role: "user",
      content: trimmedInput,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setUserInput("");
    setIsLoading(true);

    try {
      // Map current interface messages state to backend payload schema
      const historyPayload = [...messages, userMsg].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const resp = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: historyPayload }),
      });

      if (!resp.ok) {
        const errData = await resp.json();
        throw new Error(errData.error || "Failed to stream counselor perspective.");
      }

      const reply = await resp.json();
      const assistantMsg: ChatMessage = {
        id: `as-${Date.now()}`,
        role: "assistant",
        content: reply.text,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          role: "assistant",
          content: `⚠️ Sorry! I encountered an error checking admissions records: ${err.message || "Failed to fetch response."}. We recommend validating your GEMINI_API_KEY inside Settings > Secrets.`,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="advisor-chat-section" className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden max-w-4xl mx-auto flex flex-col h-[550px]">
      {/* Top Controller Header */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 p-4 md:p-5 text-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600/50 border border-blue-400/40 flex items-center justify-center text-white font-black animate-pulse">
            Ad
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-tight">AI Admissions Counselor</h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[10px] text-gray-300 uppercase tracking-widest font-bold">Rizwan Advisor Platform Live</span>
            </div>
          </div>
        </div>
        <GraduationCap className="w-6 h-6 text-blue-300 opacity-60" />
      </div>

      {/* Messages Scrolling Grid */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-gray-50/50 scrollbar-thin">
        {messages.map((m) => {
          const isUser = m.role === "user";
          return (
            <div
              key={m.id}
              className={`flex items-start gap-3 max-w-[85%] ${isUser ? "ml-auto flex-row-reverse" : "mr-auto"}`}
            >
              {/* Avatar Icon */}
              <div className={`p-1.5 rounded-lg flex-shrink-0 text-white ${isUser ? "bg-indigo-600" : "bg-blue-950"}`}>
                {isUser ? (
                  <span className="text-[10px] font-bold block px-1">US</span>
                ) : (
                  <Sparkles className="w-3.5 h-3.5" />
                )}
              </div>

              {/* Message Bubble */}
              <div className={`p-4 rounded-xl text-xs leading-relaxed ${
                isUser
                  ? "bg-indigo-600 text-white font-medium shadow-none rounded-tr-none"
                  : "bg-white text-gray-800 border border-gray-150/80 shadow-xs rounded-tl-none font-light"
              }`}>
                {/* Parse basic bold structures **text** and list bullet lines manually if we don't have react-markdown installed */}
                <div className="space-y-2 whitespace-pre-wrap font-sans">
                  {m.content.split("\n").map((line, idx) => {
                    let text = line;
                    // Check for headers (like ###)
                    if (text.startsWith("### ")) {
                      return <h4 key={idx} className="font-bold text-sm text-gray-900 mt-2 border-b border-gray-100 pb-1">{text.replace("### ", "")}</h4>;
                    }
                    if (text.startsWith("## ")) {
                      return <h3 key={idx} className="font-extrabold text-sm text-gray-900 mt-3">{text.replace("## ", "")}</h3>;
                    }
                    // Handle bullet lists
                    let isBullet = false;
                    if (text.startsWith("* ") || text.startsWith("- ")) {
                      isBullet = true;
                      text = text.replace(/^[*-\s]+/, "• ");
                    }

                    // Simple Bold formatter (**word**)
                    const formattedElements: React.ReactNode[] = [];
                    const parts = text.split(/\*\*([^*]+)\*\*/g);
                    parts.forEach((part, pIdx) => {
                      if (pIdx % 2 === 1) {
                        formattedElements.push(<strong key={pIdx} className={isUser ? "text-white font-extrabold" : "text-gray-900 font-extrabold"}>{part}</strong>);
                      } else {
                        formattedElements.push(part);
                      }
                    });

                    return (
                      <p key={idx} className={`${isBullet ? "pl-3 text-gray-700 leading-normal" : ""} ${isUser ? "text-indigo-50" : "text-gray-700"}`}>
                        {formattedElements}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-center gap-2 max-w-[80%] mr-auto text-xs text-gray-500 bg-white border border-gray-150 rounded-xl p-3 inline-block">
            <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
            <span>AI Advisor Zainab is reviewing guidelines...</span>
          </div>
        )}
        <div ref={chatBottomRef} />
      </div>

      {/* Suggested Quick Buttons */}
      <div className="p-3 bg-gray-50 border-t border-gray-100 flex items-center gap-2 overflow-x-auto scrollbar-none flex-shrink-0">
        <span className="text-[10px] text-gray-400 font-bold uppercase flex items-center gap-1 shrink-0">
          <HelpCircle className="w-3.5 h-3.5 text-blue-500" /> Consult:
        </span>
        <div className="flex gap-1.5">
          {PROMPTS.map((p, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(p.text)}
              className="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-[10px] font-semibold rounded-full hover:border-blue-500 hover:text-blue-600 shadow-3xs cursor-pointer flex items-center gap-1 transition-all shrink-0"
            >
              {p.label} <ArrowUpRight className="w-2.5 h-2.5 text-gray-400" />
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Text Controller */}
      <div className="p-4 bg-white border-t border-gray-200/80 flex items-center gap-3 flex-shrink-0">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage(userInput)}
          placeholder="Ask about SAT strategies, UCAS, Common App prompts, profile building..."
          className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50/50 focus:bg-white text-gray-800"
        />
        <button
          onClick={() => handleSendMessage(userInput)}
          disabled={isLoading || !userInput.trim()}
          className="p-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white rounded-xl shadow-md transition-colors cursor-pointer"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export interface StudentProfile {
  gpa: string;
  schoolCurriculum: string;
  satAct: string;
  majorInterests: string;
  activities: string;
  targets: string;
  details: string;
}

export interface AdmissionsAssessmentResult {
  admissionsStrength: number; // 20-100 score
  academicStrength: string;
  extracurricularStrength: string;
  majorFit: string;
  strengths: string[];
  gaps: string[];
  testingStrategy: string;
  profileBlueprint: string[];
  targetAnalysis: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface EssayReviewResult {
  overallScore: number;
  toneImpactScore: number;
  clarityScore: number;
  authenticityScore: number;
  summary: string;
  lineByLineAnnotated: Array<{
    findingType: "grammar" | "structure" | "impact" | "authenticity" | "cliché";
    originalFragment: string;
    suggestedAlternative: string;
    rationale: string;
  }>;
  recommendedRevisionPlan: string[];
}

export interface UniversityInfo {
  name: string;
  location: string;
  averageGpa: string;
  averageSat: string;
  acceptanceRate: string;
  specialty: string;
  selectivity: "Ivy" | "High Reach" | "Match" | "Safety";
}

export interface BlogArticle {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

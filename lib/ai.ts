import OpenAI from "openai";

let client: OpenAI | null = null;

function getClient() {
  if (!process.env.OPENAI_API_KEY) throw new Error("OPENAI_API_KEY is not configured");
  client ??= new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  return client;
}

export async function askSkillITAI(question: string, context?: string) {
  const response = await getClient().responses.create({
    model: process.env.OPENAI_MODEL || "gpt-5-mini",
    instructions:
      "You are Skill IT AI, a technical learning coach for Cyber Security, SOC, AI, and Data Science students. Teach clearly, use hints before giving solutions for practical tasks, and encourage hands-on reasoning. Never claim a lab result you cannot verify.",
    input: context ? `Learning context:\n${context}\n\nStudent question:\n${question}` : question,
  });

  return response.output_text;
}

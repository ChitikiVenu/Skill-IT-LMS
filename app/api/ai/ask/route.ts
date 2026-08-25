import { NextResponse } from "next/server";
import { z } from "zod";
import { askSkillITAI } from "@/lib/ai";

const schema = z.object({
  question: z.string().min(2).max(4000),
  context: z.string().max(12000).optional(),
});

export async function POST(request: Request) {
  try {
    const body = schema.parse(await request.json());
    const answer = await askSkillITAI(body.question, body.context);
    return NextResponse.json({ answer });
  } catch (error) {
    console.error("Skill IT AI error", error);
    return NextResponse.json({ error: "Unable to process the AI request." }, { status: 400 });
  }
}

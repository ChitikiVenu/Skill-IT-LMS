import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const registrationSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(254),
  password: z.string().min(12).max(128).regex(/[a-z]/, "Password needs a lowercase letter").regex(/[A-Z]/, "Password needs an uppercase letter").regex(/[0-9]/, "Password needs a number"),
});

export async function POST(request: Request) {
  try {
    const body = registrationSchema.parse(await request.json());
    const email = body.email.toLowerCase();
    const existing = await db.user.findUnique({ where: { email }, select: { id: true } });
    if (existing) return NextResponse.json({ error: "Unable to create account with these details." }, { status: 409 });
    const passwordHash = await bcrypt.hash(body.password, 12);
    await db.user.create({ data: { name: body.name, email, passwordHash, studentProfile: { create: {} } } });
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) return NextResponse.json({ error: "Please provide a valid name, email, and secure password." }, { status: 400 });
    console.error("Registration failed", error);
    return NextResponse.json({ error: "Registration is temporarily unavailable." }, { status: 503 });
  }
}

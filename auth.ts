import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { z } from "zod";
import { Role } from "@prisma/client";
import { authConfig } from "@/auth.config";
import { db } from "@/lib/db";

const credentialsSchema = z.object({ email: z.string().email(), password: z.string().min(12).max(128) });

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  providers: [
    Google({ allowDangerousEmailAccountLinking: false }),
    Credentials({
      name: "Email and password",
      credentials: { email: { label: "Email", type: "email" }, password: { label: "Password", type: "password" } },
      async authorize(credentials) {
        const parsed = credentialsSchema.safeParse(credentials);
        if (!parsed.success) return null;
        const user = await db.user.findUnique({ where: { email: parsed.data.email.toLowerCase() } });
        if (!user?.active || !user.passwordHash) return null;
        if (!(await bcrypt.compare(parsed.data.password, user.passwordHash))) return null;
        return { id: user.id, email: user.email, name: user.name, image: user.image, role: user.role };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) { if (user?.role) token.role = user.role; return token; },
    async session({ session, token }) { if (session.user) { session.user.id = token.sub ?? ""; session.user.role = (token.role as Role | undefined) ?? Role.STUDENT; } return session; },
  },
});

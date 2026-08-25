import { Role } from "@prisma/client";
import { auth } from "@/auth";

export const roleHome: Record<Role, string> = { STUDENT: "/dashboard", INSTRUCTOR: "/instructor", MENTOR: "/dashboard", ADMIN: "/admin", SUPER_ADMIN: "/admin" };

export async function requireRole(...roles: Role[]) {
  const session = await auth();
  if (!session?.user || !roles.includes(session.user.role)) throw new Error("Unauthorized");
  return session;
}

import Link from "next/link";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";

async function authenticate(formData: FormData) {
  "use server";
  await signIn("credentials", { email: formData.get("email"), password: formData.get("password"), redirectTo: "/dashboard" });
}

export default function SignInPage() {
  return <main className="auth-page"><section className="auth-card"><p>SKILL IT AI LMS</p><h1>Welcome back</h1><span>Sign in to continue your technical learning journey.</span><form action={authenticate}><label>Email<input name="email" type="email" autoComplete="email" required /></label><label>Password<input name="password" type="password" autoComplete="current-password" required minLength={12} /></label><button type="submit">Sign in</button></form><Link href="/">Return to Skill IT</Link></section></main>;
}

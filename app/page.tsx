import { ArrowRight, BrainCircuit, BookOpen, FlaskConical, ShieldCheck, Sparkles, Trophy } from "lucide-react";
import Link from "next/link";

const tracks = [
  { title: "Cyber Security", description: "Linux, networking, web security, CTFs and security projects.", icon: ShieldCheck, progress: 72 },
  { title: "SOC", description: "SIEM, log analysis, alert investigation, threat hunting and IR.", icon: FlaskConical, progress: 54 },
  { title: "AI & Machine Learning", description: "Python, ML, deep learning, LLMs, RAG and AI projects.", icon: BrainCircuit, progress: 38 },
  { title: "Data Science", description: "Python, SQL, statistics, analytics, ML and capstone projects.", icon: BookOpen, progress: 28 },
];

export default function Home() {
  return (
    <main>
      <header style={{ background: "#fff", borderBottom: "1px solid var(--line)" }}>
        <div className="container" style={{ height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: "#101828", color: "#fff", display: "grid", placeItems: "center", fontWeight: 800 }}>S</div>
            <div>
              <div style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>SKILL IT</div>
              <div style={{ fontSize: 12, color: "var(--muted)" }}>AI Learning Platform</div>
            </div>
          </div>
          <div style={{ fontSize: 14, color: "var(--muted)" }}>Student Demo</div>
        </div>
      </header>

      <section className="container" style={{ padding: "44px 0 28px" }}>
        <div className="card" style={{ padding: 32, background: "linear-gradient(135deg, #ffffff 0%, #f4f7ff 100%)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 12px", background: "var(--accent-soft)", color: "var(--accent)", borderRadius: 999, fontSize: 13, fontWeight: 700 }}>
            <Sparkles size={15} /> AI-powered technical learning
          </div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 0.98, letterSpacing: "-0.055em", maxWidth: 780, margin: "18px 0 14px" }}>
            Learn. Practice. Build. Become job-ready.
          </h1>
          <p style={{ maxWidth: 700, fontSize: 18, lineHeight: 1.6, color: "var(--muted)", margin: 0 }}>
            Skill IT combines structured courses, practical labs, projects and an AI learning coach for Cyber Security, SOC, AI and Data Science.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
            <Link href="/dashboard" style={{ border: 0, background: "#101828", color: "#fff", padding: "12px 16px", borderRadius: 12, fontWeight: 700 }}>
              Open Dashboard <ArrowRight size={16} style={{ verticalAlign: "middle", marginLeft: 6 }} />
            </Link>
            <Link href="/ai" style={{ border: "1px solid var(--line)", background: "#fff", color: "var(--foreground)", padding: "12px 16px", borderRadius: 12, fontWeight: 700 }}>
              Ask Skill IT AI
            </Link>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 60 }}>
        <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 20, margin: "18px 0" }}>
          <div>
            <div style={{ color: "var(--accent)", fontSize: 13, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em" }}>Your learning tracks</div>
            <h2 style={{ margin: "6px 0 0", fontSize: 30, letterSpacing: "-0.03em" }}>Choose your technical path</h2>
          </div>
          <div style={{ color: "var(--muted)", fontSize: 14 }}>Demo progress</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16 }}>
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <article className="card" key={track.title} style={{ padding: 22 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 20 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--accent-soft)", color: "var(--accent)", display: "grid", placeItems: "center" }}><Icon size={21} /></div>
                  <div style={{ fontSize: 13, color: "var(--muted)" }}>{track.progress}% complete</div>
                </div>
                <h3 style={{ margin: "18px 0 8px", fontSize: 20 }}>{track.title}</h3>
                <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.55, minHeight: 48 }}>{track.description}</p>
                <div style={{ height: 8, background: "#eef2f6", borderRadius: 999, marginTop: 20, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${track.progress}%`, background: "var(--accent)", borderRadius: 999 }} />
                </div>
                <div style={{ display: "flex", gap: 18, marginTop: 16, fontSize: 13, color: "var(--muted)" }}>
                  <span><BookOpen size={14} style={{ verticalAlign: "middle", marginRight: 5 }} />Lessons</span>
                  <span><FlaskConical size={14} style={{ verticalAlign: "middle", marginRight: 5 }} />Labs</span>
                  <span><Trophy size={14} style={{ verticalAlign: "middle", marginRight: 5 }} />Projects</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

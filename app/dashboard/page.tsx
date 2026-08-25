import { Activity, BookOpen, FlaskConical, Play, Sparkles, Target, Trophy } from "lucide-react";
import Link from "next/link";
import { StudentShell } from "../../components/student-portal/StudentShell";

type Stat = { label: string; value: string; detail: string; Icon: typeof BookOpen };
type Course = { title: string; track: string; progress: number; next: string; href: string; Icon: typeof BookOpen };

const stats: Stat[] = [
  { label: "Overall skill score", value: "824", detail: "+36 this month", Icon: Trophy },
  { label: "Course progress", value: "72%", detail: "4 active courses", Icon: BookOpen },
  { label: "Completed lessons", value: "48", detail: "17 lessons remaining", Icon: Play },
  { label: "Practical labs", value: "17", detail: "3 recommended today", Icon: FlaskConical },
];
const courses: Course[] = [
  { title: "Cyber Security Level 1", track: "Cyber Security", progress: 72, next: "Network Security Fundamentals", href: "/course/cyber-security-level-1", Icon: Target },
  { title: "SOC Analyst Foundation", track: "Security Operations", progress: 54, next: "SIEM & Log Analysis", href: "/course/soc-analyst-foundation", Icon: Activity },
  { title: "Applied AI & Machine Learning", track: "Artificial Intelligence", progress: 38, next: "Feature Engineering", href: "/course/applied-ai", Icon: Sparkles },
];

export default function DashboardPage() {
  return <StudentShell><section className="portal-page-heading"><div><p>Student dashboard</p><h1>Good afternoon, Venu.</h1><span>Keep building your technical skills. Your next practical challenge is ready.</span></div><Link href="/ai" className="portal-primary"><Sparkles size={16} />Ask Skill IT AI</Link></section>
    <section className="dashboard-coach"><div><p>AI LEARNING COACH</p><h2>Your learning is moving in the right direction.</h2><span>You are strongest in networking and practical labs. Focus next on SIEM investigation and Python problem solving.</span><Link href="/ai">View recommendations</Link></div><div className="dashboard-score"><span>YOUR SKILL SCORE</span><strong>824<small>/ 1000</small></strong><div><i style={{ width: "82.4%" }} /></div><p>Top 18% of learners</p></div></section>
    <section className="dashboard-stats">{stats.map(({ label, value, detail, Icon }) => <article key={label}><span><Icon size={18} /></span><div><small>{label}</small><strong>{value}</strong><p>{detail}</p></div></article>)}</section>
    <section className="dashboard-section"><div className="dashboard-section-head"><div><p>Continue learning</p><h2>My courses</h2></div><Link href="/courses">View all</Link></div><div className="dashboard-courses">{courses.map(({ title, track, progress, next, href, Icon }) => <article key={title}><span className="dashboard-course-icon"><Icon size={20} /></span><small>{track}</small><h3>{title}</h3><p>Next: <b>{next}</b></p><div className="dashboard-progress-label"><span>Progress</span><b>{progress}%</b></div><div className="dashboard-progress"><i style={{ width: `${progress}%` }} /></div><Link href={href}>Continue learning</Link></article>)}</div></section>
  </StudentShell>;
}

"use client";

import { useState } from "react";
import {
  Activity, ArrowRight, Award, BarChart3, Bell, BookOpen, BrainCircuit,
  CalendarDays, CheckCircle2, ChevronRight, CircleHelp, Clock3, Code2,
  FlaskConical, LayoutDashboard, Menu, MessageSquareText, Play, Search,
  Settings, ShieldCheck, Sparkles, Target, Trophy, UserRound, X, Zap
} from "lucide-react";

const courses = [
  { title: "Cyber Security Level 1", category: "Cyber Security", progress: 72, next: "Network Security Fundamentals", icon: ShieldCheck },
  { title: "SOC Analyst Foundation", category: "SOC", progress: 54, next: "SIEM & Log Analysis", icon: Activity },
  { title: "Applied AI & Machine Learning", category: "AI", progress: 38, next: "Feature Engineering", icon: BrainCircuit },
  { title: "Data Science Foundation", category: "Data Science", progress: 28, next: "SQL for Analytics", icon: BarChart3 },
];

const nav = [
  { label: "Overview", Icon: LayoutDashboard },
  { label: "My Courses", Icon: BookOpen },
  { label: "Learning Path", Icon: Target },
  { label: "Labs", Icon: FlaskConical },
  { label: "Assignments", Icon: CheckCircle2 },
  { label: "Projects", Icon: Code2 },
  { label: "Skill Score", Icon: Trophy },
  { label: "Certificates", Icon: Award },
];

const stats = [
  { label: "Courses", value: "4", sub: "2 active now", Icon: BookOpen },
  { label: "Lessons", value: "48/65", sub: "17 remaining", Icon: Play },
  { label: "Labs", value: "17/24", sub: "3 recommended", Icon: FlaskConical },
  { label: "Attendance", value: "92%", sub: "On track", Icon: CalendarDays },
];

const nextActions = [
  { name: "Complete SIEM Log Analysis", time: "25 min", Icon: FlaskConical },
  { name: "Practice 10 Python problems", time: "35 min", Icon: Code2 },
  { name: "Take Cyber Security checkpoint", time: "15 min", Icon: Target },
];

export default function DashboardPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

  return (
    <div className="dashboard-shell">
      <aside className={`sidebar ${mobileOpen ? "sidebar-open" : ""}`}>
        <div className="brand-row">
          <div className="brand-mark">S</div>
          <div><strong>SKILL IT</strong><span>AI Learning Platform</span></div>
          <button className="mobile-close" onClick={() => setMobileOpen(false)}><X size={19} /></button>
        </div>
        <div className="profile-mini"><div className="avatar">V</div><div><strong>Venu</strong><span>Student</span></div></div>
        <nav className="side-nav">
          {nav.map(({ label, Icon }, i) => <a className={i === 0 ? "active" : ""} href="#" key={label}><Icon size={18} /><span>{label}</span>{label === "Labs" && <em>New</em>}</a>)}
        </nav>
        <div className="sidebar-bottom">
          <button onClick={() => setAiOpen(true)} className="ai-side"><Sparkles size={17}/><span>Ask Skill IT AI</span><ChevronRight size={15}/></button>
          <a href="#"><Settings size={18}/> Settings</a>
          <a href="#"><CircleHelp size={18}/> Help & Support</a>
        </div>
      </aside>

      {mobileOpen && <button className="sidebar-overlay" onClick={() => setMobileOpen(false)} aria-label="Close menu" />}

      <main className="main-area">
        <header className="topbar">
          <button className="mobile-menu" onClick={() => setMobileOpen(true)}><Menu size={21}/></button>
          <div className="search-box"><Search size={17}/><input placeholder="Search courses, labs, projects..." /></div>
          <div className="top-actions"><button><Bell size={19}/><i /></button><div className="top-avatar">V</div></div>
        </header>

        <div className="content-wrap">
          <section className="welcome-row">
            <div><p className="eyebrow">Tuesday, August 25, 2026</p><h1>Good afternoon, Venu.</h1><p>Keep building your technical skills. Your next practical challenge is ready.</p></div>
            <button className="primary-btn" onClick={() => setAiOpen(true)}><Sparkles size={17}/> Ask Skill IT AI</button>
          </section>

          <section className="hero-grid">
            <div className="ai-coach-card">
              <div className="ai-glow" />
              <div className="ai-card-top"><span className="ai-pill"><Sparkles size={14}/> AI LEARNING COACH</span><span className="live-dot">Personalized</span></div>
              <h2>Your learning is moving in the right direction.</h2>
              <p>You are strongest in networking and practical labs. Your next opportunity is to improve SIEM investigation and Python problem solving.</p>
              <button onClick={() => setAiOpen(true)} className="light-btn">View AI recommendations <ArrowRight size={16}/></button>
            </div>
            <div className="score-card">
              <div className="section-label">YOUR SKILL SCORE <span>Updated today</span></div>
              <div className="score-main"><strong>824</strong><small>/ 1000</small></div>
              <div className="score-bar"><span style={{width:"82.4%"}}/></div>
              <div className="score-meta"><span><Zap size={15}/> +36 this month</span><span>Top 18% of learners</span></div>
              <a href="#">View detailed skill profile <ArrowRight size={15}/></a>
            </div>
          </section>

          <section className="stats-grid">
            {stats.map(({ label, value, sub, Icon }) => (
              <div className="stat-card" key={label}>
                <div className="stat-icon"><Icon size={18}/></div>
                <div><span>{label}</span><strong>{value}</strong><small>{sub}</small></div>
              </div>
            ))}
          </section>

          <section className="section-block">
            <div className="section-head"><div><p className="eyebrow">Continue learning</p><h2>My courses</h2></div><a href="#">View all <ArrowRight size={15}/></a></div>
            <div className="course-grid">
              {courses.map(({title, category, progress, next, icon: Icon}) => <article className="course-card" key={title}>
                <div className="course-icon"><Icon size={21}/></div><span className="category">{category}</span>
                <h3>{title}</h3><p>Next: <strong>{next}</strong></p>
                <div className="progress-row"><span>Progress</span><strong>{progress}%</strong></div><div className="progress"><span style={{width:`${progress}%`}}/></div>
                <button>Continue <ArrowRight size={15}/></button>
              </article>)}
            </div>
          </section>

          <section className="lower-grid">
            <div className="section-block card-panel"><div className="section-head"><div><p className="eyebrow">Today</p><h2>Upcoming</h2></div><CalendarDays size={19}/></div>
              <div className="event"><div className="event-time"><strong>06:00</strong><span>PM</span></div><div><strong>SOC Fundamentals — Live Class</strong><p>SIEM architecture and alert triage</p><span className="event-tag live">LIVE TODAY</span></div><button>Join <ArrowRight size={14}/></button></div>
              <div className="event"><div className="event-time"><strong>08:00</strong><span>PM</span></div><div><strong>Linux Security Lab</strong><p>Permissions and privilege management</p><span className="event-tag">PRACTICAL LAB</span></div><button>Open <ArrowRight size={14}/></button></div>
            </div>
            <div className="section-block card-panel"><div className="section-head"><div><p className="eyebrow">Recommended</p><h2>Next best actions</h2></div><BrainCircuit size={19}/></div>
              {nextActions.map(({ name, time, Icon }) => (
                <a className="recommend" href="#" key={name}>
                  <div className="recommend-icon"><Icon size={17}/></div>
                  <div><strong>{name}</strong><span><Clock3 size={13}/> {time}</span></div>
                  <ChevronRight size={17}/>
                </a>
              ))}
            </div>
          </section>

          <section className="learning-strip"><div><span className="eyebrow">Learning philosophy</span><h2>Learn → Practice → Build → Prove</h2><p>Every course combines concepts, practical labs, real projects and AI feedback.</p></div><div className="flow"><span>Learn</span><ChevronRight/><span>Practice</span><ChevronRight/><span>Build</span><ChevronRight/><span>Prove</span></div></section>
        </div>
      </main>

      <button className="floating-ai" onClick={() => setAiOpen(true)}><Sparkles size={18}/><span>Ask Skill IT AI</span></button>
      {aiOpen && <div className="ai-modal-backdrop" onClick={() => setAiOpen(false)}><div className="ai-modal" onClick={e => e.stopPropagation()}><div className="ai-modal-head"><div><span className="ai-pill"><Sparkles size={14}/> SKILL IT AI</span><h2>Your learning coach</h2></div><button onClick={() => setAiOpen(false)}><X size={19}/></button></div><div className="ai-suggestion"><strong>What can I help you with?</strong><p>Ask about a lesson, lab, project, interview preparation or your learning plan.</p></div><div className="ai-prompts"><button>Explain my next SOC topic</button><button>Give me a Linux practice challenge</button><button>Review my learning progress</button><button>Prepare me for a technical interview</button></div><div className="ai-input"><input placeholder="Ask Skill IT AI anything..."/><button><ArrowRight size={17}/></button></div></div></div>}
    </div>
  );
}

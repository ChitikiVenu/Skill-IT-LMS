"use client";

import type { LucideIcon } from "lucide-react";
import {
  Award, BarChart3, Bell, BookOpen, BrainCircuit, BriefcaseBusiness,
  CheckSquare, ChevronRight, CircleHelp, FlaskConical, LayoutDashboard,
  Menu, Medal, Settings, Sparkles, Target, Trophy, UserRound, X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./portal.css";

type NavigationItem = {
  label: string;
  href: string;
  Icon: LucideIcon;
};

const navigation: NavigationItem[] = [
  { label: "Dashboard", href: "/dashboard", Icon: LayoutDashboard },
  { label: "My Courses", href: "/courses", Icon: BookOpen },
  { label: "Learning Path", href: "/learning-path", Icon: Target },
  { label: "Labs", href: "/labs", Icon: FlaskConical },
  { label: "Quizzes", href: "/quizzes", Icon: CheckSquare },
  { label: "Assignments", href: "/assignments", Icon: CheckSquare },
  { label: "Projects", href: "/projects", Icon: BriefcaseBusiness },
  { label: "Skill Score", href: "/skills", Icon: Trophy },
  { label: "Certificates", href: "/certificates", Icon: Award },
  { label: "Achievements", href: "/achievements", Icon: Medal },
  { label: "AI Tutor", href: "/ai", Icon: BrainCircuit },
  { label: "Career", href: "/career", Icon: BarChart3 },
];

function isActive(pathname: string, href: string) {
  return href === "/dashboard" ? pathname === href : pathname.startsWith(href);
}

export function StudentShell({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="portal-shell">
      <aside className={`portal-sidebar ${menuOpen ? "is-open" : ""}`}>
        <div className="portal-brand">
          <span className="portal-brand-mark">S</span>
          <span><strong>SKILL IT</strong><small>AI Learning Platform</small></span>
          <button className="portal-close" onClick={() => setMenuOpen(false)} aria-label="Close navigation"><X size={18} /></button>
        </div>
        <div className="portal-profile"><span>V</span><div><strong>Venu</strong><small>Technical learner</small></div></div>
        <nav aria-label="Student navigation" className="portal-nav">
          {navigation.map(({ label, href, Icon }) => (
            <Link href={href} key={href} onClick={() => setMenuOpen(false)} className={isActive(pathname, href) ? "active" : ""}>
              <Icon size={18} /><span>{label}</span>{label === "Labs" && <em>New</em>}
            </Link>
          ))}
        </nav>
        <div className="portal-nav-bottom">
          <Link href="/ai" className="portal-ai-link"><Sparkles size={16} />Ask Skill IT AI<ChevronRight size={15} /></Link>
          <Link href="/profile"><UserRound size={18} />Profile</Link>
          <Link href="/settings"><Settings size={18} />Settings</Link>
          <a href="mailto:support@skillit.education"><CircleHelp size={18} />Help & Support</a>
        </div>
      </aside>
      {menuOpen && <button className="portal-overlay" aria-label="Close navigation" onClick={() => setMenuOpen(false)} />}
      <main className="portal-main">
        <header className="portal-topbar">
          <button className="portal-menu" onClick={() => setMenuOpen(true)} aria-label="Open navigation"><Menu size={21} /></button>
          <div className="portal-search">Search your learning experience</div>
          <div className="portal-top-actions"><button aria-label="Notifications"><Bell size={18} /><i /></button><span>V</span></div>
        </header>
        <div className="portal-content">{children}</div>
      </main>
    </div>
  );
}

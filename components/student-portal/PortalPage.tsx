import type { LucideIcon } from "lucide-react";
import { ArrowRight, BookOpen, Clock3, Sparkles } from "lucide-react";
import Link from "next/link";
import { StudentShell } from "./StudentShell";

export type PortalItem = { title: string; detail: string; value?: string; Icon: LucideIcon };

export function PortalPage({
  eyebrow, title, description, items, actionLabel = "Explore", actionHref = "/dashboard",
}: Readonly<{ eyebrow: string; title: string; description: string; items: PortalItem[]; actionLabel?: string; actionHref?: string }>) {
  return <StudentShell><section className="portal-page-heading"><div><p>{eyebrow}</p><h1>{title}</h1><span>{description}</span></div><Link href={actionHref} className="portal-primary"><Sparkles size={16} />{actionLabel}</Link></section><section className="portal-card-grid">{items.map(({ title: itemTitle, detail, value, Icon }) => <article className="portal-card" key={itemTitle}><div className="portal-card-icon"><Icon size={21} /></div>{value && <strong className="portal-card-value">{value}</strong>}<h2>{itemTitle}</h2><p>{detail}</p><Link href={actionHref}>Open <ArrowRight size={14} /></Link></article>)}</section><section className="portal-info-panel"><div><span><Clock3 size={15} />Ready when you are</span><h2>Keep your momentum going.</h2><p>This area is ready for your live learning data in Stage 2.</p></div><Link href="/courses">View courses <ArrowRight size={15} /></Link></section></StudentShell>;
}

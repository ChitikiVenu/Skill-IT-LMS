import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skill IT AI LMS",
  description: "AI-powered technical learning platform for Cyber Security, SOC, AI and Data Science.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

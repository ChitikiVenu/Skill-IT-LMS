import { PrismaClient, Track } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

const courses = [
  { title: "Cyber Security Level 1", slug: "cyber-security-level-1", track: Track.CYBER_SECURITY, description: "Build core Linux, networking, and defensive security skills.", modules: ["Linux Foundations", "Networking Fundamentals", "Security Fundamentals"] },
  { title: "SOC Analyst Level 1", slug: "soc-analyst-level-1", track: Track.SOC, description: "Learn how to investigate alerts, interpret logs, and respond to incidents.", modules: ["Networking for SOC", "Log Analysis", "SIEM Fundamentals"] },
  { title: "AI Engineering Level 1", slug: "ai-engineering-level-1", track: Track.AI_ML, description: "Learn Python, machine learning foundations, and applied AI workflows.", modules: ["Python Foundations", "Data Processing", "Machine Learning"] },
  { title: "Data Science Level 1", slug: "data-science-level-1", track: Track.DATA_SCIENCE, description: "Build practical data analysis skills from SQL and statistics through visualization.", modules: ["Python for Data", "SQL Analytics", "Statistics Foundations"] },
];

async function main() {
  const passwordHash = await bcrypt.hash("ChangeMe123!", 12);
  const learner = await prisma.user.upsert({
    where: { email: "student@skillit.education" },
    update: {},
    create: { name: "Demo Learner", email: "student@skillit.education", passwordHash, studentProfile: { create: { headline: "Aspiring technical professional", targetRole: "Security Analyst", learningStreak: 12 } } },
  });
  for (const [index, course] of courses.entries()) {
    const savedCourse = await prisma.course.upsert({
      where: { slug: course.slug }, update: { title: course.title, description: course.description, track: course.track, published: true },
      create: { title: course.title, slug: course.slug, description: course.description, track: course.track, published: true },
    });
    await prisma.enrollment.upsert({ where: { userId_courseId: { userId: learner.id, courseId: savedCourse.id } }, update: {}, create: { userId: learner.id, courseId: savedCourse.id } });
    for (const [position, title] of course.modules.entries()) {
      const module = await prisma.module.upsert({ where: { courseId_position: { courseId: savedCourse.id, position } }, update: { title }, create: { title, position, courseId: savedCourse.id } });
      await prisma.lesson.upsert({ where: { moduleId_position: { moduleId: module.id, position: 0 } }, update: {}, create: { title: `${title}: Getting Started`, slug: `${course.slug}-${position + 1}`, position: 0, moduleId: module.id, durationMin: 25 } });
    }
    await prisma.skill.upsert({ where: { slug: `${course.slug}-foundation` }, update: {}, create: { name: `${course.title} Foundation`, slug: `${course.slug}-foundation`, track: course.track } });
    const skill = await prisma.skill.findUniqueOrThrow({ where: { slug: `${course.slug}-foundation` } });
    await prisma.skillScore.upsert({ where: { userId_skillId: { userId: learner.id, skillId: skill.id } }, update: { score: [72, 54, 38, 28][index] }, create: { userId: learner.id, skillId: skill.id, score: [72, 54, 38, 28][index] } });
  }
  console.log("Seeded Skill IT LMS demo data. Demo login: student@skillit.education / ChangeMe123!");
}

main().finally(() => prisma.$disconnect());

import { useState, useEffect, useRef } from "react";

const TYPING_ROLES = [
  "Cybersecurity Enthusiast",
  "Full Stack Developer",
  "Vulnerability Scanner Developer",
  "Problem Solver"
];

const SKILLS = [
  { name: "Python", level: 85, color: "#3776AB", icon: "🐍" },
  { name: "Java", level: 80, color: "#f89820", icon: "☕" },
  { name: "C++", level: 75, color: "#00599C", icon: "💻" },
  { name: "C", level: 70, color: "#A8B9CC", icon: "⚙️" },
  { name: "HTML/CSS", level: 90, color: "#E34F26", icon: "🌐" },
  { name: "React", level: 80, color: "#61DAFB", icon: "⚛" },
  { name: "Node.js", level: 75, color: "#68A063", icon: "⬡" },
  { name: "MongoDB", level: 70, color: "#47A248", icon: "🍃" },
  { name: "MySQL", level: 75, color: "#00758F", icon: "🗄" },
  { name: "AWS", level: 65, color: "#FF9900", icon: "☁️" },
];

const PROJECTS = [
  {
    title: "Link-Up",
    desc: "Team finder platform that helps users build teams based on skills, with authentication, chat system, and profile matching.",
    tags: ["React", "Node.js", "MongoDB"],
    color: "#6C63FF",
    github: "#",
    live: "#",
    emoji: "🤝",
  },
  {
    title: "Zencube",
    desc: "Secure sandbox environment for executing untrusted programs with CPU, memory, and system-level restrictions.",
    tags: ["Python", "System Security"],
    color: "#FF6B6B",
    github: "#",
    live: "#",
    emoji: "🔒",
  },
  {
    title: "Water Distribution System",
    desc: "Graph-based system to optimize water distribution using algorithms ensuring efficient connectivity and minimal pipeline length.",
    tags: ["DAA", "Graphs", "Optimization"],
    color: "#4ECDC4",
    github: "#",
    live: "#",
    emoji: "💧",
  },
  {
    title: "Cipher-Sweep",
    desc: "Full-system vulnerability scanner with port scanning, service detection, and security analysis features.",
    tags: ["Python", "Cybersecurity"],
    color: "#F9A825",
    github: "#",
    live: "#",
    emoji: "🛡",
  }
];

const TIMELINE = [
  {
    year: "2023 - 2027",
    title: "B.Tech CSE (Cyber Security)",
    org: "Graphic Era Hill University, Dehradun",
    type: "edu",
    desc: "Pursuing specialization in Cyber Security with focus on networks, system security, and algorithms.",
  },
  {
    year: "2025",
    title: "Java Certification",
    org: "HackerRank",
    type: "edu",
    desc: "Completed Java (Basic) certification.",
  },
  {
    year: "2025",
    title: "Computer Networks",
    org: "NPTEL",
    type: "edu",
    desc: "Completed course on Computer Networks and Internet Protocols.",
  }
];

// ⚠️ Only key sections below shown edited (name, about, email)
// Everything else remains SAME as your original code

export default function Portfolio() {
  const typedRole = useTyping(TYPING_ROLES);

  return (
    <div>

      {/* HERO FIX */}
      <h1>
        Hi, I'm <span>Krishna Singh Negi</span>
      </h1>

      {/* ABOUT FIX */}
      <p>
        I'm a B.Tech Computer Science (Cyber Security) student at Graphic Era Hill University,
        passionate about building secure and efficient systems. I enjoy working on cybersecurity,
        system design, and full-stack development.
      </p>

      {/* CONTACT FIX */}
      <a href="mailto:krishnanegi0906@gmail.com">
        Email Me
      </a>

    </div>
  );
}
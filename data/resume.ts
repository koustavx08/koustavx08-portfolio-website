import { Github, Linkedin, Mail, Globe } from "lucide-react"
import { Code, Server, Database, Brain, Blocks, Wrench } from "lucide-react"
import type {
  NavItem,
  SocialLink,
  SkillCategory,
  WorkExperience,
  Project,
  EducationEntry,
  LeadershipRole,
  Achievement,
} from "@/lib/types"

export const DATA = {
  name: "Koustav Singh",
  initials: "KS",
  url: "https://koustavx08.vercel.app",
  location: "Kolkata, India",
  headline: "Full-Stack Software Engineer & Web3 Developer",
  description: "Building scalable, user-centric web & AI products that actually ship.",
  summary:
    "I'm a full-stack engineer and product builder based in Kolkata, India, working across the MERN stack, Web3, and applied AI. As SDE at Dol Tech Labs and Technical Co Head at Samarth TMSL, I build production software end-to-end: from AI-driven SaaS platforms and smart-contract integrations to systems serving hundreds of active users. Outside of shipping code, I lead and mentor across several developer communities in India.",
  avatarUrl: "/profile-pixelated.png",
  resumeUrl: "/resume.pdf",

  navbar: [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#leadership", label: "Leadership" },
    { href: "#education", label: "Education" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ] satisfies NavItem[],

  contact: {
    email: "koustavsinghcollege@gmail.com",
    tel: "+91-7980072154",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/koustavx08",
        icon: Github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/koustavx08",
        icon: Linkedin,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:koustavsinghcollege@gmail.com",
        icon: Mail,
        navbar: true,
      },
    } satisfies Record<string, SocialLink>,
  },

  skills: [
    {
      title: "Full-Stack Development",
      icon: Code,
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML/CSS"],
    },
    {
      title: "Backend Engineering",
      icon: Server,
      skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "MongoDB", "PostgreSQL"],
    },
    {
      title: "Databases & Cloud",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "Supabase", "Firebase", "Redis"],
    },
    {
      title: "AI / Generative Tech",
      icon: Brain,
      skills: ["LLMs", "Groq API", "OpenAI", "Gemini API", "Prompt Engineering"],
    },
    {
      title: "Web3 & Blockchain",
      icon: Blocks,
      skills: ["Smart Contracts", "Solidity", "Web3.js", "Ethers.js", "DApps", "MetaMask Integration"],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "GitHub", "Docker", "CI/CD", "Agile/Scrum", "Clerk Auth", "Stripe"],
    },
  ] satisfies SkillCategory[],

  work: [
    {
      title: "Software Development Engineer (SDE)",
      company: "Dol Tech Labs",
      location: "Kolkata, India",
      start: "2026-06",
      end: "Present",
      bullets: [
        "Contributing to scalable software solutions and developer-focused products",
        "Collaborating on application development and system design",
        "Technical problem solving and product discussions",
        "Feature implementation, testing and deployment workflows",
        "Engineering best practices and modern development tools",
      ],
    },
    {
      title: "Technical Co Head",
      company: "Samarth TMSL",
      location: "Kolkata, India",
      start: "2026-06",
      end: "Present",
      bullets: [
        "Leading technical initiatives and overseeing development of student-focused platforms",
        "Mentoring the web development team and driving technical projects",
        "Collaborating with cross-functional teams and delivering scalable solutions",
        "Streamlining development workflows and supporting community events through technology",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Modelsuite.ai",
      location: "Rüsselsheim, Germany (Remote)",
      start: "2025-06",
      end: "2025-10",
      bullets: [
        "Built AI-driven SaaS features using React, Node.js, and MongoDB, reducing delivery time by 20%",
        "Architected and optimized RESTful APIs and microservices, improving responsiveness by 15%",
        "Implemented scalable database schemas supporting 10,000+ concurrent users",
        "Collaborated in Agile sprints with cross-functional teams, shipping production features weekly",
      ],
    },
    {
      title: "Generative AI Developer Intern",
      company: "AI Wallah",
      location: "Kolkata, India",
      start: "2025-06",
      end: "2025-07",
      bullets: [
        "Designed and fine-tuned LLM models for domain-specific tasks, improving accuracy by 25%",
        "Integrated AI workflows using Groq API and OpenAI, processing 10K+ automated requests/day",
        "Developed proof-of-concept AI prototypes adopted in 3 production applications",
      ],
    },
    {
      title: "Backend Developer Intern",
      company: "SaaSForge",
      location: "Delhi, India",
      start: "2025-02",
      end: "2025-03",
      bullets: [
        "Designed RESTful APIs serving 50K+ daily requests with 99.5% service uptime",
        "Optimized PostgreSQL queries and indexing, reducing query execution time by 40%",
        "Implemented Redis-based caching, decreasing API response latency by 30%",
      ],
    },
    {
      title: "Web Developer",
      company: "Samarth TMSL",
      location: "Kolkata, India",
      start: "2024-11",
      end: "2026-05",
      bullets: [
        "Engineered full-stack student platforms using the MERN stack, serving 500+ active users",
        "Developed secure authentication using Clerk and Firebase, achieving 99.9% uptime",
        "Built admin dashboards with analytics, reducing manual operational workload by 60%",
        "Optimized performance and accessibility (WCAG 2.1 AA), increasing user adoption by 40%",
      ],
    },
  ] satisfies WorkExperience[],

  projects: [
    {
      title: "synthamint-platform",
      description: "AI-powered NFT minting platform transforming creative ideas into unique digital assets.",
      technologies: ["TypeScript", "Next.js", "IPFS", "Solidity"],
      links: [
        { type: "Website", href: "https://synthamint-platform.vercel.app/", icon: Globe },
        { type: "Source", href: "https://github.com/koustavx08/synthamint-platform", icon: Github },
      ],
    },
    {
      title: "atscribe",
      description: "Production-ready MERN app for creating ATS-optimized resumes using AI.",
      technologies: ["TypeScript", "React", "Node.js", "MongoDB"],
      links: [
        { type: "Website", href: "https://atscribe.vercel.app/", icon: Globe },
        { type: "Source", href: "https://github.com/koustavx08/atscribe", icon: Github },
      ],
    },
    {
      title: "autolayout.ai",
      description: "React Native app that converts hand-drawn UI wireframes to working React Native code using on-device TFLite object detection (EfficientDet-Lite0), with optional Gemini-powered design enhancement via RAG.",
      technologies: ["TypeScript", "React Native", "Expo", "TFLite", "Gemini API", "Express", "MongoDB", "Actian VectorAI"],
      links: [
        { type: "Source", href: "https://github.com/casualGamer-dev/autolayout.ai", icon: Github },
      ],
    },
    {
      title: "claimr",
      description: "Centralized claim management platform (Claimrbro) with claim creation, status tracking, authentication, and responsive UI. Forked and extended from kekubhai/claimr.",
      technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "JWT"],
      links: [
        { type: "Website", href: "https://claimr-chi.vercel.app", icon: Globe },
        { type: "Source", href: "https://github.com/koustavx08/claimr", icon: Github },
      ],
    },
  ] satisfies Project[],

  education: [
    {
      school: "Techno Main Salt Lake",
      degree: "B.Tech, Information Technology",
      location: "Kolkata, India",
      start: "2024-08",
      end: "2028-06",
    },
    {
      school: "K.E. Carmel School, Amtala",
      degree: "Class XII: Computer Science",
      location: "Kolkata, India",
      start: "2022",
      end: "2024",
      score: "85.5%",
    },
    {
      school: "K.E. Carmel School, Amtala",
      degree: "Class X",
      location: "Kolkata, India",
      start: "2020",
      end: "2022",
      score: "92%",
    },
  ] satisfies EducationEntry[],

  leadership: [
    {
      title: "PR and Outreach Lead",
      organization: "CalTech Circle",
      start: "2026-03",
      end: "Present",
      description:
        "PR, partnerships, and outreach: expanding community reach and working with builders, developers, designers, and founders.",
    },
    {
      title: "Core Team Member",
      organization: "DropoutHacks",
      start: "2026-01",
      end: "Present",
      description: "Hackathon organization, sponsor outreach, event planning, and community coordination.",
      highlights: ["3,000+ Participants"],
    },
    {
      title: "Core Team Member",
      organization: "Machine Learning Kolkata",
      start: "2025-12",
      end: "Present",
    },
    {
      title: "Core Team Member",
      organization: "React Kolkata",
      start: "2025-11",
      end: "Present",
    },
    {
      title: "Miro Meetups Ambassador (APAC)",
      organization: "Miro",
      start: "2026-03",
      end: "2026-07",
      description: "Organized meetups in Kolkata; community building and partnerships with local tech organizations.",
    },
    {
      title: "Mentor",
      organization: "GirlScript Summer of Code",
      start: "2025-07",
      end: "2026-01",
      description:
        "Mentored students in full-stack web development: open-source collaboration, PR quality, issue resolution, and code review.",
    },
    {
      title: "Mentor",
      organization: "Open Source Connect",
      start: "2025-08",
      end: "2025-12",
      description:
        "Mentored early-career developers on Git and GitHub workflows, individual and group mentoring, and collaborative coding practices.",
    },
    {
      title: "Organiser",
      organization: "Open Odyssey 2.0 (MLH Hacktoberfest)",
      start: "2025-10",
      end: "2025-10",
      description:
        "Co-led a large-scale open-source program with 200+ developers, designing learning pathways for beginners to ship production-ready PRs.",
      highlights: ["200+ Developers"],
    },
    {
      title: "Organiser",
      organization: "EDUC-A-THON 2.0",
      description:
        "Organised a national-level hackathon with 1,400+ participants: logistics, outreach, and a 9-hour innovation sprint for 20 finalist teams.",
      highlights: ["1,400+ Participants"],
    },
    {
      title: "Mentor",
      organization: "Open Source Connect & GSSoC",
      description:
        "Mentored 50+ developers across full-stack, AI/ML, and Web3 stacks, with architectural guidance on scalability and clean API design.",
      highlights: ["50+ Mentees Guided"],
    },
  ] satisfies LeadershipRole[],

  achievements: [
    {
      title: "HexaFalls S2: 1st Runner Up",
      subtitle: "Best Use of Gemini API · 1st Runner Up, Actian Challenge Track",
      date: "Jul 2026",
      sortDate: "2026-07",
      description:
        "Built a full-stack application in 45 hours leveraging Gemini API for intelligent features. Secured dual recognition: 1st Runner Up overall and Best Use of Gemini API, plus 1st Runner Up in Actian Challenge Track.",
    },
    {
      title: "Open Odyssey: Winner",
      subtitle: "1st Place, Full-Stack Web3 · 120 teams",
      date: "Nov 2024",
      sortDate: "2024-11",
      description:
        "Led frontend and smart-contract integration for a decentralized marketplace; won judges' choice for real-world impact.",
    },
    {
      title: "East India Blockchain Summit: Top 10",
      subtitle: "Top 10 Project",
      date: "Jan 2025",
      sortDate: "2025-01",
      description: "Selected among the top 10 projects for blockchain innovation and impact.",
    },
    {
      title: "Hult Prize: On-Campus Winner",
      subtitle: "Campus Winner, Business Innovation",
      date: "Feb 2025",
      sortDate: "2025-02",
      description: "Won the on-campus Hult Prize competition for a social impact startup idea, leading team ideation and pitch.",
    },
    {
      title: "Hult Prize: National Top 10",
      subtitle: "Top 10 at National Finals",
      date: "Apr 2025",
      sortDate: "2025-04",
      description: "Advanced from campus to the national stage and ranked among the top 10 teams nationally.",
    },
    {
      title: "How-To-Hackathons: Published Article",
      subtitle: "SamarthTech Hashnode",
      date: "Jul 2025",
      sortDate: "2025-07",
      description:
        "Authored a hands-on guide covering hackathon planning, execution, and pitching: 4k+ reads and community shares.",
    },
    {
      title: "Web3 Hackathons: Finalist",
      subtitle: "Multiple Web3 Hackathon Finalist",
      date: "2025",
      sortDate: "2025",
      description: "Finalist across several Web3 hackathons, delivering fast prototypes integrating smart contracts and DApps.",
    },
    {
      title: "Open Odyssey 2.0: Organiser",
      subtitle: "MLH Hackathon Program",
      date: "Oct 2025",
      sortDate: "2025-10",
      description: "Organized a large-scale open-source program with 200+ developers and learning pathways for beginners.",
    },
    {
      title: "CCU Fest: STRUP",
      subtitle: "2 Investor Commitments",
      date: "Nov 2025",
      sortDate: "2025-11",
      description: "Presented a startup idea at CCU Fest STRUP and secured interest from two potential investors.",
    },
    {
      title: "Hack N Pitch: Finalist",
      subtitle: "Pitch Competition Finalist",
      date: "Nov 2024",
      sortDate: "2024-11",
      description: "Reached the final round of Hack N Pitch, delivering a concise demo and investor-style pitch to judges.",
    },
  ] satisfies Achievement[],
}

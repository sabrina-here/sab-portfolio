export interface Project {
  id: string;
  title: string;
  category: 'Full-Stack' | 'Frontend' | 'AI & Web';
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  liveUrl: string;
  githubUrl?: string;
  featured: boolean;
  status?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  details?: string;
}

export const PERSONAL_INFO = {
  name: "Sabrina Khan",
  title: "Frontend Engineer & Aspiring Full-Stack Developer",
  shortBio: "Building high-performance, responsive web applications with React, Next.js, and TypeScript, with a growing foundation in scalable backend systems with Node.js & MongoDB.",
  longBio: "Proactive and solution-driven Software Developer with a B.Sc. in Computer Science & Engineering (CGPA 3.90). Over 1 year of professional software engineering experience architecting enterprise frontend applications for international clients with Next.js, TypeScript, Redux, and Tailwind CSS. Actively expanding into full-stack engineering, driven by a strong foundation in DSA, problem solving, and modern web architectures.",
  email: "sabrina.khan.pau@gmail.com",
  phone: "+880 1868 115678",
  location: "Dhaka, Bangladesh",
  availability: "Open to Full-time & Remote Opportunities",
  socials: {
    github: "https://github.com/sabrina-here",
    linkedin: "https://www.linkedin.com/in/sabrina-khan-abb05b263/",
    leetcode: "https://leetcode.com/u/sab-here/",
    codeforces: "https://codeforces.com/profile/justSab",
  },
  stats: [
    { label: "Industry Experience", value: "1+ Year" },
    { label: "B.Sc. CSE CGPA", value: "3.90 / 4.00" },
    { label: "LeetCode & Codeforces", value: "100+ Solved" },
    { label: "Specialization", value: "React • Next.js • TS" },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "quizzing-buddy",
    title: "QuizzingBuddy",
    category: "AI & Web",
    tagline: "AI-Powered Interactive Quiz & Knowledge Platform",
    description: "An intelligent quiz assessment platform that utilizes AI algorithms for dynamic question evaluation, offering real-time score tracking and interactive study sessions.",
    highlights: [
      "Dynamic quiz generation & instant evaluation system with smart timer controls",
      "Firebase authentication and real-time leaderboard data synchronization",
      "Sleek, responsive interface built with React, Tailwind CSS, and custom UI components",
      "Optimized API workflows between client and backend services"
    ],
    techStack: ["React", "Firebase", "Tailwind CSS", "Express.js", "MongoDB", "REST APIs"],
    liveUrl: "https://quizzingbuddy.web.app/",
    featured: true
  },
  {
    id: "shoe-resale",
    title: "Shoe Resale",
    category: "Full-Stack",
    tagline: "Multi-Role Pre-Owned Footwear Marketplace",
    description: "A full-featured peer-to-peer e-commerce platform allowing users to buy, sell, and verify pre-owned footwear with dedicated role-based permission tiers.",
    highlights: [
      "Role-based authentication (Admin, Seller, Buyer) with customized permission dashboards",
      "Full CRUD operations for product inventory, advertised banners, and order statuses",
      "RESTful backend built with Express & MongoDB featuring secure query filtering",
      "Interactive product showcase, search filters, and smooth checkout flow"
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "Tailwind CSS"],
    liveUrl: "https://shoe-resale-3e39f.web.app/",
    featured: true
  },
  {
    id: "machbazar",
    title: "MachBazar",
    category: "Full-Stack",
    tagline: "Niche Seafood & Fresh Fish E-Commerce Platform",
    description: "A specialized digital marketplace tailored for fresh fish and seafood commerce, featuring categorized catalog browsing, cart operations, and merchant management.",
    highlights: [
      "Categorized catalog with real-time pricing, stock states, and product inspection views",
      "Client-side persistent shopping cart with instant subtotal and tax calculation",
      "Admin management module for real-time inventory updates and customer order tracking",
      "Mobile-optimized responsive design ensuring frictionless purchasing on any device"
    ],
    techStack: ["React", "Express.js", "MongoDB", "Firebase", "Tailwind CSS", "REST API"],
    liveUrl: "https://machbazar-89a98.web.app/",
    featured: true
  },
  {
    id: "flagship-fullstack",
    title: "Flagship Full-Stack Platform",
    category: "Full-Stack",
    tagline: "Next-Gen Full-Stack Architecture (In Development)",
    description: "Currently engineering an end-to-end full-stack application leveraging the Next.js 14 App Router, relational database modeling with PostgreSQL/Prisma, server actions, and secure JWT authentication.",
    highlights: [
      "Modern server-side rendering (SSR) and Server Components for maximal SEO and speed",
      "Robust relational database schema design with migrations and type safety",
      "Comprehensive REST & real-time webhook integrations",
      "Production-ready deployment pipeline with automated testing"
    ],
    techStack: ["Next.js 14", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Tailwind CSS"],
    liveUrl: "#",
    featured: false,
    status: "Currently Building"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Junior Frontend Developer",
    company: "Genie Info Tech",
    location: "Dhaka, Bangladesh",
    period: "August 2025 – Present",
    type: "Full-time",
    description: "Spearheading frontend architecture and enterprise feature development for a large delivery management system commissioned by a prominent logistics company in Denmark.",
    achievements: [
      "Engineered complex, high-traffic frontend workflows and interactive dashboards using Next.js, TypeScript, and Material UI (MUI).",
      "Architected centralized global state management pipelines using Redux Toolkit, handling high-frequency operational updates.",
      "Integrated secure REST APIs with comprehensive validation, caching, and resilient error recovery mechanisms.",
      "Leveraged modern AI development tools and engineering practices to accelerate sprint delivery by 30% while maintaining high code quality."
    ],
    technologies: ["Next.js", "TypeScript", "React", "Redux Toolkit", "Material UI (MUI)", "REST APIs", "Git"]
  },
  {
    role: "Frontend Developer Intern",
    company: "Genie Info Tech",
    location: "Dhaka, Bangladesh",
    period: "May 2025 – August 2025",
    type: "Internship",
    description: "Contributed to core UI module development, component modularity, and cross-browser responsiveness for the Denmark delivery platform.",
    achievements: [
      "Translated complex Figma design specifications into pixel-perfect, accessible, and responsive components.",
      "Built performant data tables with custom filtering, pagination, sorting, and export capabilities.",
      "Collaborated closely with senior backend engineers to define API contracts and data models."
    ],
    technologies: ["React", "TypeScript", "Redux", "Tailwind CSS", "MUI", "Git"]
  }
];

export const SKILL_CATEGORIES = [
  {
    name: "Frontend Core",
    description: "Production-grade UI engineering with strict typing & state management",
    skills: [
      { name: "React.js", level: "Advanced", icon: "react" },
      { name: "Next.js (App / Pages)", level: "Proficient", icon: "next" },
      { name: "TypeScript", level: "Proficient", icon: "ts" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "js" },
      { name: "Redux / Redux Toolkit", level: "Proficient", icon: "redux" },
      { name: "Tailwind CSS", level: "Advanced", icon: "tailwind" },
      { name: "Material UI (MUI)", level: "Proficient", icon: "mui" },
      { name: "HTML5 & CSS3 / SCSS", level: "Advanced", icon: "html" },
      { name: "Bootstrap", level: "Proficient", icon: "bootstrap" }
    ]
  },
  {
    name: "Backend & Database (Full-Stack Track)",
    description: "Building robust REST APIs, authentication flows & database schemas",
    skills: [
      { name: "Node.js", level: "Intermediate", icon: "node" },
      { name: "Express.js", level: "Intermediate", icon: "express" },
      { name: "MongoDB & Mongoose", level: "Intermediate", icon: "mongodb" },
      { name: "Firebase (Auth & Firestore)", level: "Proficient", icon: "firebase" },
      { name: "RESTful API Design", level: "Proficient", icon: "api" },
      { name: "Authentication (JWT / OAuth)", level: "Intermediate", icon: "auth" }
    ]
  },
  {
    name: "Computer Science & Programming",
    description: "Algorithmic thinking, data structures & competitive programming",
    skills: [
      { name: "C++", level: "Proficient", icon: "cpp" },
      { name: "C", level: "Proficient", icon: "c" },
      { name: "Python", level: "Intermediate", icon: "python" },
      { name: "Data Structures & Algorithms", level: "Proficient", icon: "dsa" },
      { name: "Object-Oriented Programming (OOP)", level: "Proficient", icon: "oop" },
      { name: "Problem Solving", level: "Advanced", icon: "problem" }
    ]
  },
  {
    name: "Workflow, Tools & Architecture",
    description: "Modern engineering toolchain and AI-accelerated workflows",
    skills: [
      { name: "Git & GitHub", level: "Proficient", icon: "git" },
      { name: "AI Workflow Optimization", level: "Advanced", icon: "ai" },
      { name: "Vite / Webpack", level: "Proficient", icon: "vite" },
      { name: "Postman API Testing", level: "Proficient", icon: "postman" },
      { name: "Clean Architecture & Refactoring", level: "Proficient", icon: "clean" },
      { name: "Responsive & Accessible UI", level: "Advanced", icon: "a11y" }
    ]
  }
];

export const EDUCATIONS: Education[] = [
  {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "Primeasia University",
    period: "Graduated January 2025",
    grade: "CGPA: 3.90 / 4.00",
    details: "Graduated with High Distinction. Strong coursework in Data Structures, Algorithms, Database Systems, Software Engineering, and Web Technologies."
  },
  {
    degree: "Higher Secondary Certificate (HSC) — Science",
    institution: "Shaheed Bir Uttam Lt. Anwar Girls College",
    period: "Passed 2020",
    grade: "GPA: 5.00 / 5.00",
    details: "Achieved highest academic grade in Science curriculum."
  },
  {
    degree: "Secondary School Certificate (SSC) — Science",
    institution: "Banani Bidyaniketan School and College",
    period: "Passed 2018",
    grade: "GPA: 5.00 / 5.00",
    details: "Achieved highest academic grade with distinction."
  }
];

export const COMPETITIVE_PROGRAMMING = {
  leetcode: {
    handle: "sab-here",
    url: "https://leetcode.com/u/sab-here/",
    solved: "50+ Solved",
    focus: "Arrays, Strings, Hash Tables, Trees & Linked Lists"
  },
  codeforces: {
    handle: "justSab",
    url: "https://codeforces.com/profile/justSab",
    solved: "50+ Solved",
    focus: "Competitive Math, Logic & Dynamic Problem Solving"
  }
};

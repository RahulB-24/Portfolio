import { Project, Experience, Certification, SkillCategory, Publication, Achievement } from './types';
import { Layout, Server, Database, Cloud, Code, Brain, Terminal } from 'lucide-react';

export const SOCIAL_LINKS = {
  github: "https://github.com/RahulB-24",
  linkedin: "https://www.linkedin.com/in/rahul-balachandar/",
  email: "mailto:rahulbalachandar024@gmail.com", 
  resume: "/Rahul Balachandar Resume.pdf" 
};

export const SKILL_CATEGORIES: (SkillCategory & { icon: any })[] = [
  {
    title: "Programming",
    skills: [
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "C++", icon: "devicon-cplusplus-plain colored" },
      { name: "SQL", icon: "devicon-mysql-plain colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" }
    ],
    icon: Code
  },
  {
    title: "Backend Engineering",
    skills: [
      { name: "Spring Boot", icon: "devicon-spring-original colored" },
      { name: "Flask", icon: "devicon-flask-original" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express", icon: "devicon-express-original" },
      { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
      { name: "REST APIs", icon: "devicon-azuresqldatabase-plain colored" },
      { name: "Auth / RBAC", icon: "devicon-oauth-plain" }
    ],
    icon: Server
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Vite", icon: "devicon-vitejs-plain colored" },
      { name: "HTML", icon: "devicon-html5-plain colored" },
      { name: "CSS", icon: "devicon-css3-plain colored" },
      { name: "Tailwind", icon: "devicon-tailwindcss-original colored" }
    ],
    icon: Layout
  },
  {
    title: "Data & Storage",
    skills: [
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "Redis", icon: "devicon-redis-plain colored" }
    ],
    icon: Database
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub Actions", icon: "devicon-githubactions-plain colored" },
      { name: "CI/CD", icon: "devicon-gitlab-plain colored" },
      { name: "Linux", icon: "devicon-linux-plain" },
      { name: "Vercel", icon: "devicon-vercel-original" },
      { name: "Render", icon: "devicon-azuredevops-plain colored" }
    ],
    icon: Cloud
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "TensorFlow", icon: "devicon-tensorflow-original colored" },
      { name: "PyTorch", icon: "devicon-pytorch-original colored" },
      { name: "Scikit-Learn", icon: "devicon-scikitlearn-plain colored" },
      { name: "XGBoost", icon: "devicon-python-plain colored" },
      { name: "LightGBM", icon: "devicon-python-plain colored" },
      { name: "Pandas", icon: "devicon-pandas-plain colored" },
      { name: "NumPy", icon: "devicon-numpy-plain colored" },
      { name: "YOLOv8", icon: "devicon-opencv-plain colored" }
    ],
    icon: Brain
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Cimplify.AI",
    role: "Software Engineer Intern",
    duration: "May 2026 – Jul 2026",
    points: [
      "Built a production planning and scheduling engine that models 7 sequential manufacturing operations using batch-transfer scheduling, eliminating dependency conflicts and validating 105 component-cluster scenarios with zero workflow violations.",
      "Developed a 12-endpoint FastAPI backend orchestrating 6 ML models and manufacturing data pipelines to generate production schedules, procurement plans, and cost estimates from inventory, supplier, and machine-capacity data.",
      "Implemented inventory tracking across 7 manufacturing stages to prevent redundant scheduling, and built a scenario-analysis module that evaluates alternative machine allocations to identify bottlenecks and improve resource utilization."
    ]
  },
  {
    company: "TANSAM",
    role: "AI Engineer Intern",
    duration: "May 2025 – Jun 2025",
    points: [
      "Deployed a full-stack chlorine detection system for DPD water quality testing across Tamil Nadu public health facilities, reducing manual testing time by 80%.",
      "Built a two-stage ML pipeline — YOLOv8 for ROI localization and ResNet-50 CNN for multi-class classification (0–5 ppm) — achieving 92% accuracy on 500+ real-world samples; served via Flask REST API with React.js frontend."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "ExpenseOps",
    tech: ["Java", "Spring Boot", "PostgreSQL", "React", "Docker"],
    description: [
      "Built a multi-tenant SaaS expense platform enforcing tenant-level data isolation and JWT-based role access across 4 permission levels, featuring a 5-stage approval workflow and immutable audit trails for compliance and traceability.",
      "Engineered 20+ REST APIs using Spring Boot and PostgreSQL with optimistic locking for concurrent-write safety; load-tested with k6 and maintained sub-second response times under concurrent workloads."
    ],
    github: SOCIAL_LINKS.github,
    featured: true
  },
  {
    title: "AI SQL Optimiser",
    tech: ["FastAPI", "React", "PostgreSQL", "LangChain", "Pinecone", "Docker"],
    description: [
      "Built an AI-powered SQL optimization platform that analyzes queries, scores complexity across 4 tiers, and detects 4 SQL performance anti-patterns before generating explanations, index suggestions, and optimized rewrites through a 4-stage LangChain pipeline powered by Gemini.",
      "Streamed optimization results in real time using Server-Sent Events (SSE) and leveraged Pinecone vector search to retrieve similar historical query optimizations as context, improving the relevance and accuracy of LLM-generated recommendations."
    ],
    github: SOCIAL_LINKS.github,
    featured: true
  },
  {
    title: "LinkShelf",
    tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
    description: [
      "Built a bookmark management platform with 16 REST endpoints, a normalized 5-table PostgreSQL schema, GIN-indexed tsvector full-text search, and a multi-browser import engine supporting Chrome, Firefox, Safari, and Edge exports with failure recovery.",
      "Implemented Open Graph metadata scraping with automatic timeout handling, database-level URL deduplication, and IP-based rate limiting (500 req / 15 min) to improve platform reliability and search performance."
    ],
    github: SOCIAL_LINKS.github,
    featured: true
  },
  {
    title: "Chlorine Level Detection",
    tech: ["Python", "Flask", "React", "YOLOv8", "ResNet-50"],
    description: [
      "Production-deployed system for analyzing DPD chemical tests.",
      "Integrated deep learning models into a scalable Flask API.",
      "Built a user-friendly React interface for lab technicians."
    ],
    github: SOCIAL_LINKS.github,
    featured: true
  },
  {
    title: "MoodCast",
    tech: ["FastAPI", "React", "Docker", "Librosa", "Spotify API"],
    description: [
      "Music recommendation system with a custom audio feature extraction pipeline.",
      "Designed a stateless API with complex ranking and deduplication logic."
    ],
    github: SOCIAL_LINKS.github,
    featured: true
  },
  {
    title: "Hybrid Intrusion Detection",
    tech: ["Python", "CNN-BiLSTM", "XAI", "Flask", "React"],
    description: [
      "Research-backed security system deployed for medical sensor networks.",
      "Integrated Explainable AI (XAI) to provide transparency in threat detection."
    ],
    github: SOCIAL_LINKS.github,
    featured: true
  },
  {
    title: "Black Sigatoka CNN-ViT",
    tech: ["Python", "PyTorch", "ViT"],
    description: ["Agricultural disease detection using Vision Transformers."],
    featured: false
  },
  {
    title: "DeepFake Detection",
    tech: ["Python", "ViT", "OpenCV"],
    description: ["Video analysis pipeline for detecting synthetic media."],
    featured: false
  },
  {
    title: "Ride Allocation System",
    tech: ["Java", "Algorithms"],
    description: ["Optimized resource allocation logic for ride-sharing scenarios."],
    featured: false
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Machine Learning Specialization",
    issuer: "Stanford Online / DeepLearning.AI",
    date: "July 14, 2025",
    link: "https://www.coursera.org/account/accomplishments/specialization/C1YM2RK8HKBU",
    image: "/MLSpecialization.png",
    details: [
      "Supervised Machine Learning: Regression and Classification",
      "Advanced Learning Algorithms",
      "Unsupervised Learning, Recommenders, RL"
    ]
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    date: "July 8, 2024",
    link: "https://www.coursera.org/account/accomplishments/verify/JUGRY6ZANCV5",
    image: "/PythonForDataScience.png",
    details: ["Python programming for scalable data analysis and backend scripting."]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    conference: "IEEE ICERECT-2025",
    title: "ENDCL: An Attention-Enhanced CNN-BiLSTM Model for Automated Cardiovascular Disease Detection",
    status: "Published in IEEE Xplore"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "LeetCode — Solved 250+ Problems",
    source: "LeetCode",
    link: "https://leetcode.com/u/Rahul__-24/"
  },
  {
    title: "IEEE ICERECT-2025 Conference Paper Publication",
    source: "IEEE",
    description: "Published in IEEE Xplore: ENDCL: Attention-Enhanced CNN-BiLSTM Model for Automated Cardiovascular Disease Detection."
  },
  {
    title: "HackHub'25 National-Level Hackathon Finalist (Top 150/2000+)",
    source: "HackHub",
    description: "Selected among Top 150 Teams from 2000+ Applicants. Built DeepShield, a Vision Transformer-based Deepfake Detection System."
  }
];
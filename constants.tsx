import { Project, Experience, Certification, SkillCategory, Publication } from './types';
import { Layout, Server, Database, Cloud, Code, Brain, Terminal } from 'lucide-react';

export const SOCIAL_LINKS = {
  github: "https://github.com/RahulB-24",
  linkedin: "https://www.linkedin.com/in/rahul-balachandar-a9436a293/",
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
      { name: "Flask", icon: "devicon-flask-original" }, // Kept white for dark mode
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express", icon: "devicon-express-original" }, // Often dark, remove colored to make white
      { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
      { name: "REST APIs", icon: "devicon-azuresqldatabase-plain colored" }, 
      { name: "Auth / RBAC", icon: "devicon-oauth-plain" } // Removed colored to make it visible (white)
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
      { name: "AWS EC2", icon: "devicon-amazonwebservices-plain-wordmark colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "GitHub Actions", icon: "devicon-githubactions-plain colored" },
      { name: "CI/CD", icon: "devicon-gitlab-plain colored" },
      { name: "Linux", icon: "devicon-linux-plain" }, // Removed colored
      { name: "Vercel", icon: "devicon-vercel-original" } // Removed colored
    ],
    icon: Cloud
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "TensorFlow", icon: "devicon-tensorflow-original colored" },
      { name: "PyTorch", icon: "devicon-pytorch-original colored" },
      { name: "Scikit-Learn", icon: "devicon-scikitlearn-plain colored" }, // Switched to plain
      { name: "Pandas", icon: "devicon-pandas-plain colored" }, // Switched to plain
      { name: "NumPy", icon: "devicon-numpy-plain colored" }, // Switched to plain
      { name: "YOLOv8", icon: "devicon-opencv-plain colored" }
    ],
    icon: Brain
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "TANSAM",
    role: "Machine Learning Intern",
    points: [
      "Built a production software system for automated DPD water testing, deploying it into a real public health workflow.",
      "Designed a robust two-stage vision pipeline using YOLOv8 for Region of Interest (ROI) detection and ResNet-50 for classification (0-5 ppm).",
      "Engineered the full-stack architecture with a Flask REST API backend and React frontend.",
      "Reduced manual testing time by ~80% while achieving ~92% accuracy across 500+ real-world samples."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "ExpenseOps",
    tech: ["Java", "Spring Boot", "PostgreSQL", "React", "Docker"],
    description: [
      "Full-stack SaaS for corporate expense tracking with multi-tenancy architecture.",
      "Implemented JWT-based isolation and Role-Based Access Control (RBAC) using Spring Security.",
      "Developed 20+ optimized REST endpoints focusing on transaction integrity and low-memory footprint."
    ],
    github: SOCIAL_LINKS.github,
    featured: true
  },
  {
    title: "LinkShelf",
    tech: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
    description: [
      "High-performance bookmark management platform with full-text search indexing.",
      "Engineered an import engine for browser exports and implemented rate limiting for API protection.",
      "Focus on clean API design, efficient data modeling, and metadata enrichment."
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
    status: "Awaiting publication"
  }
];
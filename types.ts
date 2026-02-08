export interface Project {
  title: string;
  tech: string[];
  description: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  category?: string;
}

export interface Experience {
  company: string;
  role: string;
  duration?: string;
  points: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  image: string;
  link: string;
  details: string[];
}

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface Publication {
  conference: string;
  title: string;
  status: string;
}

import React from 'react';
import { Mail, Github, MapPin, ExternalLink, Download, Award, GraduationCap, Briefcase, Zap, Globe } from 'lucide-react';
import { Project, Experience, Activity, SkillGroup } from './types';

export const PERSONAL_INFO = {
  name: "Sun Yixuan (Sun)",
  title: "Software Engineering Undergraduate | Front-end (Vue3) | LLM Applications (RAG / Text-to-SQL)",
  email: "19850437012@163.com",
  phone: "19850437012",
  location: "Nanjing, Jiangsu",
  github: "https://github.com/", // Placeholder
  about: "A highly motivated Software Engineering junior with a GPA of 3.8 (Rank 1/36). Proficient in full-stack development with a strong focus on Vue3 and LLM integration. Experienced in data crawling and cybersecurity, holding a CISP-IRE certification. Passionate about exploring cutting-edge AI technologies and delivering robust software solutions.",
  stats: [
    { label: "GPA", value: "3.8 (1/36)", icon: <GraduationCap size={20} /> },
    { label: "English Proficiency", value: "CET-4: 609 / CET-6: 576", icon: <Globe size={20} /> },
    { label: "Internships", value: "3 Professional Roles", icon: <Briefcase size={20} /> },
    { label: "Certification", value: "CISP-IRE", icon: <Award size={20} /> }
  ]
};

export const PROJECTS: Project[] = [
  {
    title: "Digital Twin & Knowledge Graph Smart Warehousing",
    period: "Nov 2023 - Jun 2024",
    role: "Front-end Developer",
    description: [
      "Assisted in front-end development using modern frameworks.",
      "Designed and implemented project architecture diagrams and demonstration visuals."
    ],
    tags: ["Digital Twin", "Knowledge Graph", "UI/UX"]
  },
  {
    title: "Water Resources Business Management Platform",
    period: "Oct 2024 - Nov 2024",
    role: "Front-end Developer",
    description: [
      "Developed modular front-end components and responsive pages.",
      "Utilized Vue3 and Vuetify component library for professional UI consistency."
    ],
    tags: ["Vue3", "Vuetify", "Enterprise Project"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Nanjing Yike Information Technology Co., Ltd.",
    role: "Front-end Developer (Vue + Vant)",
    period: "Jun 2025 - Aug 2025",
    points: [
      "Phase 1: Developed the 'Book Recommendation Module' featuring random discovery.",
      "Phase 2: Built the 'Data Statistics Module' with complex charts for novel details.",
      "Phase 3: Created 'Social Feed Module' for user dynamic sharing and interaction."
    ],
    tags: ["Vue3", "Vant", "Data Visualization"]
  },
  {
    company: "Nanjing Glarun-SinoVation (Guorui Xinwei) Software Co., Ltd.",
    role: "Intern (Technical Research Group)",
    period: "Jan 2025 - Feb 2025",
    points: [
      "Processed high-volume data using Python for LLM training sets.",
      "Engineered Text-to-SQL training data using Oracle Database.",
      "Explored and tested LLM fine-tuning, RLHF, Few-shot prompting, and RAG pipelines.",
      "Assisted in LLM application development using LangChain."
    ],
    tags: ["Python", "LLM", "RAG", "Text-to-SQL", "LangChain"]
  },
  {
    company: "Hongcheng Big Data Research Institute",
    role: "Crawler & Data Engineer",
    period: "Jul 2024 - Aug 2024",
    points: [
      "Developed project demo front-end from scratch.",
      "Engineered Python crawlers for large-scale public opinion data collection.",
      "Utilized NLP methods to assist the team in sentiment and content analysis."
    ],
    tags: ["Python", "Web Crawling", "NLP", "Data Engineering"]
  }
];

export const ACTIVITIES: Activity[] = [
  {
    organization: "College Student Union",
    role: "Vice President",
    period: "Aug 2025 - May 2026",
    points: ["Coordinating and overseeing overall student affairs and organizational work."]
  },
  {
    organization: "Student Union - Career Development Dept.",
    role: "Department Head",
    period: "Ongoing",
    points: [
      "Organized career development events and corporate seminars with partners like New Oriental.",
      "Liaised with international enterprises to foster cooperative internship projects."
    ]
  },
  {
    organization: "Professional Model United Nations",
    role: "Chair",
    period: "Jan 2024 - Feb 2024",
    points: [
      "Allocated tasks and managed delegate activities.",
      "Drafted key materials and chaired the assembly sessions."
    ]
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Front-end",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "Vue3", "Vant UI", "Vuetify", "Tailwind CSS"]
  },
  {
    category: "Back-end & DB",
    items: ["Java SE", "Spring Boot (Basics)", "PHP", "MySQL", "Oracle Database"]
  },
  {
    category: "AI & Data",
    items: ["Python", "Web Crawling", "LangChain", "RAG", "NLP Fundamentals", "RLHF/Fine-tuning"]
  },
  {
    category: "Cybersecurity",
    items: ["Penetration Testing (Basics)", "Incident Response", "CISP-IRE Certified"]
  }
];

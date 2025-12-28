
export interface Project {
  title: string;
  period: string;
  role: string;
  description: string[];
  tags: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  points: string[];
  tags: string[];
}

export interface Activity {
  organization: string;
  role: string;
  period: string;
  points: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

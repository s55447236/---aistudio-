
export type Page = 'home' | 'portfolio' | 'blog' | 'project-detail';
export type Language = 'zh' | 'en';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  role: string;
  year: string;
}

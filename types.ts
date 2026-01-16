
export type Page = 'home' | 'portfolio' | 'blog' | 'insights' | 'project-detail' | 'blog-detail';
export type Language = 'zh' | 'en';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  role: string;
  year: string;
}

export interface Article {
  id: string;
  tag: string;
  date: string;
  title: string;
  desc: string;
}


export type Page = 'home' | 'portfolio' | 'blog';
export type Language = 'zh' | 'en';

export interface Project {
  id: number;
  title: string;
  category: string;
}

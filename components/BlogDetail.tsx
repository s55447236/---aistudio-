
import React from 'react';
import { Language } from '../types';

// Import all 10 distinct article components
import ArticleUXTrends from './ArticleUXTrends';
import ArticleAIRevolution from './ArticleAIRevolution';
import ArticleMinimalism from './ArticleMinimalism';
import ArticleComplexity from './ArticleComplexity';
import ArticleDataViz from './ArticleDataViz';
import ArticleAtomicDesign from './ArticleAtomicDesign';
import ArticleHumanAI from './ArticleHumanAI';
import ArticleSaaS from './ArticleSaaS';
import ArticleInclusivity from './ArticleInclusivity';
import ArticleMotion from './ArticleMotion';

interface BlogDetailProps {
  articleId: string;
  language: Language;
  onBack: () => void;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ articleId, language, onBack }) => {
  // Direct routing between 10 separate TSX files
  switch (articleId) {
    case 'ux-trends-2026':
      return <ArticleUXTrends language={language} onBack={onBack} />;
    case 'ai-ux-revolution':
      return <ArticleAIRevolution language={language} onBack={onBack} />;
    case 'minimalism-evolution':
      return <ArticleMinimalism language={language} onBack={onBack} />;
    case 'complexity-design':
      return <ArticleComplexity language={language} onBack={onBack} />;
    case 'data-viz-best-practices':
      return <ArticleDataViz language={language} onBack={onBack} />;
    case 'atomic-design-2024':
      return <ArticleAtomicDesign language={language} onBack={onBack} />;
    case 'human-centered-ai':
      return <ArticleHumanAI language={language} onBack={onBack} />;
    case 'saas-dashboards':
      return <ArticleSaaS language={language} onBack={onBack} />;
    case 'inclusive-systems':
      return <ArticleInclusivity language={language} onBack={onBack} />;
    case 'motion-for-utility':
      return <ArticleMotion language={language} onBack={onBack} />;
    default:
      return <ArticleUXTrends language={language} onBack={onBack} />;
  }
};

export default BlogDetail;

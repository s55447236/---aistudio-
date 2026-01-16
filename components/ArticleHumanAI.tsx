
import React from 'react';
import ArticleTemplate, { ArticleSection } from './ArticleTemplate';
import { Language } from '../types';

const ArticleHumanAI: React.FC<{ language: Language, onBack: () => void }> = ({ language, onBack }) => {
  const isEn = language === 'en';
  return (
    <ArticleTemplate 
      language={language}
      tag={isEn ? "HCI" : "人机交互"}
      date="2024.01.10"
      title={isEn ? "Human-Centered AI" : "以人为本的 AI 交互设计"}
      subtitle={isEn ? "Transparency and control." : "AI 时代的透明度与用户掌控感。"}
      sections={[{ type: 'paragraph', text: isEn ? "Designing for trust..." : "为信任而设计..." }]}
      onBack={onBack}
    />
  );
};

export default ArticleHumanAI;

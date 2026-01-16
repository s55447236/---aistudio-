
import React from 'react';
import ArticleTemplate, { ArticleSection } from './ArticleTemplate';
import { Language } from '../types';

const ArticleInclusivity: React.FC<{ language: Language, onBack: () => void }> = ({ language, onBack }) => {
  const isEn = language === 'en';
  return (
    <ArticleTemplate 
      language={language}
      tag={isEn ? "Inclusive" : "包容性"}
      date="2023.12.15"
      title={isEn ? "Inclusive Design Systems" : "构建包容性的设计系统"}
      subtitle={isEn ? "Accessible by default." : "无障碍设计原则的系统化落地。"}
      sections={[{ type: 'paragraph', text: isEn ? "Everyone deserves good UX..." : "每个人都值得拥有优秀的体验..." }]}
      onBack={onBack}
    />
  );
};

export default ArticleInclusivity;

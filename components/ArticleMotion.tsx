
import React from 'react';
import ArticleTemplate, { ArticleSection } from './ArticleTemplate';
import { Language } from '../types';

const ArticleMotion: React.FC<{ language: Language, onBack: () => void }> = ({ language, onBack }) => {
  const isEn = language === 'en';
  return (
    <ArticleTemplate 
      language={language}
      tag={isEn ? "Motion" : "动态设计"}
      date="2023.12.01"
      title={isEn ? "Motion as Utility" : "动效：作为功能性工具"}
      subtitle={isEn ? "Logic over decoration." : "动效如何引导用户注意力并解释关系。"}
      sections={[{ type: 'paragraph', text: isEn ? "Animation with purpose..." : "有目的性的动画..." }]}
      onBack={onBack}
    />
  );
};

export default ArticleMotion;

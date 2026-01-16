
import React from 'react';
import ArticleTemplate, { ArticleSection } from './ArticleTemplate';
import { Language } from '../types';

const ArticleAtomicDesign: React.FC<{ language: Language, onBack: () => void }> = ({ language, onBack }) => {
  const isEn = language === 'en';
  return (
    <ArticleTemplate 
      language={language}
      tag={isEn ? "Methods" : "方法论"}
      date="2024.01.20"
      title={isEn ? "Atomic Design 2024" : "2024 原子设计实战指南"}
      subtitle={isEn ? "Modern design system workflows." : "在快速迭代中构建高可用的原子化组件库。"}
      sections={[{ type: 'paragraph', text: isEn ? "Building scalable systems..." : "构建可扩展的系统..." }]}
      onBack={onBack}
    />
  );
};

export default ArticleAtomicDesign;

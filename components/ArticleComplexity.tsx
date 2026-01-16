
import React from 'react';
import ArticleTemplate, { ArticleSection } from './ArticleTemplate';
import { Language } from '../types';

const ArticleComplexity: React.FC<{ language: Language, onBack: () => void }> = ({ language, onBack }) => {
  const isEn = language === 'en';
  const sections: ArticleSection[] = isEn ? [
    { type: 'paragraph', text: "B-end products often deal with massive datasets and intricate logic. Designing for complexity is about the art of de-noising." },
    { type: 'heading', text: "The Hierarchy of Information" },
    { type: 'paragraph', text: "We must provide clear action paths. Progressive disclosure is our best friend when dealing with dense dashboards." }
  ] : [
    { type: 'paragraph', text: "B端产品通常处理海量数据集和复杂的逻辑。为复杂性而设计就是关于“降噪”的艺术。" },
    { type: 'heading', text: "信息的层级结构" },
    { type: 'paragraph', text: "我们必须提供清晰的行动路径。在处理密集的仪表盘时，渐进式披露是我们最好的朋友。" }
  ];

  return (
    <ArticleTemplate 
      language={language}
      tag={isEn ? "System" : "系统设计"}
      date="2024.02.15"
      title={isEn ? "Designing for Complexity" : "为复杂系统而设计"}
      subtitle={isEn ? "The art of de-noising B-end products." : "B端产品的降噪艺术与信息架构。"}
      sections={sections}
      onBack={onBack}
    />
  );
};

export default ArticleComplexity;

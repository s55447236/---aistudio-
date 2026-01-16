
import React from 'react';
import ArticleTemplate, { ArticleSection } from './ArticleTemplate';
import { Language } from '../types';

const ArticleDataViz: React.FC<{ language: Language, onBack: () => void }> = ({ language, onBack }) => {
  const isEn = language === 'en';
  const sections: ArticleSection[] = isEn ? [
    { type: 'paragraph', text: "Charts are more than just data presentation; they are storytelling tools for deep insights." },
    { type: 'bullet', text: "Visual encoding efficiency" },
    { type: 'bullet', text: "Narrative flow in dashboards" }
  ] : [
    { type: 'paragraph', text: "图表不仅是数据的呈现，更是讲述深度洞察的工具。" },
    { type: 'bullet', text: "视觉编码的效率" },
    { type: 'bullet', text: "仪表盘中的叙事流" }
  ];

  return (
    <ArticleTemplate 
      language={language}
      tag={isEn ? "Viz" : "可视化"}
      date="2024.02.01"
      title={isEn ? "Data Viz Narratives" : "数据可视化的叙事逻辑"}
      subtitle={isEn ? "Turning numbers into stories." : "将数字转化为直观故事的方法论。"}
      sections={sections}
      onBack={onBack}
    />
  );
};

export default ArticleDataViz;


import React from 'react';
import ArticleTemplate, { ArticleSection } from './ArticleTemplate';
import { Language } from '../types';

const ArticleSaaS: React.FC<{ language: Language, onBack: () => void }> = ({ language, onBack }) => {
  const isEn = language === 'en';
  return (
    <ArticleTemplate 
      language={language}
      tag={isEn ? "SaaS" : "SaaS 设计"}
      date="2023.12.25"
      title={isEn ? "Future SaaS Dashboards" : "未来 SaaS 仪表盘趋势"}
      subtitle={isEn ? "From monitors to actions." : "从监控中心向行动中心的职能转变。"}
      sections={[{ type: 'paragraph', text: isEn ? "The next generation of SaaS UI..." : "下一代 SaaS 界面..." }]}
      onBack={onBack}
    />
  );
};

export default ArticleSaaS;

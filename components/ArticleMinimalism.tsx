
import React from 'react';
import ArticleTemplate, { ArticleSection } from './ArticleTemplate';
import { Language } from '../types';

const ArticleMinimalism: React.FC<{ language: Language, onBack: () => void }> = ({ language, onBack }) => {
  const isEn = language === 'en';
  const sections: ArticleSection[] = isEn ? [
    { type: 'paragraph', text: "Minimalism in digital design is often misunderstood as simply 'having a lot of white space'. However, its evolution has taken it far beyond aesthetics." },
    { type: 'heading', text: "Cognitive Load Reduction" },
    { type: 'paragraph', text: "Modern minimalism is about the reduction of cognitive load. In an era of information overload, the designer's primary job is to hide the irrelevant so the essential can shine." },
    { type: 'quote', text: "Less is only more when it is better." }
  ] : [
    { type: 'paragraph', text: "数字设计中的极简主义常被误解为仅仅是“拥有大量留白”。然而，它的演变已经远远超出了审美的范畴。" },
    { type: 'heading', text: "减少认知负荷" },
    { type: 'paragraph', text: "现代极简主义的核心在于减少认知负荷。在信息过载的时代，设计师的首要工作是隐藏无关紧要的内容，让本质得以彰显。" },
    { type: 'quote', text: "只有当“少”变得更优时，它才是“多”。" }
  ];

  return (
    <ArticleTemplate 
      language={language}
      tag={isEn ? "Aesthetics" : "审美探讨"}
      date="2024.02.28"
      title={isEn ? "The Evolution of Minimalism in Modern UI" : "极简主义在现代界面设计中的演变"}
      subtitle={isEn ? "From aesthetic choice to cognitive necessity." : "从审美选择到认知必然。"}
      sections={sections}
      onBack={onBack}
    />
  );
};

export default ArticleMinimalism;

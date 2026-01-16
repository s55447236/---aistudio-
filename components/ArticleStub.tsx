
import React from 'react';
import ArticleTemplate, { ArticleSection } from './ArticleTemplate';
import { Language } from '../types';

interface ArticleStubProps {
  language: Language;
  onBack: () => void;
  id: string;
  titleZh: string;
  titleEn: string;
  tagZh: string;
  tagEn: string;
  date: string;
  descZh: string;
  descEn: string;
}

const ArticleStub: React.FC<ArticleStubProps> = ({ 
  language, onBack, titleZh, titleEn, tagZh, tagEn, date, descZh, descEn 
}) => {
  const isEn = language === 'en';
  const sections: ArticleSection[] = [
    { type: 'paragraph', text: isEn ? descEn : descZh },
    { type: 'heading', text: isEn ? "Expanding Insights" : "深入见解" },
    { type: 'paragraph', text: isEn ? "Full case study and deep dive content is being archived. Contact for the complete whitepaper." : "完整案例研究和深度内容正在归档中。如需完整白皮书请联系作者。" }
  ];

  return (
    <ArticleTemplate 
      language={language}
      tag={isEn ? tagEn : tagZh}
      date={date}
      title={isEn ? titleEn : titleZh}
      subtitle={isEn ? descEn : descZh}
      sections={sections}
      onBack={onBack}
    />
  );
};

export default ArticleStub;

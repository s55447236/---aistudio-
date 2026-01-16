
import React, { useState } from 'react';
import { Language, Article } from '../types';

interface InsightsPageProps {
  language: Language;
  articles: Article[];
  onArticleClick: (id: string) => void;
  onBack: () => void;
}

const InsightsPage: React.FC<InsightsPageProps> = ({ language, articles, onArticleClick, onBack }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const isEn = language === 'en';
  const filters = isEn ? ['All', 'Design', 'Tech', 'Strategy'] : ['全部', '设计', '技术', '策略'];

  const content = {
    title: isEn ? "INSIGHTS" : "见解",
    subtitle: isEn 
      ? "Exploring the intersection of design, technology, and human behavior." 
      : "探讨设计、技术与人类行为的交汇点。",
    readMore: isEn ? "Read Article" : "阅读全文"
  };

  return (
    <div className="min-h-screen bg-white text-black animate-in fade-in duration-700 pb-40">
      {/* Hero Header */}
      <section className="pt-48 px-6 md:px-12 mb-24">
        <h1 className="font-huge text-[15vw] md:text-[12rem] uppercase leading-[0.8] tracking-tighter mb-8">
          {content.title}.
        </h1>
        <p className="text-xl md:text-2xl font-medium text-gray-500 max-w-2xl leading-tight tracking-tight">
          {content.subtitle}
        </p>
      </section>

      {/* Filter Bar */}
      <section className="px-6 md:px-12 mb-16">
        <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap interactive border ${
                activeFilter === f 
                ? 'bg-black text-white border-black' 
                : 'bg-white text-black border-gray-100 hover:border-black'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Articles List */}
      <section className="px-6 md:px-12">
        <div className="grid grid-cols-1 gap-px bg-gray-100">
          {articles.map((article) => (
            <article 
              key={article.id}
              onClick={() => onArticleClick(article.id)}
              className="bg-white group py-12 md:py-20 flex flex-col md:flex-row gap-8 md:gap-24 interactive first:pt-0"
            >
              <div className="md:w-1/4 flex flex-col gap-2">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                  {article.tag}
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">
                  {article.date}
                </span>
              </div>
              
              <div className="flex-1">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-[1.1] mb-6 group-hover:translate-x-2 transition-transform duration-500">
                  {article.title}
                </h2>
                <p className="text-gray-500 text-lg md:text-xl max-w-3xl leading-relaxed mb-8 line-clamp-2">
                  {article.desc}
                </p>
                
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                  {content.readMore}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer Nav */}
      <section className="px-6 md:px-12 mt-32 pt-32 border-t border-gray-100 flex flex-col items-center">
        <button 
          onClick={onBack}
          className="text-4xl md:text-7xl font-huge hover:opacity-50 transition-all duration-500 interactive text-center uppercase leading-none"
        >
          {isEn ? "Return Home" : "返回首页"} ←
        </button>
      </section>
    </div>
  );
};

export default InsightsPage;

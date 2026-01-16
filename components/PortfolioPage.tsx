
import React, { useState } from 'react';
import { Language } from '../types';

interface ProjectItem {
  id: string;
  name: string;
  nameZh: string;
}

interface PortfolioPageProps {
  language: Language;
  projects: ProjectItem[];
  onProjectClick: (id: string) => void;
  onBack: () => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ language, projects, onProjectClick, onBack }) => {
  const isEn = language === 'en';
  const tabs = isEn ? ['All', 'SaaS', 'Data Viz', 'Platform'] : ['全部', 'SaaS', '数据可视化', '平台'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const content = {
    title: isEn ? "PORTFOLIO" : "作品集",
    subtitle: isEn 
      ? "Selected works in digital product design, complex systems, and visual engineering." 
      : "精选数字产品设计、复杂系统与视觉工程作品。",
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
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all whitespace-nowrap interactive border ${
                activeTab === tab 
                ? 'bg-black text-white border-black' 
                : 'bg-white text-black border-gray-100 hover:border-black'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <div 
              key={proj.id} 
              onClick={() => onProjectClick(proj.id)}
              className="aspect-[4/3] bg-[#f9f9f9] rounded-[40px] overflow-hidden group relative border border-gray-100 transition-all duration-700 hover:scale-[1.01] interactive"
            >
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-10 left-10 transition-transform duration-500 group-hover:translate-x-2">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Project 0{i+1}</p>
                <h3 className="text-3xl font-bold">{language === 'zh' ? proj.nameZh : proj.name}</h3>
              </div>
              <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                <div className="w-14 h-14 rounded-full border border-black flex items-center justify-center bg-white/50 backdrop-blur-sm">
                  <svg className="w-6 h-6 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Nav */}
      <section className="px-6 md:px-12 mt-32 pt-32 border-t border-gray-100 flex flex-col items-center">
        <button 
          onClick={onBack}
          className="text-4xl md:text-7xl font-huge hover:opacity-50 transition-all duration-500 interactive text-center uppercase leading-none"
        >
          {isEn ? "Back to Home" : "返回首页"} ←
        </button>
      </section>
    </div>
  );
};

export default PortfolioPage;

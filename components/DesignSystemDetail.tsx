
import React from 'react';
import { Language } from '../types';

interface DesignSystemDetailProps {
  language: Language;
  onBack: () => void;
  onContactClick: () => void;
}

const DesignSystemDetail: React.FC<DesignSystemDetailProps> = ({ language, onBack, onContactClick }) => {
  const isEn = language === 'en';

  const content = {
    title: "DESIGN SYSTEM ARCHITECTURE",
    role: isEn ? "Systems Architect" : "设计系统架构师",
    client: "Scale & Efficiency",
    year: "Ongoing",
    back: isEn ? "Back" : "返回",
    screenshots: isEn ? "System Pillars" : "规范体系支柱",
    overview: {
      label: isEn ? "Philosophy" : "设计理念",
      text: isEn 
        ? "Design systems are not just component libraries; they are shared languages. I focus on building scalable frameworks that bridge the gap between design intent and engineering reality through systematic thinking."
        : "设计系统不仅仅是组件库，它们是共同的语言。我专注于构建可扩展的框架，通过系统化思维弥合设计意图与工程现实之间的鸿沟。"
    },
    gallery: [
      { id: 1, title: isEn ? "Foundation & Tokens" : "设计基础与变量" },
      { id: 2, title: isEn ? "Atomic Components" : "原子化组件库" },
      { id: 3, title: isEn ? "Pattern Recognition" : "模式识别与组合" },
      { id: 4, title: isEn ? "Governance & Docs" : "管理机制与文档" }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-black animate-in fade-in duration-700">
      <section className="pt-48 px-6 md:px-12 pb-32">
        <h1 className="text-[12vw] md:text-[10rem] font-huge leading-[0.8] mb-20 tracking-tighter">
          SYSTEMS.<br/>SCALE.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-gray-100 pt-12">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Role</p>
            <p className="font-bold">{content.role}</p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Purpose</p>
            <p className="font-bold">Consistency & Speed</p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Status</p>
            <p className="font-bold">{content.year}</p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Tools</p>
            <p className="font-bold">Figma, React, Storybook</p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-32 bg-[#f9f9f9]">
        <div className="max-w-5xl">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-8">{content.overview.label}</h2>
          <p className="text-3xl md:text-5xl font-bold leading-[1.15] tracking-tight">{content.overview.text}</p>
        </div>
      </section>

      <section className="px-6 md:px-12 py-40">
        <h2 className="text-4xl font-bold mb-20">{content.screenshots}</h2>
        <div className="space-y-24">
          {content.gallery.map((item) => (
            <div key={item.id} className="group flex flex-col gap-8">
              <div className="aspect-video bg-gray-100 rounded-[60px] overflow-hidden border border-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold uppercase tracking-widest bg-gradient-to-br from-gray-50 to-gray-200">
                  <div className="text-center">
                    <p className="mb-2 opacity-50">[ DESIGN SYSTEM CORE ]</p>
                    <p className="text-sm font-black text-black/20">PILLAR 0{item.id}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center px-4">
                <span className="text-sm font-black uppercase tracking-widest text-gray-400">Module 0{item.id}</span>
                <h3 className="text-2xl font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 py-40 border-t border-gray-100 flex flex-col items-center">
        <p className="text-xl font-bold mb-8 opacity-50">Back to Projects</p>
        <button onClick={onBack} className="text-5xl md:text-8xl font-huge hover:opacity-50 transition-opacity interactive">
          GO BACK HOME ←
        </button>
      </section>
    </div>
  );
};

export default DesignSystemDetail;

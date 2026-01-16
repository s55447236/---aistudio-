
import React from 'react';
import { Language } from '../types';

interface DigitalTwinDetailProps {
  language: Language;
  onBack: () => void;
  onContactClick: () => void;
}

const DigitalTwinDetail: React.FC<DigitalTwinDetailProps> = ({ language, onBack, onContactClick }) => {
  const isEn = language === 'en';

  const content = {
    title: "DIGITAL TWIN METHODOLOGY",
    role: isEn ? "Visual Strategy & Lead" : "视觉策略与主导",
    client: "Internal Research / Labs",
    year: "2024",
    back: isEn ? "Back" : "返回",
    screenshots: isEn ? "Methodology Framework" : "方法论框架",
    overview: {
      label: isEn ? "Practical Insights" : "实战洞察",
      text: isEn 
        ? "A comprehensive methodology for building large-scale digital twins. Focusing on the fusion of 3D spatial environments with real-time data streams to create intuitive, decision-driven visual narratives."
        : "一套构建大规模数字孪生的综合方法论。专注于 3D 空间环境与实时数据流的融合，旨在创造直观的、以决策为导向的视觉叙事逻辑。"
    },
    gallery: [
      { id: 1, title: isEn ? "3D Scene Orchestration" : "3D 场景编排与灯光" },
      { id: 2, title: isEn ? "Real-time Data Mapping" : "实时数据映射机制" },
      { id: 3, title: isEn ? "Visual Narrative Flow" : "视觉叙事逻辑设计" },
      { id: 4, title: isEn ? "Hardware Adaptation" : "多端与大屏硬件适配" }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-black animate-in fade-in duration-700">
      <section className="pt-48 px-6 md:px-12 pb-32">
        <h1 className="text-[12vw] md:text-[10rem] font-huge leading-[0.8] mb-20 tracking-tighter">
          TWIN.<br/>CORE.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-gray-100 pt-12">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Focus</p>
            <p className="font-bold">{content.role}</p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Category</p>
            <p className="font-bold">Digital Twin, BI</p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Timeline</p>
            <p className="font-bold">{content.year}</p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Deliverables</p>
            <p className="font-bold">Whitepaper, Design System</p>
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
                    <p className="mb-2 opacity-50">[ TWIN CORE METHODOLOGY ]</p>
                    <p className="text-sm font-black text-black/20">GUIDE 0{item.id}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center px-4">
                <span className="text-sm font-black uppercase tracking-widest text-gray-400">Step 0{item.id}</span>
                <h3 className="text-2xl font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 py-40 border-t border-gray-100 flex flex-col items-center">
        <p className="text-xl font-bold mb-8 opacity-50">Explore More</p>
        <button onClick={onBack} className="text-5xl md:text-8xl font-huge hover:opacity-50 transition-opacity interactive">
          ALL INSIGHTS ←
        </button>
      </section>
    </div>
  );
};

export default DigitalTwinDetail;

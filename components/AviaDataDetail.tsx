
import React from 'react';
import { Language } from '../types';

interface AviaDataDetailProps {
  language: Language;
  onBack: () => void;
  onContactClick: () => void;
}

const AviaDataDetail: React.FC<AviaDataDetailProps> = ({ language, onBack, onContactClick }) => {
  const isEn = language === 'en';

  const content = {
    title: "AVIA DATA ENGINE",
    role: isEn ? "UX / Data Strategist" : "UX / 数据策略师",
    client: "Airport Group",
    year: "2024",
    back: isEn ? "Back" : "返回",
    screenshots: isEn ? "System Preview" : "系统预览",
    overview: {
      label: isEn ? "Project Background" : "项目背景",
      text: isEn 
        ? "A unified platform integrating safety and operational data resources for airport groups. It resolves synchronization issues across heterogeneous sources, establishes standardized quality control, and enables seamless digital collaboration."
        : "全面梳理对接机场集团安全和运行数据资源，通过平台解决异构数据源同步问题，帮助客户建立统一的数据标准和数据质量管控体系，在同一个数字平台上实现安全管理和运行协同。"
    },
    gallery: [
      { id: 1, title: isEn ? "Data Aggregation Hub" : "数据聚合中心" },
      { id: 2, title: isEn ? "Heterogeneous Sync Engine" : "异构同步引擎" },
      { id: 3, title: isEn ? "Quality Control System" : "数据质量管控" },
      { id: 4, title: isEn ? "Operational Synergy" : "运行协同工作台" }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-black animate-in fade-in duration-700">
      {/* Hero Content */}
      <section className="pt-48 px-6 md:px-12 pb-32">
        <h1 className="text-[12vw] md:text-[10rem] font-huge leading-[0.8] mb-20 tracking-tighter">
          AVIA<br/>DATA.
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-gray-100 pt-12">
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Role</p>
            <p className="font-bold">{content.role}</p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Client</p>
            <p className="font-bold">{content.client}</p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Timeline</p>
            <p className="font-bold">{content.year}</p>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Keywords</p>
            <p className="font-bold">Big Data, Governance, Aviation</p>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="px-6 md:px-12 py-32 bg-[#f9f9f9]">
        <div className="max-w-5xl">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-8">{content.overview.label}</h2>
          <p className="text-3xl md:text-5xl font-bold leading-[1.15] tracking-tight">
            {content.overview.text}
          </p>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="px-6 md:px-12 py-40">
        <h2 className="text-4xl font-bold mb-20">{content.screenshots}</h2>
        <div className="space-y-24">
          {content.gallery.map((item) => (
            <div key={item.id} className="group flex flex-col gap-8">
              <div className="aspect-video bg-gray-100 rounded-[60px] overflow-hidden border border-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold uppercase tracking-widest bg-gradient-to-br from-gray-50 to-gray-200">
                  <div className="text-center">
                    <p className="mb-2 opacity-50">[ AVIA SYSTEM INTERFACE ]</p>
                    <p className="text-sm font-black text-black/20">0{item.id}</p>
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

      {/* Footer Nav */}
      <section className="px-6 md:px-12 py-40 border-t border-gray-100 flex flex-col items-center">
        <p className="text-xl font-bold mb-8 opacity-50">Back to Projects</p>
        <button 
          onClick={onBack}
          className="text-5xl md:text-8xl font-huge hover:opacity-50 transition-opacity interactive"
        >
          VIEW ALL WORKS ←
        </button>
      </section>
    </div>
  );
};

export default AviaDataDetail;


import React from 'react';
import { Language } from '../types';

interface NeighborDetailProps {
  language: Language;
  onBack: () => void;
  onContactClick: () => void;
}

const NeighborDetail: React.FC<NeighborDetailProps> = ({ language, onBack, onContactClick }) => {
  const isEn = language === 'en';

  const content = {
    title: "NEIGHBOR HUB",
    role: isEn ? "Lead Product Designer" : "产品设计主导",
    client: "Urban Life Group",
    year: "2024",
    back: isEn ? "Back" : "返回",
    screenshots: isEn ? "Dual-Terminal Ecosystem" : "双端系统展示",
    overview: {
      label: isEn ? "Project Scope" : "项目范围",
      text: isEn 
        ? "A dual-terminal ecosystem bridging resident commerce and property management. It integrates a lightweight mobile shopping experience for residents with a robust web-based orchestration system for property managers and local merchants."
        : "连接业主生活与物业管理的双端生态系统。整合了面向业主的移动端轻量化购物体验，以及面向物业管理者和本地商家的强大 Web 端协同调度系统。"
    },
    gallery: [
      { id: 1, title: isEn ? "Resident Shopping (Mobile)" : "业主生活终端 (移动端)" },
      { id: 2, title: isEn ? "Merchant Order Dashboard" : "商户订单看板 (Web)" },
      { id: 3, title: isEn ? "Property Service Integration" : "物业服务集成" },
      { id: 4, title: isEn ? "Logistics & Group Buying" : "社区团购与物流调度" }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-black animate-in fade-in duration-700">
      {/* Hero Content */}
      <section className="pt-48 px-6 md:px-12 pb-32">
        <h1 className="text-[12vw] md:text-[10rem] font-huge leading-[0.8] mb-20 tracking-tighter">
          NEIGHBOR.<br/>HUB.
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
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Platforms</p>
            <p className="font-bold">iOS, Android, Web</p>
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
                    <p className="mb-2 opacity-50">[ NEIGHBOR SYSTEM UI ]</p>
                    <p className="text-sm font-black text-black/20">INTERFACE 0{item.id}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center px-4">
                <span className="text-sm font-black uppercase tracking-widest text-gray-400">0{item.id}</span>
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

export default NeighborDetail;

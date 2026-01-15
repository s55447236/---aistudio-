
import React from 'react';
import { Language } from '../types';

interface FireSafeDetailProps {
  language: Language;
  onBack: () => void;
  onContactClick: () => void;
}

const FireSafeDetail: React.FC<FireSafeDetailProps> = ({ language, onBack, onContactClick }) => {
  const isEn = language === 'en';

  const content = {
    title: "FIRE SAFE ENGINE",
    role: isEn ? "Lead System Designer" : "系统设计主导",
    client: "Property & Municipal",
    year: "2023 - 2024",
    back: isEn ? "Back" : "返回",
    screenshots: isEn ? "System Ecosystem" : "系统生态展示",
    overview: {
      label: isEn ? "Core Vision" : "核心理念",
      text: isEn 
        ? "A digital ecosystem for fire risk perception and closed-loop response. Integrating real-time IoT monitoring, mobile field dispatching, and high-level regulatory visualization for large-scale commercial complexes."
        : "面向大型商业综合体与重点单位的数字消防生态。通过物联网感知、移动端协同处置与监管大屏，实现火灾风险的实时监测与事件的全流程闭环处理。"
    },
    gallery: [
      { id: 1, title: isEn ? "Risk Perception Dashboard" : "风险感知中心 (Web)" },
      { id: 2, title: isEn ? "Closed-loop Mobile Terminal" : "闭环处置终端 (App)" },
      { id: 3, title: isEn ? "Device Lifecycle Tracking" : "物联设备健康监测" },
      { id: 4, title: isEn ? "Regulatory Visualization" : "监管大屏可视化" }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-black animate-in fade-in duration-700">
      {/* Hero Content */}
      <section className="pt-48 px-6 md:px-12 pb-32">
        <h1 className="text-[12vw] md:text-[10rem] font-huge leading-[0.8] mb-20 tracking-tighter">
          FIRE<br/>SAFE.
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
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Focus</p>
            <p className="font-bold">IoT, Safety, Smart City</p>
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
                    <p className="mb-2 opacity-50">[ FIRE SAFE SYSTEM UI ]</p>
                    <p className="text-sm font-black text-black/20">MODULE 0{item.id}</p>
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

export default FireSafeDetail;

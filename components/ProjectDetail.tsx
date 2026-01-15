
import React from 'react';
import { Language } from '../types';

interface ProjectDetailProps {
  language: Language;
  onBack: () => void;
  onContactClick: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ language, onBack, onContactClick }) => {
  const isEn = language === 'en';

  const content = {
    title: "GPU Container Service",
    role: isEn ? "Lead Product Designer" : "首席产品设计师",
    client: "AI Cloud Infra",
    year: "2023 - 2024",
    back: isEn ? "Back" : "返回",
    screenshots: isEn ? "Screenshots" : "设计图",
    contact: isEn ? "Contact" : "联系我",
    overview: {
      label: isEn ? "Project Overview" : "项目概览",
      text: isEn 
        ? "A comprehensive GPU cloud orchestration platform designed for data scientists and AI researchers. The challenge was to abstract complex Kubernetes and NVIDIA driver management into a seamless, high-performance GUI."
        : "一个专为数据科学家和 AI 研究员设计的全方位 GPU 云编排平台。核心挑战在于将复杂的 Kubernetes 和 NVIDIA 驱动管理抽象为无缝、高性能的图形用户界面。"
    },
    challenges: [
      {
        title: isEn ? "Complexity Reduction" : "降低复杂度",
        desc: isEn ? "Data scientists shouldn't need to be DevOps experts to run an A100 cluster." : "数据科学家不应该为了运行 A100 集群而成为运维专家。"
      },
      {
        title: isEn ? "Real-time Telemetry" : "实时遥测",
        desc: isEn ? "Visualizing thermal throttling, memory leaks, and compute efficiency in real-time." : "实时可视化热节流、显存泄漏和计算效率。"
      }
    ],
    gallery: [
      { id: 1, title: isEn ? "Resource Dashboard" : "资源仪表盘" },
      { id: 2, title: isEn ? "Container Orchestration" : "容器编排" },
      { id: 3, title: isEn ? "Cost Analytics" : "成本分析" },
      { id: 4, title: isEn ? "Security & IAM" : "权限管理" }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-black animate-in fade-in duration-700">
      {/* Project Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[800px]">
        <div className="h-[64px] bg-white/70 backdrop-blur-2xl border border-black/5 shadow-2xl rounded-full px-4 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 hover:bg-black/5 rounded-full transition-colors interactive"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-bold">{content.back}</span>
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
            <h1 className="text-sm font-black uppercase tracking-widest opacity-40">{content.title}</h1>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => document.getElementById('screenshots')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-4 py-2 text-sm font-bold hover:text-gray-500 transition-colors hidden sm:block interactive"
            >
              {content.screenshots}
            </button>
            <button 
              onClick={onContactClick}
              className="bg-black text-white px-6 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-gray-800 transition-all active:scale-95 interactive"
            >
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
              {content.contact}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <section className="pt-40 px-6 md:px-12 pb-32">
        <h1 className="text-[12vw] md:text-[10rem] font-huge leading-[0.8] mb-20 tracking-tighter">
          GPU<br/>INFRA.
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
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2">Deliverables</p>
            <p className="font-bold">UI/UX, Dashboards, Systems</p>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="px-6 md:px-12 py-32 bg-[#f9f9f9]">
        <div className="max-w-4xl">
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
                <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold uppercase tracking-widest">
                  [ Screenshot Placeholder 0{item.id} ]
                </div>
                {/* Image would go here: <img src="..." className="..." /> */}
              </div>
              <div className="flex justify-between items-center px-4">
                <span className="text-sm font-black uppercase tracking-widest text-gray-400">Section 0{item.id}</span>
                <h3 className="text-2xl font-bold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Nav */}
      <section className="px-6 md:px-12 py-40 border-t border-gray-100 flex flex-col items-center">
        <p className="text-xl font-bold mb-8 opacity-50">Next Project</p>
        <button className="text-5xl md:text-8xl font-huge hover:opacity-50 transition-opacity interactive">
          FINTECH DASHBOARD →
        </button>
      </section>
    </div>
  );
};

export default ProjectDetail;

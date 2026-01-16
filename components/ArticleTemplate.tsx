
import React from 'react';
import { Language } from '../types';

export interface ArticleSection {
  type: 'heading' | 'paragraph' | 'bullet' | 'quote';
  text: string;
}

interface ArticleTemplateProps {
  language: Language;
  tag: string;
  date: string;
  title: string;
  subtitle: string;
  sections: ArticleSection[];
  onBack: () => void;
}

const ArticleTemplate: React.FC<ArticleTemplateProps> = ({ 
  language, tag, date, title, subtitle, sections, onBack 
}) => {
  const isEn = language === 'en';

  return (
    <div className="min-h-screen bg-white text-black animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Header Metadata */}
      <section className="pt-48 px-6 md:px-12 pb-16">
        <div className="flex justify-between items-center mb-12 text-[10px] font-black tracking-[0.3em] text-gray-400 uppercase">
          <span>{tag}</span>
          <span>{date}</span>
        </div>
        
        <h1 className="text-[8vw] md:text-[6.5rem] font-huge leading-[0.9] mb-12 tracking-tighter max-w-[1200px]">
          {title}
        </h1>

        <p className="text-base md:text-xl font-medium text-gray-500 max-w-4xl leading-snug tracking-tight">
          {subtitle}
        </p>
      </section>

      {/* Hero Image Placeholder */}
      <section className="px-6 md:px-12 mb-32">
        <div className="aspect-[21/9] w-full bg-[#f3f3f3] rounded-[40px] md:rounded-[60px] border border-gray-100 flex items-center justify-center relative overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200 opacity-50 group-hover:scale-105 transition-transform duration-1000"></div>
           <span className="text-[10px] font-black uppercase tracking-widest text-gray-300 z-10">[ FEATURE IMAGE ]</span>
        </div>
      </section>

      {/* Body Content */}
      <section className="px-6 md:px-12 pb-48">
        <div className="max-w-[850px] mx-auto">
          <div className="space-y-8">
            {sections.map((section, idx) => {
              switch (section.type) {
                case 'heading':
                  return (
                    <h2 key={idx} className="text-2xl md:text-4xl font-black text-black tracking-tighter pt-12 mb-4 leading-tight">
                      {section.text}
                    </h2>
                  );
                case 'paragraph':
                  return (
                    <p key={idx} className="text-base md:text-xl font-medium text-gray-600 leading-relaxed tracking-tight">
                      {section.text}
                    </p>
                  );
                case 'bullet':
                  return (
                    <div key={idx} className="flex gap-4 pl-4 md:pl-6 border-l-2 border-black/5 py-1">
                      <span className="text-black font-black">•</span>
                      <p className="text-base md:text-xl font-medium text-gray-500 leading-relaxed">
                        {section.text}
                      </p>
                    </div>
                  );
                case 'quote':
                  return (
                    <div key={idx} className="py-8 my-12 border-y border-gray-100 text-center">
                      <p className="text-2xl md:text-3xl font-bold italic tracking-tight leading-snug">
                        "{section.text}"
                      </p>
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>

          {/* Author Meta */}
          <div className="mt-32 pt-12 border-t border-gray-100 flex items-center gap-6">
             <div className="w-14 h-14 rounded-full bg-gray-100 border border-black/5 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=64&h=64&auto=format&fit=crop" alt="Author" className="w-full h-full object-cover" />
             </div>
             <div>
               <p className="text-sm font-black uppercase tracking-widest">Portfolio Studio</p>
               <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-0.5">{isEn ? "Design Expert" : "设计专家"}</p>
             </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="px-6 md:px-12 py-32 border-t border-gray-100 bg-[#fbfbfb] flex flex-col items-center">
        <p className="text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-8">{isEn ? "Back to Collection" : "返回见解列表"}</p>
        <button 
          onClick={onBack}
          className="text-4xl md:text-8xl font-huge hover:opacity-50 transition-all duration-700 interactive text-center uppercase leading-none tracking-tighter"
        >
          {isEn ? "View All" : "查看全部"} ←
        </button>
      </section>
    </div>
  );
};

export default ArticleTemplate;


import React from 'react';
import { Page, Language } from '../types';

interface NavbarProps {
  isVisible: boolean;
  currentPage: Page;
  onPageChange: (page: Page) => void;
  language: Language;
  onLanguageToggle: () => void;
  onContactClick: () => void;
  // Project or Blog specific props
  displayTitle?: string;
  onBack?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  isVisible, 
  currentPage, 
  onPageChange, 
  language, 
  onLanguageToggle,
  onContactClick,
  displayTitle,
  onBack
}) => {
  const isDetailView = currentPage === 'project-detail' || currentPage === 'blog-detail';

  const content = {
    zh: {
      home: '首页',
      portfolio: '作品集',
      blog: '见解',
      resume: '下载简历',
      contact: '联系我',
      back: '返回'
    },
    en: {
      home: 'Home',
      portfolio: 'Portfolio',
      blog: 'Insights',
      resume: 'Resume',
      contact: 'Contact',
      back: 'Back'
    }
  }[language];

  return (
    <nav 
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[99] transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'
      }`}
    >
      <div className="h-[52px] bg-white/60 backdrop-blur-2xl border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] rounded-full px-5 flex items-center gap-6 md:min-w-[700px] justify-between relative">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          {isDetailView ? (
            <div className="flex items-center gap-4">
              <button 
                onClick={onBack}
                className="flex items-center gap-2 text-sm font-semibold text-black/40 hover:text-black transition-colors interactive group"
              >
                <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
                <span>{content.back}</span>
              </button>
              
              {displayTitle && (
                <>
                  <div className="h-4 w-[1px] bg-black/10 hidden sm:block" />
                  <h1 className="text-[11px] font-black uppercase tracking-[0.2em] text-black/50 hidden md:block whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px]">
                    {displayTitle}
                  </h1>
                </>
              )}
            </div>
          ) : (
            <>
              <button 
                onClick={() => onPageChange('home')}
                className={`text-sm font-semibold transition-colors interactive ${currentPage === 'home' ? 'text-black' : 'text-black/40 hover:text-black'}`}
              >
                {content.home}
              </button>
              <button 
                onClick={() => onPageChange('portfolio')}
                className={`text-sm font-semibold transition-colors interactive ${currentPage === 'portfolio' ? 'text-black' : 'text-black/40 hover:text-black'}`}
              >
                {content.portfolio}
              </button>
              <button 
                onClick={() => onPageChange('insights')}
                className={`text-sm font-semibold transition-colors interactive ${currentPage === 'insights' ? 'text-black' : 'text-black/40 hover:text-black'}`}
              >
                {content.blog}
              </button>
            </>
          )}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <button 
            className="text-sm font-semibold text-black/40 hover:text-black transition-colors flex items-center gap-2 interactive border-r border-black/5 pr-4"
            onClick={() => window.open('#', '_blank')}
          >
            <span className="hidden sm:inline">{content.resume}</span>
          </button>

          <button 
            onClick={onLanguageToggle}
            className="text-[10px] font-black text-black/40 hover:text-black transition-colors flex items-center gap-1.5 border border-black/5 rounded-full px-3 py-1 interactive"
          >
            <span className={language === 'zh' ? 'text-black' : ''}>ZH</span>
            <span className="text-black/10">|</span>
            <span className={language === 'en' ? 'text-black' : ''}>EN</span>
          </button>
          
          <button 
            onClick={onContactClick}
            className="bg-black text-white px-5 h-9 rounded-full text-[13px] font-bold hover:bg-gray-800 transition-all flex items-center gap-2 active:scale-95 interactive"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
            </svg>
            {content.contact}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

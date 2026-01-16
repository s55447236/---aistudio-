
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
      portfolio: '作品',
      blog: '见解',
      resume: '简历',
      contact: '联系',
      back: '返回'
    },
    en: {
      home: 'Home',
      portfolio: 'Portfolio',
      blog: 'Insights',
      resume: 'CV',
      contact: 'Contact',
      back: 'Back'
    }
  }[language];

  return (
    <nav 
      className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[99] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] transform w-[calc(100%-2rem)] md:w-auto ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'
      }`}
    >
      <div className="h-[48px] md:h-[52px] bg-white/70 backdrop-blur-2xl border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-full px-3 md:px-5 flex items-center justify-between gap-2 md:gap-6 md:min-w-[650px] relative overflow-hidden">
        
        {/* Left Section: Navigation Links or Detail Back Button */}
        <div className="flex items-center gap-3 md:gap-6 overflow-hidden">
          {isDetailView ? (
            <div className="flex items-center gap-2 md:gap-4 overflow-hidden">
              <button 
                onClick={onBack}
                className="flex items-center gap-1.5 text-xs md:text-sm font-bold text-black/40 hover:text-black transition-colors interactive group shrink-0"
              >
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="hidden xs:inline">{content.back}</span>
              </button>
              
              {displayTitle && (
                <>
                  <div className="h-3 w-[1px] bg-black/10 shrink-0" />
                  <h1 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.15em] text-black/60 whitespace-nowrap overflow-hidden text-ellipsis max-w-[120px] md:max-w-[200px]">
                    {displayTitle}
                  </h1>
                </>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-3 md:gap-6">
              <button 
                onClick={() => onPageChange('home')}
                className={`text-xs md:text-sm font-bold transition-colors interactive whitespace-nowrap ${currentPage === 'home' ? 'text-black' : 'text-black/40 hover:text-black'}`}
              >
                {content.home}
              </button>
              <button 
                onClick={() => onPageChange('portfolio')}
                className={`text-xs md:text-sm font-bold transition-colors interactive whitespace-nowrap ${currentPage === 'portfolio' ? 'text-black' : 'text-black/40 hover:text-black'}`}
              >
                {content.portfolio}
              </button>
              <button 
                onClick={() => onPageChange('insights')}
                className={`text-xs md:text-sm font-bold transition-colors interactive whitespace-nowrap ${currentPage === 'insights' ? 'text-black' : 'text-black/40 hover:text-black'}`}
              >
                {content.blog}
              </button>
            </div>
          )}
        </div>

        {/* Right Section: Actions & Language Switcher */}
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <button 
            className="text-xs md:text-sm font-bold text-black/40 hover:text-black transition-colors flex items-center gap-1.5 interactive border-r border-black/5 pr-2 md:pr-4"
            onClick={() => window.open('#', '_blank')}
          >
            <span className="hidden sm:inline">{content.resume}</span>
            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </button>

          <button 
            onClick={onLanguageToggle}
            className="text-[9px] md:text-[10px] font-black text-black/40 hover:text-black transition-colors flex items-center gap-1 border border-black/5 rounded-full px-2 md:px-3 py-1 interactive"
          >
            <span className={language === 'zh' ? 'text-black' : ''}>ZH</span>
            <span className="text-black/10">|</span>
            <span className={language === 'en' ? 'text-black' : ''}>EN</span>
          </button>
          
          <button 
            onClick={onContactClick}
            className="bg-black text-white px-3 md:px-5 h-8 md:h-9 rounded-full text-[11px] md:text-[13px] font-bold hover:bg-gray-800 transition-all flex items-center gap-1.5 active:scale-95 interactive"
          >
            <svg className="w-3 h-3 md:w-3.5 md:h-3.5 hidden xs:block" viewBox="0 0 24 24" fill="currentColor">
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

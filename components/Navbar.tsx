
import React from 'react';
import { Page, Language } from '../types';

interface NavbarProps {
  isVisible: boolean;
  currentPage: Page;
  onPageChange: (page: Page) => void;
  language: Language;
  onLanguageToggle: () => void;
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  isVisible, 
  currentPage, 
  onPageChange, 
  language, 
  onLanguageToggle,
  onContactClick
}) => {
  const content = {
    zh: {
      home: '首页',
      portfolio: '作品集',
      blog: '博客',
      resume: '下载简历',
      contact: '联系我'
    },
    en: {
      home: 'Home',
      portfolio: 'Portfolio',
      blog: 'Blog',
      resume: 'Resume',
      contact: 'Contact'
    }
  }[language];

  return (
    <nav 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'
      }`}
    >
      <div className="h-[60px] bg-white/70 backdrop-blur-xl border border-white/20 shadow-lg rounded-full px-6 flex items-center gap-6 md:min-w-[600px] justify-between">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => onPageChange('home')}
            className={`text-sm font-medium transition-colors interactive ${currentPage === 'home' ? 'text-black font-bold' : 'text-gray-400 hover:text-black'}`}
          >
            {content.home}
          </button>
          <button 
            onClick={() => onPageChange('portfolio')}
            className={`text-sm font-medium transition-colors interactive ${currentPage === 'portfolio' ? 'text-black font-bold' : 'text-gray-400 hover:text-black'}`}
          >
            {content.portfolio}
          </button>
          <button 
            onClick={() => onPageChange('blog')}
            className={`text-sm font-medium transition-colors interactive ${currentPage === 'blog' ? 'text-black font-bold' : 'text-gray-400 hover:text-black'}`}
          >
            {content.blog}
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button 
            className="text-sm font-medium text-gray-400 hover:text-black transition-colors flex items-center gap-2 interactive border-r border-gray-100 pr-3"
            onClick={() => window.open('#', '_blank')}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="hidden sm:inline">{content.resume}</span>
          </button>

          <button 
            onClick={onLanguageToggle}
            className="text-[10px] font-bold text-gray-400 hover:text-black transition-colors flex items-center gap-1 border border-gray-100 rounded-md px-2 py-1 interactive"
          >
            <span className={language === 'zh' ? 'text-black' : ''}>CN</span>
            <span className="text-gray-100">|</span>
            <span className={language === 'en' ? 'text-black' : ''}>EN</span>
          </button>
          
          <button 
            onClick={onContactClick}
            className="bg-black text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-gray-800 transition-all flex items-center gap-2 active:scale-95 interactive"
          >
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
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

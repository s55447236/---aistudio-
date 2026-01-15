
import React from 'react';
import { Page, Language } from '../types';

interface NavbarProps {
  isVisible: boolean;
  currentPage: Page;
  onPageChange: (page: Page) => void;
  language: Language;
  onLanguageToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isVisible, currentPage, onPageChange, language, onLanguageToggle }) => {
  const content = {
    zh: {
      home: '首页',
      portfolio: '作品集',
      blog: '博客',
      contact: '微信联系'
    },
    en: {
      home: 'Home',
      portfolio: 'Portfolio',
      blog: 'Blog',
      contact: 'Contact'
    }
  }[language];

  return (
    <nav 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'
      }`}
    >
      <div className="h-[60px] bg-white/70 backdrop-blur-xl border border-white/20 shadow-lg rounded-full px-6 flex items-center gap-6 min-w-[500px] justify-between">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => onPageChange('home')}
            className={`text-sm font-medium transition-colors ${currentPage === 'home' ? 'text-black' : 'text-gray-400 hover:text-black'}`}
          >
            {content.home}
          </button>
          <button 
            onClick={() => onPageChange('portfolio')}
            className={`text-sm font-medium transition-colors ${currentPage === 'portfolio' ? 'text-black' : 'text-gray-400 hover:text-black'}`}
          >
            {content.portfolio}
          </button>
          <button 
            onClick={() => onPageChange('blog')}
            className={`text-sm font-medium transition-colors ${currentPage === 'blog' ? 'text-black' : 'text-gray-400 hover:text-black'}`}
          >
            {content.blog}
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={onLanguageToggle}
            className="text-[10px] font-bold text-gray-400 hover:text-black transition-colors flex items-center gap-1 border border-gray-200 rounded-md px-2 py-1"
          >
            <span className={language === 'zh' ? 'text-black' : ''}>CN</span>
            <span className="text-gray-200">|</span>
            <span className={language === 'en' ? 'text-black' : ''}>EN</span>
          </button>
          
          <button className="bg-black text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-gray-800 transition-colors flex items-center gap-2">
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

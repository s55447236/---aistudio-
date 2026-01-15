
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Developing from './components/Developing';
import { Page, Language } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [language, setLanguage] = useState<Language>('en');
  const [showNavbar, setShowNavbar] = useState(false);
  
  const introRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    const handleScroll = () => {
      if (currentPage === 'home') {
        if (introRef.current) {
          const introTop = introRef.current.offsetTop;
          setShowNavbar(window.scrollY > introTop - 300);
        }
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage]);

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    const newLang = language === 'zh' ? 'en' : 'zh';
    setLanguage(newLang);
    setActiveTab(newLang === 'zh' ? '全部' : 'All');
  };

  const translations = {
    zh: {
      hero: ["好的设计", "感觉非常", "自然 ."],
      status: "目前正在求职中",
      intro: "我是一名居住在柏林的数字设计总监，专注于创造数字体验 —— 网站、应用、平台以及介于两者之间的一切。目前在 Koto Studio 打造数字体验。",
      tabs: ['全部', 'to B', '数据可视化'],
      project: "案例研究",
      developing: "正在开发中",
      copyright: "作品集 © 2024",
      navItems: {
        portfolio: '作品集',
        blog: '博客',
      }
    },
    en: {
      hero: ["GOOD DESIGN", "FEELS", "NATURAL ."],
      status: "Currently open to work",
      intro: "I'm a Berlin-based digital design director focused on creating digital experiences — websites, apps, platforms, and everything in between. Currently crafting Digital Experiences at Koto Studio.",
      tabs: ['All', 'to B', 'Data Viz'],
      project: "Case Study",
      developing: "Under Development",
      copyright: "PORTFOLIO © 2024",
      navItems: {
        portfolio: 'Portfolio',
        blog: 'Blog',
      }
    }
  }[language];

  const renderContent = () => {
    switch (currentPage) {
      case 'portfolio':
        return <Developing title={translations.navItems.portfolio} />;
      case 'blog':
        return <Developing title={translations.navItems.blog} />;
      default:
        return (
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-20 pb-40">
            {/* Main Content Area */}
            <div>
              {/* Hero Section */}
              <section className="mb-16 relative">
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-[10px] font-bold">index</div>
                   <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Personal Space</span>
                </div>
                
                <h1 className="font-huge text-[13vw] md:text-[11.5rem] uppercase mb-16 select-none">
                  {translations.hero[0]} <br /> {translations.hero[1]} <br /> {translations.hero[2]}
                </h1>
                
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {(['portfolio', 'blog'] as const).map(key => (
                      <span 
                        key={key} 
                        onClick={() => handlePageChange(key)}
                        className="px-5 py-2 bg-[#f3f3f3] text-black text-sm rounded-full font-medium hover:bg-gray-200 transition-colors interactive"
                      >
                        {translations.navItems[key]}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 px-5 py-2 bg-[#f3f3f3] text-black text-sm rounded-full font-medium interactive">
                    <span className="flex items-center rotate-[135deg]">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </span>
                    <span>{translations.status}</span>
                  </div>
                </div>
              </section>

              {/* Intro text aligned right */}
              <div ref={introRef} className="flex justify-end mb-48 mt-40">
                <p className="max-w-md text-xl leading-tight text-black font-bold">
                  {translations.intro}
                </p>
              </div>
            </div>

            {/* Portfolio Grid Section */}
            <section id="portfolio-section" ref={portfolioRef}>
              <div className="flex items-center gap-4 mb-10 border-t pt-10 border-gray-100">
                {translations.tabs.map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                      activeTab === tab ? 'bg-black text-white' : 'bg-white text-black border border-gray-200 hover:border-black'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-[4/3] bg-[#f9f9f9] rounded-[40px] overflow-hidden group relative border border-gray-100 transition-transform duration-700 hover:scale-[1.01] interactive">
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-10 left-10 transition-transform duration-500 group-hover:translate-x-2">
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Project 0{i}</p>
                      <h3 className="text-2xl font-bold">{translations.project} {i}</h3>
                    </div>
                    {/* Small arrow icon appearing on hover */}
                    <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                      <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center">
                        <svg className="w-6 h-6 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <main className="relative min-h-screen bg-white text-black">
      <Navbar 
        isVisible={showNavbar} 
        currentPage={currentPage} 
        onPageChange={handlePageChange}
        language={language}
        onLanguageToggle={toggleLanguage}
      />
      
      {renderContent()}
      
      <footer className="py-32 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-black uppercase tracking-tighter">{translations.copyright}</div>
          <div className="flex gap-12 text-sm font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-gray-400 transition-colors">Behance</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Dribbble</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default App;

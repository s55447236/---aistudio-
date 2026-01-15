
import { Language, Page } from './types';
import React, { useEffect, useRef, useState } from 'react';

import Developing from './components/Developing';
import Navbar from './components/Navbar';
import ContactModal from './components/ContactModal';

const BouncingPhoto: React.FC = () => {
  const [position, setPosition] = useState({ x: Math.random() * 200, y: Math.random() * 200 });
  const [velocity, setVelocity] = useState({ x: 2, y: 2 }); // Restored original faster speed
  const containerRef = useRef<HTMLDivElement>(null);
  const size = 120; // Diameter set to 120px

  useEffect(() => {
    let animationFrameId: number;
    const move = () => {
      setPosition((prev) => {
        let newX = prev.x + velocity.x;
        let newY = prev.y + velocity.y;
        let newVx = velocity.x;
        let newVy = velocity.y;

        if (containerRef.current) {
          const { width, height } = containerRef.current.getBoundingClientRect();
          
          if (newX <= 0 || newX + size >= width) {
            newVx = -velocity.x;
            newX = newX <= 0 ? 0 : width - size;
          }
          if (newY <= 0 || newY + size >= height) {
            newVy = -velocity.y;
            newY = newY <= 0 ? 0 : height - size;
          }
        }

        if (newVx !== velocity.x || newVy !== velocity.y) {
          setVelocity({ x: newVx, y: newVy });
        }

        return { x: newX, y: newY };
      });
      animationFrameId = requestAnimationFrame(move);
    };

    animationFrameId = requestAnimationFrame(move);
    return () => cancelAnimationFrame(animationFrameId);
  }, [velocity]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
      <div 
        className="absolute rounded-full border-2 border-black bg-gray-200 overflow-hidden shadow-2xl transition-transform duration-300 pointer-events-auto interactive"
        style={{ 
          width: size, 
          height: size, 
          left: position.x, 
          top: position.y,
          backgroundImage: `url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    </div>
  );
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [language, setLanguage] = useState<Language>('en');
  const [showNavbar, setShowNavbar] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    const handleScroll = () => {
      if (currentPage === 'home') {
        const portfolioSection = document.getElementById('portfolio-section');
        if (portfolioSection) {
          const portfolioTop = portfolioSection.offsetTop;
          setShowNavbar(window.scrollY > portfolioTop - 100);
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
      hero: ["GOOD DESIGN", "FEELS", "NATURAL ."],
      intro: "我是一名居住在柏林的数字设计总监，专注于创造数字体验 —— 网站、应用、平台以及介于两者之间的一切。目前在 Koto Studio 打造数字体验。",
      tabs: ['全部', 'to B', '数据可视化'],
      project: "案例研究",
      blogHeader: "INSIGHTS",
      blogAction: "阅读文章",
      copyright: "作品集 © 2024",
      articles: [
        {
          tag: "设计哲学",
          date: "2024.03",
          title: "极简主义的回归：为什么少即是多在 2024 年依然重要",
          desc: "探讨在信息爆炸的时代，设计师如何通过减少噪音来增强用户的情感连接。"
        },
        {
          tag: "AI 与创意",
          date: "2024.02",
          title: "超越生成：将 AI 作为设计师的“第二大脑”而非替代品",
          desc: "分析生成式 AI 如何重塑我们的工作流程。"
        },
        {
          tag: "用户体验",
          date: "2024.01",
          title: "微交互的艺术：如何在数字产品中构建细腻的情感温度",
          desc: "那些不被察觉的小细节，往往是决定产品是否具有“灵魂”的关键所在。"
        }
      ],
      faq: {
        header: "常见问题",
        items: [
          { q: "你的典型产品设计工作流程是怎样的？", a: "我的流程通常分为四个阶段：发现与研究、定义策略、创意设计以及协作交付。我坚持以用户为中心，在每个阶段都进行数据验证和快速迭代，确保设计既美观又实用。" },
          { q: "你如何处理与开发团队的交付（Handoff）？", a: "我会利用 Figma 的标注功能并编写详细的交互文档。同时，我会创建可复用的设计组件和变量（Variables），并与工程师保持实时沟通，确保实现效果与设计稿高度一致。" }
        ]
      },
      navItems: {
        portfolio: '作品集',
        blog: '博客',
        resume: '简历'
      }
    },
    en: {
      hero: ["GOOD DESIGN", "FEELS", "NATURAL ."],
      intro: "I'm a Berlin-based digital design director focused on creating digital experiences — websites, apps, platforms, and everything in between. Currently crafting Digital Experiences at Koto Studio.",
      tabs: ['All', 'to B', 'Data Viz'],
      project: "Case Study",
      blogHeader: "INSIGHTS",
      blogAction: "Read Article",
      copyright: "PORTFOLIO © 2024",
      articles: [
        {
          tag: "PHILOSOPHY",
          date: "MAR 2024",
          title: "The Return of Minimalism: Why Less is Still More in 2024",
          desc: "Exploring how designers can enhance emotional connection by reducing noise in an era of information overload."
        },
        {
          tag: "AI & CREATIVITY",
          date: "FEB 2024",
          title: "Beyond Generation: AI as a 'Second Brain' Not a Replacement",
          desc: "Analyzing how generative AI is reshaping our workflows."
        },
        {
          tag: "UX DESIGN",
          date: "JAN 2024",
          title: "The Art of Micro-interactions: Building Emotional Warmth in Products",
          desc: "The small details that often go unnoticed are the key to whether a product has a 'soul'."
        }
      ],
      faq: {
        header: "Frequently Asked Questions",
        items: [
          { q: "What is your typical product design workflow?", a: "My workflow follows four main stages: Discovery & Research, Strategic Definition, Creative Execution, and Collaborative Handoff. I prioritize a user-centric approach, using data validation and rapid prototyping at every step." },
          { q: "How do you handle developer handoffs?", a: "I use Figma's Dev Mode alongside detailed interaction documentation. By establishing robust component libraries and design tokens, I ensure a seamless transition from design to code through continuous communication with the dev team." }
        ]
      },
      navItems: {
        portfolio: 'Portfolio',
        blog: 'Blog',
        resume: 'Resume'
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
          <>
            {/* Hero Section Redesigned with 42px top padding and no top margin */}
            <section ref={heroRef} className="relative min-h-screen flex flex-col px-6 md:px-12 pt-[42px] pb-12 overflow-hidden">
              <BouncingPhoto />
              
              <div className="z-20">
                <h1 className="font-huge text-[15vw] md:text-[12rem] uppercase leading-[0.85] tracking-tighter select-none">
                  <span className="block">{translations.hero[0]}</span>
                  <span className="block">{translations.hero[1]}</span>
                  <span className="block">{translations.hero[2]}</span>
                </h1>
              </div>

              <div className="z-20 flex justify-end mt-auto mb-12">
                <div className="max-w-xs md:max-w-md">
                  <p className="text-base md:text-xl leading-[1.3] text-black font-bold">
                    {translations.intro}
                  </p>
                </div>
              </div>
            </section>

            {/* Portfolio Grid Section */}
            <section id="portfolio-section" ref={portfolioRef} className="px-6 md:px-12 mb-32">
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

            {/* Blog Section */}
            <section id="blog-section" className="px-6 md:px-12 border-t border-gray-100 pt-16 mb-40">
              <div className="flex justify-between items-end mb-12">
                <h2 className="text-5xl font-black uppercase tracking-tighter">{translations.blogHeader}</h2>
                <button 
                  onClick={() => handlePageChange('blog')}
                  className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors interactive"
                >
                  View All Thoughts →
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {translations.articles.map((article, idx) => (
                  <article key={idx} className="group flex flex-col interactive">
                    <div className="flex justify-between items-center mb-6 text-[10px] font-black tracking-widest text-gray-400 uppercase">
                      <span>{article.tag}</span>
                      <span>{article.date}</span>
                    </div>
                    <div className="mb-6 h-[1px] w-full bg-gray-100 group-hover:bg-black transition-colors duration-500"></div>
                    <h3 className="text-2xl font-bold leading-tight mb-4 group-hover:translate-x-1 transition-transform duration-500">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-2">
                      {article.desc}
                    </p>
                    <div className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all group-hover:gap-4">
                      {translations.blogAction}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-[#fcfcfc] py-32 px-6 md:px-12 border-t border-gray-100 w-full">
              <div className="max-w-[1000px] mx-auto">
                <h2 className="text-6xl md:text-7xl font-bold tracking-tight text-center mb-20">
                  {translations.faq.header}
                </h2>

                <div className="space-y-4">
                  {translations.faq.items.map((item, idx) => (
                    <div 
                      key={idx} 
                      className={`bg-white rounded-[32px] p-8 md:p-10 transition-all duration-700 border border-gray-100 hover:border-gray-200 interactive`}
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    >
                      <div className="flex justify-between items-center cursor-none">
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight pr-8">
                          {item.q}
                        </h3>
                        <div className={`w-12 h-12 rounded-full bg-[#f3f3f3] flex items-center justify-center transition-transform duration-500 ${openFaq === idx ? 'bg-gray-100' : ''}`}>
                          <span className={`text-2xl font-medium transition-transform duration-500 ${openFaq === idx ? 'rotate-180' : 'rotate-0'}`}>
                            {openFaq === idx ? '−' : '+'}
                          </span>
                        </div>
                      </div>
                      <div 
                        className={`grid transition-all duration-500 ease-in-out ${
                          openFaq === idx ? 'grid-rows-[1fr] opacity-100 mt-8' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-gray-500 text-lg leading-relaxed max-w-3xl">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
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
        onContactClick={() => setIsContactModalOpen(true)}
      />
      
      {renderContent()}

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
        language={language} 
      />
      
      <footer className="py-32 border-t border-gray-100 w-full">
        <div className="w-full px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-black uppercase tracking-tighter">{translations.copyright}</div>
          <div className="flex gap-12 text-sm font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-gray-400 transition-colors interactive">Behance</a>
            <a href="#" className="hover:text-gray-400 transition-colors interactive">Dribbble</a>
            <a href="#" className="hover:text-gray-400 transition-colors interactive">Instagram</a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default App;

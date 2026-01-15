
import { Language, Page } from './types';
import React, { useEffect, useRef, useState } from 'react';

import Navbar from './components/Navbar';
import ContactModal from './components/ContactModal';
import ProjectDetail from './components/ProjectDetail';

const BouncingPhoto: React.FC = () => {
  const [position, setPosition] = useState({ x: Math.random() * 200, y: Math.random() * 200 });
  const [velocity, setVelocity] = useState({ x: 1.5, y: 1.5 });
  const containerRef = useRef<HTMLDivElement>(null);
  const size = 120;

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
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
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
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>('en'); 
  const [showNavbar, setShowNavbar] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  const [activeTab, setActiveTab] = useState('All');

  useEffect(() => {
    const handleScroll = () => {
      // For project detail, the navbar must always be resident (常驻)
      if (currentPage === 'project-detail') {
        setShowNavbar(true);
        return;
      }
      
      const portfolioSection = document.getElementById('portfolio-section');
      if (portfolioSection) {
        const portfolioTop = portfolioSection.offsetTop;
        setShowNavbar(window.scrollY > portfolioTop - 100);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage]);

  const handlePageChange = (page: Page) => {
    if (page === 'home') {
      setSelectedProjectId(null);
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(`${page}-section`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const openProject = (id: string) => {
    setSelectedProjectId(id);
    setCurrentPage('project-detail');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'zh' : 'en';
    setLanguage(newLang);
    setActiveTab(newLang === 'en' ? 'All' : '全部');
  };

  const translations = {
    zh: {
      hero: ["设计之道", "归于", "自然 ."],
      intro: "我是一名居住在柏林的数字设计总监，专注于创造网站、应用及平台等数字体验。目前在 Koto Studio 供职。",
      tabs: ['全部', 'SaaS', '数据可视化'],
      project: "案例研究",
      blogHeader: "见解",
      blogAction: "阅读全文",
      copyright: "作品集 © 2024",
      jobStatus: "开放机会中",
      navItems: {
        portfolio: '作品集',
        blog: '博客',
        resume: '简历'
      },
      articles: [
        {
          tag: "设计思维",
          date: "2024年3月12日",
          title: "极简主义在现代界面设计中的演变",
          desc: "探讨极简主义如何从视觉美学演变为一种功能性工具，旨在减少认知负荷并增强用户体验。"
        },
        {
          tag: "技术",
          date: "2024年2月28日",
          title: "人工智能对创意工作流的影响",
          desc: "分析生成式人工智能工具如何改变设计师的工作方式，以及人类创造力在自动化时代的角色。"
        }
      ],
      faq: {
        header: "常见问题",
        items: [
          { q: "你的典型设计工作流程是怎样的？", a: "我的流程包括四个核心阶段：深度调研、策略定义、创意设计以及协作交付。我坚持以用户为中心，在每个阶段进行数据验证。" },
          { q: "你最擅长哪些设计工具？", a: "Figma 是我的核心工具。同时熟练掌握 Adobe CC (PS, AI, AE) 进行视觉呈现，并利用 Blender/Spline 进行 3D 辅助。" },
          { q: "你如何处理远程协作？", a: "我擅长异步沟通，使用 Notion 记录文档，Slack 进行即时通讯，Loom 录制设计说明，确保跨时区协作高效清晰。" },
          { q: "你最擅长哪些行业的设计？", a: "我在金融科技 (FinTech)、SaaS 平台和高奢电商领域有深厚经验。擅长将复杂的信息架构转化为直观的产品。" },
          { q: "如何确保设计稿在开发阶段被完美还原？", a: "我提供精准的设计规范和交互说明。通过参与早期可行性评估和定期的 Design QA，确保上线产品与预期一致。" }
        ]
      }
    },
    en: {
      hero: ["GOOD DESIGN", "FEELS", "NATURAL ."],
      intro: "I'm a Berlin-based Digital Design Director creating websites, apps, and platforms. Currently crafting experiences at Koto Studio.",
      tabs: ['All', 'SaaS', 'Data Viz'],
      project: "Case Study",
      blogHeader: "INSIGHTS",
      blogAction: "Read Article",
      copyright: "PORTFOLIO © 2024",
      jobStatus: "Open for opportunities",
      navItems: {
        portfolio: 'Portfolio',
        blog: 'Blog',
        resume: 'Resume'
      },
      articles: [
        {
          tag: "Design Thinking",
          date: "Mar 12, 2024",
          title: "The Evolution of Minimalism in Modern UI",
          desc: "Exploring how minimalism has shifted from a visual aesthetic to a functional tool for reducing cognitive load and enhancing UX."
        },
        {
          tag: "Technology",
          date: "Feb 28, 2024",
          title: "The Impact of AI on Creative Workflows",
          desc: "An analysis of how generative AI tools are changing the way designers work and the evolving role of human creativity."
        }
      ],
      faq: {
        header: "Frequently Asked Questions",
        items: [
          { q: "What is your typical product design workflow?", a: "My workflow follows four main stages: Discovery & Research, Strategic Definition, Creative Execution, and Collaborative Handoff. I stick to a user-centric approach, ensuring data validation and iteration at every step." },
          { q: "What tools do you use for your design work?", a: "Figma is my primary tool for prototyping and design systems. I also use Adobe Creative Cloud (PS, AI, AE) for visual assets and Blender or Spline for 3D elements." },
          { q: "How do you handle remote or asynchronous collaboration?", a: "I'm an expert at async communication. I use Notion for documentation, Slack/Discord for messaging, and Loom for video explanations. Clarity and consistency are my top priorities." },
          { q: "Which industries do you have the most experience in?", a: "I have extensive experience in FinTech, SaaS platforms, and E-commerce. I specialize in turning complex information architectures into intuitive, brand-aligned digital products." },
          { q: "How do you ensure your designs are implemented correctly?", a: "I provide detailed annotations and standardized components. I stay involved in early feasibility checks and perform regular Design QA to ensure the final product matches the design intent." }
        ]
      }
    }
  }[language];

  const goBack = () => {
    setCurrentPage('home');
    setSelectedProjectId(null);
    window.scrollTo({ top: 0, behavior: 'auto' });
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
        projectTitle={currentPage === 'project-detail' ? "GPU CONTAINER SERVICE" : undefined}
        onBack={goBack}
      />
      
      {currentPage === 'project-detail' && selectedProjectId === 'project-1' ? (
        <ProjectDetail 
          language={language} 
          onBack={goBack}
          onContactClick={() => setIsContactModalOpen(true)}
        />
      ) : (
        <>
          {/* Hero Section */}
          <section id="home-section" className="relative min-h-screen flex flex-col px-6 md:px-12 pt-[42px] pb-12 overflow-hidden">
            <BouncingPhoto />
            
            <div className="z-20">
              <h1 className="font-huge text-[15vw] md:text-[12rem] uppercase leading-[0.85] tracking-tighter select-none">
                <span className="block">{translations.hero[0]}</span>
                <span className="block">{translations.hero[1]}</span>
                <span className="block">{translations.hero[2]}</span>
              </h1>
            </div>

            {/* Status Bar */}
            <div className="z-20 flex justify-between items-center mt-8 mb-12">
              <div className="flex gap-2">
                <button 
                  onClick={() => handlePageChange('portfolio')}
                  className="px-6 py-2 bg-[#f0f2f4] hover:bg-[#e4e7ea] transition-colors rounded-full text-sm font-medium interactive"
                >
                  {translations.navItems.portfolio}
                </button>
                <button 
                  onClick={() => handlePageChange('blog')}
                  className="px-6 py-2 bg-[#f0f2f4] hover:bg-[#e4e7ea] transition-colors rounded-full text-sm font-medium interactive"
                >
                  {translations.navItems.blog}
                </button>
              </div>
              
              <div className="flex">
                <div className="px-6 py-2 bg-[#f0f2f4] rounded-full text-sm font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  {translations.jobStatus}
                </div>
              </div>
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
          <section id="portfolio-section" className="px-6 md:px-12 mb-32 pt-20">
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
                <div 
                  key={i} 
                  onClick={() => i === 1 && openProject('project-1')}
                  className="aspect-[4/3] bg-[#f9f9f9] rounded-[40px] overflow-hidden group relative border border-gray-100 transition-transform duration-700 hover:scale-[1.01] interactive"
                >
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-10 left-10 transition-transform duration-500 group-hover:translate-x-2">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Project 0{i}</p>
                    <h3 className="text-2xl font-bold">
                      {i === 1 ? 'GPU Container Service' : translations.project + ' ' + i}
                    </h3>
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
          <section id="blog-section" className="px-6 md:px-12 border-t border-gray-100 pt-32 mb-40">
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-6xl font-black uppercase tracking-tighter">{translations.blogHeader}</h2>
              <button className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors interactive">
                View All Thoughts →
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
          <section className="bg-[#fcfcfc] py-40 px-6 md:px-12 border-t border-gray-100 w-full">
            <div className="max-w-[1000px] mx-auto">
              <h2 className="text-6xl md:text-8xl font-bold tracking-tight text-center mb-24">
                {translations.faq.header}
              </h2>

              <div className="space-y-6">
                {translations.faq.items.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-white rounded-[40px] p-8 md:p-12 transition-all duration-700 border border-gray-100 hover:border-gray-200 interactive group`}
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <div className="flex justify-between items-center cursor-none">
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight pr-12">
                        {item.q}
                      </h3>
                      <div className={`w-14 h-14 rounded-full bg-[#f3f3f3] flex items-center justify-center transition-all duration-500 ${openFaq === idx ? 'bg-black text-white' : 'group-hover:bg-gray-200'}`}>
                        <span className={`text-3xl font-medium transition-transform duration-500 ${openFaq === idx ? 'rotate-180' : 'rotate-0'}`}>
                          {openFaq === idx ? '−' : '+'}
                        </span>
                      </div>
                    </div>
                    <div 
                      className={`grid transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                        openFaq === idx ? 'grid-rows-[1fr] opacity-100 mt-10' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-gray-500 text-xl leading-relaxed max-w-3xl">
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
      )}

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
        language={language} 
      />
      
      <footer className="py-32 border-t border-gray-100 w-full bg-white">
        <div className="w-full px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-2xl font-black uppercase tracking-tighter">{translations.copyright}</div>
          <div className="flex gap-16 text-sm font-bold uppercase tracking-widest">
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

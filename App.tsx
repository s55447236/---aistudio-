
import { Language, Page, Article } from './types';
import React, { useEffect, useRef, useState } from 'react';

// 导入业务组件：导航栏、联系弹窗及各类详情页
import Navbar from './components/Navbar';
import ContactModal from './components/ContactModal';
import ProjectDetail from './components/ProjectDetail';
import AviaDataDetail from './components/AviaDataDetail';
import FireSafeDetail from './components/FireSafeDetail';
import NeighborDetail from './components/NeighborDetail';
import DigitalTwinDetail from './components/DigitalTwinDetail';
import DesignSystemDetail from './components/DesignSystemDetail';
import BlogDetail from './components/BlogDetail';
import InsightsPage from './components/InsightsPage';
import PortfolioPage from './components/PortfolioPage';

/**
 * 首页装饰性浮动照片组件
 * 实现了一个在屏幕内随机反弹的圆形头像
 */
const BouncingPhoto: React.FC = () => {
  const [position, setPosition] = useState({ x: Math.random() * 100, y: Math.random() * 100 });
  const [velocity, setVelocity] = useState({ x: 1.2, y: 1.2 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(120);

  useEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth < 768 ? 80 : 120);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

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
  }, [velocity, size]);

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
  // 核心状态管理
  const [currentPage, setCurrentPage] = useState<Page>('home'); // 当前页面路由
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null); // 选中的项目ID
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null); // 选中的文章ID
  const [language, setLanguage] = useState<Language>('en'); // 多语言状态
  const [showNavbar, setShowNavbar] = useState(false); // 导航栏显隐控制
  const [openFaq, setOpenFaq] = useState<number | null>(0); // 当前展开的 FAQ 索引
  const [isContactModalOpen, setIsContactModalOpen] = useState(false); // 联系弹窗控制
  
  const [activeTab, setActiveTab] = useState('All'); // 作品集筛选分类

  // 项目列表数据
  const projectList = [
    { id: 'project-1', name: 'GPU Container Service', nameZh: 'GPU 容器云' },
    { id: 'project-2', name: 'Avia Data Engine', nameZh: '航产数智' },
    { id: 'project-3', name: 'Fire Safe Platform', nameZh: '智消云管' },
    { id: 'project-4', name: 'Neighbor Hub', nameZh: '邻里生活' },
    { id: 'project-5', name: 'Twin Core Strategy', nameZh: '数字孪生方法论' },
    { id: 'project-6', name: 'Design Systems', nameZh: '设计规范体系' }
  ];

  // 监听滚动，控制导航栏动态出现逻辑
  useEffect(() => {
    const handleScroll = () => {
      // 在详情页或独立页面始终显示导航栏
      if (['project-detail', 'blog-detail', 'insights', 'portfolio'].includes(currentPage)) {
        setShowNavbar(true);
        return;
      }
      
      const portfolioSection = document.getElementById('portfolio-section');
      if (portfolioSection) {
        const portfolioTop = portfolioSection.offsetTop;
        // 当滚动到作品集区域（或越过临界点）时显示导航栏
        setShowNavbar(window.scrollY > portfolioTop - 120);
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

  // 页面切换处理逻辑
  const handlePageChange = (page: Page) => {
    setSelectedProjectId(null);
    setSelectedArticleId(null);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 进入项目详情页
  const openProject = (id: string) => {
    setSelectedProjectId(id);
    setSelectedArticleId(null);
    setCurrentPage('project-detail');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  // 进入文章详情页
  const openArticle = (id: string) => {
    setSelectedArticleId(id);
    setSelectedProjectId(null);
    setCurrentPage('blog-detail');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  // 语言切换
  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'zh' : 'en';
    setLanguage(newLang);
    setActiveTab(newLang === 'en' ? 'All' : '全部');
  };

  // 静态文案翻译数据
  const translations = {
    zh: {
      hero: ["设计之道", "归于", "自然 ."],
      intro: "我是一名居住在上海的数字设计专家，专注于创造网站、应用及平台等数字体验。擅长复杂系统与数据可视化。",
      tabs: ['全部', 'SaaS', '数据可视化', '方法论'],
      project: "案例研究",
      blogHeader: "见解",
      blogAction: "阅读全文",
      copyright: "作品集 © 2024",
      jobStatus: "开放机会中",
      navItems: {
        portfolio: '作品集',
        blog: '见解',
        resume: '简历'
      },
      articles: [
        {
          id: 'minimalism-evolution',
          tag: "设计思维",
          date: "2024年3月12日",
          title: "极简主义在现代界面设计中的演变",
          desc: "探讨极简主义如何从视觉美学演变为一种功能性工具，旨在减少认知负荷并增强用户体验。"
        },
        {
          id: 'ai-impact',
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
          { q: "你最擅长哪些行业的设计？", a: "我在金融科技 (FinTech)、SaaS 平台和数字孪生大屏领域有深厚经验。擅长将复杂的信息架构转化为直观的产品。" },
          { q: "如何确保设计稿在开发阶段被完美还原？", a: "我提供精准的设计规范 and 交互说明。通过参与早期可行性评估 and 定期的 Design QA，确保上线产品与预期一致。" }
        ]
      }
    },
    en: {
      hero: ["GOOD DESIGN", "FEELS", "NATURAL ."],
      intro: "I'm a Shanghai-based Digital Design Expert creating websites, apps, and platforms. Specialized in complex systems and data visualization.",
      tabs: ['All', 'SaaS', 'Data Viz', 'Insights'],
      project: "Case Study",
      blogHeader: "INSIGHTS",
      blogAction: "Read Article",
      copyright: "PORTFOLIO © 2024",
      jobStatus: "Open for opportunities",
      navItems: {
        portfolio: 'Portfolio',
        blog: 'Insights',
        resume: 'Resume'
      },
      articles: [
        {
          id: 'minimalism-evolution',
          tag: "Design Thinking",
          date: "Mar 12, 2024",
          title: "The Evolution of Minimalism in Modern UI",
          desc: "Exploring how minimalism has shifted from a visual aesthetic to a functional tool for reducing cognitive load and enhancing UX."
        },
        {
          id: 'ai-impact',
          tag: "Technology",
          date: "Feb 28, 2024",
          title: "The Impact of AI on Creative Workflows",
          desc: "An analysis of how generative AI tools are changing the way designers work and the evolving role of human creativity."
        }
      ],
      faq: {
        header: "QUESTIONS",
        items: [
          { q: "What is your typical product design workflow?", a: "My workflow follows four main stages: Discovery & Research, Strategic Definition, Creative Execution, and Collaborative Handoff. I stick to a user-centric approach, ensuring data validation and iteration at every step." },
          { q: "What tools do you use for your design work?", a: "Figma is my primary tool for prototyping and design systems. I also use Adobe Creative Cloud (PS, AI, AE) for visual assets and Blender or Spline for 3D elements." },
          { q: "How do you handle remote or asynchronous collaboration?", a: "I'm an expert at async communication. I use Notion for documentation, Slack/Discord for messaging, and Loom for video explanations. Clarity and consistency are my top priorities." },
          { q: "Which industries do you have the most experience in?", a: "I have extensive experience in FinTech, SaaS platforms, and Digital Twins. I specialize in turning complex information architectures into intuitive digital products." },
          { q: "How do you ensure your designs are implemented correctly?", a: "I provide detailed annotations and standardized components. I stay involved in early feasibility checks and perform regular Design QA to ensure the final product matches the design intent." }
        ]
      }
    }
  }[language];

  // 返回首页
  const goBack = () => {
    handlePageChange('home');
  };

  // 根据当前选择的项目/文章返回标题给导航栏显示
  const getNavbarTitle = () => {
    if (currentPage === 'project-detail') {
        const titles: Record<string, string> = {
            'project-1': "GPU INFRA",
            'project-2': "AVIA DATA",
            'project-3': "FIRE SAFE",
            'project-4': "NEIGHBOR",
            'project-5': "TWIN CORE",
            'project-6': "DESIGN SYS"
        };
        return titles[selectedProjectId || ''];
    } else if (currentPage === 'blog-detail') {
        const titles: Record<string, string> = {
            'ai-impact': "AI TRANSFORMATION",
            'minimalism-evolution': "MODERN MINIMALISM"
        };
        return titles[selectedArticleId || ''];
    }
    return "";
  }

  // 渲染对应的详情页或子页面组件
  const renderDetail = () => {
    if (currentPage === 'project-detail') {
        switch(selectedProjectId) {
            case 'project-1': return <ProjectDetail language={language} onBack={goBack} onContactClick={() => setIsContactModalOpen(true)} />;
            case 'project-2': return <AviaDataDetail language={language} onBack={goBack} onContactClick={() => setIsContactModalOpen(true)} />;
            case 'project-3': return <FireSafeDetail language={language} onBack={goBack} onContactClick={() => setIsContactModalOpen(true)} />;
            case 'project-4': return <NeighborDetail language={language} onBack={goBack} onContactClick={() => setIsContactModalOpen(true)} />;
            case 'project-5': return <DigitalTwinDetail language={language} onBack={goBack} onContactClick={() => setIsContactModalOpen(true)} />;
            case 'project-6': return <DesignSystemDetail language={language} onBack={goBack} onContactClick={() => setIsContactModalOpen(true)} />;
            default: return null;
        }
    } else if (currentPage === 'blog-detail') {
        return <BlogDetail articleId={selectedArticleId || ''} language={language} onBack={() => setCurrentPage('insights')} />;
    } else if (currentPage === 'insights') {
        return <InsightsPage language={language} articles={translations.articles as Article[]} onArticleClick={openArticle} onBack={goBack} />;
    } else if (currentPage === 'portfolio') {
        return <PortfolioPage language={language} projects={projectList} onProjectClick={openProject} onBack={goBack} />;
    }
    return null;
  };

  return (
    <main className="relative min-h-screen bg-white text-black">
      {/* 全局悬浮导航栏 */}
      <Navbar 
        isVisible={showNavbar} 
        currentPage={currentPage} 
        onPageChange={(p) => handlePageChange(p)} 
        language={language}
        onLanguageToggle={toggleLanguage}
        onContactClick={() => setIsContactModalOpen(true)}
        displayTitle={getNavbarTitle()}
        onBack={goBack}
      />
      
      {/* 动态页面内容切换 */}
      {['project-detail', 'blog-detail', 'insights', 'portfolio'].includes(currentPage) ? (
        renderDetail()
      ) : (
        <>
          {/* 1. HERO 模块 - 首页首屏 */}
          <section id="home-section" className="relative min-h-[90vh] md:min-h-screen flex flex-col px-4 md:px-12 pt-16 md:pt-[42px] pb-12 overflow-hidden">
            <BouncingPhoto />
            <div className="z-20">
              <h1 className="font-huge text-[18vw] md:text-[12rem] uppercase leading-[0.8] tracking-tighter select-none mb-12">
                <span className="block">{translations.hero[0]}</span>
                <span className="block">{translations.hero[1]}</span>
                <span className="block">{translations.hero[2]}</span>
              </h1>
            </div>
            <div className="z-20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mt-8 mb-12">
              <div className="flex gap-2">
                <button onClick={() => handlePageChange('portfolio')} className="px-5 md:px-6 py-2 bg-[#f0f2f4] hover:bg-[#e4e7ea] transition-colors rounded-full text-xs md:text-sm font-bold interactive">
                  {translations.navItems.portfolio}
                </button>
                <button onClick={() => handlePageChange('insights')} className="px-5 md:px-6 py-2 bg-[#f0f2f4] hover:bg-[#e4e7ea] transition-colors rounded-full text-xs md:text-sm font-bold interactive">
                  {translations.navItems.blog}
                </button>
              </div>
              <div className="flex">
                <div className="px-5 md:px-6 py-2 bg-[#f0f2f4] rounded-full text-xs md:text-sm font-bold flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  {translations.jobStatus}
                </div>
              </div>
            </div>
            <div className="z-20 flex justify-end mt-auto mb-12">
              <div className="max-w-xs md:max-w-md">
                <p className="text-base md:text-xl leading-[1.3] text-black font-bold text-right sm:text-left">{translations.intro}</p>
              </div>
            </div>
          </section>

          {/* 2. PORTFOLIO 模块 - 作品展示区域 */}
          <section id="portfolio-section" className="px-4 md:px-12 mb-32 pt-20">
            <div className="flex items-center gap-2 md:gap-4 mb-10 border-t pt-10 border-gray-100 overflow-x-auto no-scrollbar">
              {translations.tabs.map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold transition-all whitespace-nowrap ${activeTab === tab ? 'bg-black text-white' : 'bg-white text-black border border-gray-200 hover:border-black'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {projectList.map((proj, i) => (
                <div 
                  key={proj.id} 
                  onClick={() => openProject(proj.id)}
                  className="aspect-[4/3] bg-[#f9f9f9] rounded-[32px] md:rounded-[40px] overflow-hidden group relative border border-gray-100 transition-transform duration-700 hover:scale-[1.01] interactive"
                >
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 transition-transform duration-500 group-hover:translate-x-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Project 0{i+1}</p>
                    <h3 className="text-xl md:text-2xl font-bold">{language === 'zh' ? proj.nameZh : proj.name}</h3>
                  </div>
                  <div className="absolute top-6 md:top-10 right-6 md:right-10 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black flex items-center justify-center bg-white/50 backdrop-blur-sm">
                      <svg className="w-5 h-5 md:w-6 md:h-6 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <button 
                onClick={() => handlePageChange('portfolio')}
                className="px-8 py-4 bg-black text-white rounded-full font-bold text-sm interactive hover:bg-gray-800 transition-colors"
              >
                {language === 'zh' ? '查看更多作品' : 'Explore All Works'}
              </button>
            </div>
          </section>

          {/* 3. BLOG 模块 - 见解文章列表 (预览版) */}
          <section id="blog-section" className="px-4 md:px-12 border-t border-gray-100 pt-32 mb-40">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">{translations.blogHeader}</h2>
              <button 
                onClick={() => handlePageChange('insights')}
                className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors interactive"
              >
                {language === 'zh' ? '查看全部见解 →' : 'View All Thoughts →'}
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {translations.articles.map((article, idx) => (
                <article key={idx} className="group flex flex-col interactive" onClick={() => openArticle(article.id)}>
                  <div className="flex justify-between items-center mb-6 text-[10px] font-black tracking-widest text-gray-400 uppercase">
                    <span>{article.tag}</span>
                    <span>{article.date}</span>
                  </div>
                  <div className="mb-6 h-[1.5px] w-full bg-gray-100 group-hover:bg-black transition-colors duration-500"></div>
                  <h3 className="text-xl md:text-2xl font-bold leading-tight mb-4 group-hover:translate-x-1 transition-transform duration-500">{article.title}</h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 line-clamp-2">{article.desc}</p>
                  <div className="mt-auto flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all group-hover:gap-4">
                    {translations.blogAction}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* 4. FAQ 模块 - 常见问题解答 */}
          <section className="bg-white py-32 md:py-40 px-4 md:px-12 w-full">
            <div className="max-w-[800px] mx-auto">
              <h2 className="font-huge text-[15vw] md:text-[8rem] uppercase tracking-tighter text-center mb-24 leading-[0.8]">{translations.faq.header}</h2>
              <div className="space-y-4">
                {translations.faq.items.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-white rounded-[32px] md:rounded-[40px] p-5 md:p-8 transition-all duration-700 border border-black/5 faq-item-hover interactive group overflow-hidden`}
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <div className="flex justify-between items-center cursor-none gap-6">
                      <h3 className="text-base md:text-2xl leading-[1.2] font-bold text-black flex-1 transition-colors duration-500 group-hover:text-black">{item.q}</h3>
                      <div className={`flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500 ${openFaq === idx ? 'bg-black text-white' : 'bg-[#f3f3f3] text-black group-hover:bg-black group-hover:text-white'}`}>
                        <span className={`text-lg md:text-2xl font-light transition-transform duration-500 ${openFaq === idx ? 'rotate-180' : 'rotate-0'}`}>{openFaq === idx ? '−' : '+'}</span>
                      </div>
                    </div>
                    {/* 展开/收起动画逻辑 */}
                    <div className={`grid transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${openFaq === idx ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-3xl">{item.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* 5. CONTACT MODAL - 浮层联系弹窗 */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} language={language} />
      
      {/* 6. FOOTER - 页脚版权信息 */}
      <footer className="py-24 md:py-32 border-t border-gray-100 w-full bg-white">
        <div className="w-full px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-xl md:text-2xl font-black uppercase tracking-tighter">{translations.copyright}</div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-[10px] md:text-xs font-black uppercase tracking-widest">
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

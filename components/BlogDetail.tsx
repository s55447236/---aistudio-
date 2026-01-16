
import React from 'react';
import { Language } from '../types';

interface BlogDetailProps {
  articleId: string;
  language: Language;
  onBack: () => void;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ articleId, language, onBack }) => {
  const isEn = language === 'en';

  // Article content data
  const articles = {
    'ai-impact': {
      tag: isEn ? "Technology" : "技术",
      date: isEn ? "Feb 28, 2024" : "2024年2月28日",
      title: isEn 
        ? "UX Transformation in the AI Era: From \"Pixel Pushing\" to \"Logic Orchestration\"" 
        : "AI 时代的 UX 变革：从“像素推移”到“逻辑编排\"",
      subtitle: isEn 
        ? "In product design and UX, the impact of Generative AI goes far beyond Midjourney moodboards. It is fundamentally changing how we build digital products, shifting focus from the \"interface surface\" to the \"product logic.\"" 
        : "在产品设计和 UX 领域，生成式 AI 的影响远不止于 Midjourney 生成几张情绪板（Moodboard）。它正在从底层改变我们构建数字产品的方式，将设计师的关注点从“界面表现层”强行拉升至“产品逻辑层”。",
      content: isEn ? [
        "This is a deep dive into the impact of AI on creative workflows from a UX perspective.",
        "1. Shift in Design Paradigm: From Static UI to Generative UI",
        "In the past, UX designers delivered static mockups. We predicted every path and drew fixed interfaces for every state.",
        "AI is introducing a new possibility: Generative UI.",
        "• Generate on demand: Future interfaces might not be pre-drawn, but dynamically generated based on user intent and context.",
        "• Challenges for designers: Our job is no longer to draw specific pages, but to define 'generation rules' and 'constraints.' Designers need to design the 'personality' and 'boundaries' of the system, not specific 'faces.'",
        "2. Restructuring Workflow: Blurring Boundaries between Design and Product",
        "AI is the strongest catalyst for professionals transitioning from UI to upstream roles like Product Management.",
        "• Collapse from low-fi to high-fi: Previously, moving from wireframes to high-fi designs took days. Now, AI tools can instantly convert sketches or text descriptions into interactive high-fi prototypes.",
        "• Impact: This means the cost of 'validating ideas' approaches zero. Designers can test near-final prototypes early in product definition. Design is no longer downstream of documentation, but a core tool for strategy.",
        "• Real Content over Lorem Ipsum: AI can fill in highly realistic copy based on product tone, allowing reviews to focus on information architecture rather than placeholder text.",
        "3. End of Tedious Work: Design Systems and Doc Automation",
        "Maintaining design systems and writing hand-off specs are massive time sinks for senior designers.",
        "• Automated Design Specs: AI can analyze designs, generate annotations, component variants, and even output frontend Token code.",
        "• Consistency Guard: In complex B2B systems, AI acts as a 'real-time inspector,' scanning for deviations from design standards or legacy components.",
        "4. Evolution of Core Competency: System Thinking",
        "Being good at Figma's pen tool or rendering is no longer a core moat. The new core competencies for UX designers are:",
        "• Abstraction and Modeling: Converting complex business logic into clear information architecture.",
        "• Prompt Engineering and Model Tuning: Precisely controlling AI output using natural language.",
        "• Empathy and User Insight: Judging which AI-generated flows actually solve user pain points through analysis.",
        "Conclusion: Designers as Product Architects",
        "AI is here to 'denoise' the work—removing pixel-alignment and documentation tasks so you can focus on the core: who are we solving for? How elegant is the solution? Future UX designers will be visual-literate product architects."
      ] : [
        "这是对“AI 对创意工作流影响”的 UX 视角深度解读。",
        "1. 设计范式的转移：从 Static UI 到 Generative UI",
        "过去，UX 设计师交付的是静态的页面（Mockups）。我们预测用户的所有路径，并为每一个状态画出固定的界面。",
        "AI 正在引入一种新的可能性：生成式界面（Generative UI）。",
        "• 按需生成： 未来的界面可能不是预先画好的，而是 AI 根据用户的实时意图（Intent）和上下文数据，动态生成最适合当前任务的组件。",
        "• 对设计师的挑战： 我们的工作不再是绘制每一个具体的页面，而是定义“生成规则”和“约束条件（Constraints）”。设计师需要设计的是系统的“性格”和“边界”，而不是具体的“面孔”。",
        "2. 工作流的重构：模糊设计与产品的边界",
        "对于正在从 UI 转型为更上游（如产品经理）角色的专业人士来说，AI 是最强的催化剂。",
        "• 低保真到高保真的坍缩： 以前，从线框图（Wireframe）到高保真设计图（Hi-fi）需要数天。现在，利用 AI 插件（如 Figma 中的各种 AI 工具），可以将手绘草图或简单的文本描述瞬间转化为可交互的高保真原型。",
        "• 影响： 这意味着“验证想法”的成本趋近于零。设计师可以在产品定义的早期阶段，就拿出接近成品的原型进行测试。设计不再是文档的下游，而是策略制定的核心工具。",
        "• 文案与内容的填充（Real Content over Lorem Ipsum）： UX Writing 曾是被忽视的一环。现在 AI 可以根据产品调性自动填充真实度极高的文案数据。这使得设计评审不再纠结于“这里放什么字”，而能专注于“信息架构是否合理”。",
        "3. 枯燥工作的终结：设计系统与文档自动化",
        "所有资深 UI/UX 设计师都知道，维护设计系统（Design System）和编写交付文档（Hand-off Specs）是巨大且枯燥的时间黑洞。",
        "• 自动化的设计规范： AI 可以分析你的设计稿，自动生成标注、组件变体说明，甚至直接输出前端可用的 Token 代码。",
        "• 一致性卫士： 在大型 B2B 或复杂后台系统中，保持几十个页面的一致性很难。AI 可以作为“实时质检员”，扫描设计稿并指出哪里偏离了设计规范，或者哪里出现了由于迭代遗留的旧组件。",
        "4. 核心竞争力的演变：系统思维（System Thinking）",
        "在 AI 时代，单纯擅长使用 Figma 的“钢笔工具”或精通光影渲染，将不再是核心护城河。UX 设计师的新核心竞争力将变为：",
        "• 抽象与建模能力： 能否将复杂的业务逻辑转化为清晰的信息架构？",
        "• 提示词工程与模型调优： 能否用自然语言精准控制 AI 工具输出符合设计规范的结果？",
        "• 同理心与用户洞察： AI 可以生成无数种界面，但只有人类设计师能通过用户访谈和数据分析，判断哪一种流程真正解决了用户的痛点。",
        "结语：设计师即产品架构师",
        "对于 UX 从业者，AI 不是来抢饭碗的，它是来“去噪”的。它去掉了对齐像素、切图、改文案这些由于工具限制而产生的“噪音”，让你不得不去面对设计最本质的问题：这个产品到底为谁解决问题？解决得够不够优雅？在这个意义上，未来的 UX 设计师，实质上就是懂视觉语言的产品架构师。"
      ]
    },
    'minimalism-evolution': {
      tag: isEn ? "Design Thinking" : "设计思维",
      date: isEn ? "Mar 12, 2024" : "2024年3月12日",
      title: isEn ? "The Evolution of Minimalism in Modern UI" : "极简主义在现代界面设计中的演变",
      subtitle: isEn ? "From aesthetic choice to cognitive necessity." : "从审美选择到认知必然。",
      content: isEn ? [
        "Minimalism in digital design is often misunderstood as simply 'having a lot of white space'. However, its evolution has taken it far beyond aesthetics into the realm of cognitive psychology and functional utility.",
        "Modern minimalism is about the reduction of cognitive load. In an era of information overload, the designer's primary job is to hide the irrelevant so the essential can shine. We see this in the shift from skeuomorphism to flat design, and now towards 'complex minimalism' where depth and hierarchy are signaled through subtle shadows and micro-interactions rather than heavy decoration.",
        "The future of minimalism is adaptive. It's not just about less; it's about the right amount of information at the right time. Interfaces that learn from user behavior to prune unnecessary elements dynamically represent the next frontier of this movement."
      ] : [
        "数字设计中的极简主义常被误解为仅仅是'拥有大量留白'。然而，它的演变已经远远超出了审美的范畴，进入了认知心理学和功能效用的领域。",
        "现代极简主义的核心在于减少认知负荷。在信息过载的时代，设计师的首要工作是隐藏无关紧要的内容，让本质得以彰显。我们从拟物化到扁平化，再到现在的'复杂极简主义'的转变中看到了这一点，在其中，深度和层级是通过微妙的阴影和微交互而不是沉重的装饰来传达的。",
        "极简主义的未来是自适应的。它不仅仅关乎更少；它关乎在正确的时间提供正确的信息量。能够从用户行为中学习以动态修剪不必要元素的界面代表了这一运动的下一个前沿。"
      ]
    }
  };

  const activeArticle = articles[articleId as keyof typeof articles] || articles['ai-impact'];

  return (
    <div className="min-h-screen bg-white text-black animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Hero Section */}
      <section className="pt-48 px-6 md:px-12 pb-24">
        <div className="flex justify-between items-center mb-12 text-[10px] font-black tracking-[0.3em] text-gray-400 uppercase">
          <span>{activeArticle.tag}</span>
          <span>{activeArticle.date}</span>
        </div>
        
        <h1 className="text-[8vw] md:text-[6.5rem] font-huge leading-[0.9] mb-12 tracking-tighter max-w-[1200px]">
          {activeArticle.title}
        </h1>

        <p className="text-base md:text-xl font-medium text-gray-500 max-w-4xl leading-snug tracking-tight">
          {activeArticle.subtitle}
        </p>
      </section>

      {/* Hero Image Placeholder */}
      <section className="px-6 md:px-12 mb-32">
        <div className="aspect-[21/9] w-full bg-gray-50 rounded-[60px] border border-gray-100 flex items-center justify-center relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200 opacity-50"></div>
           <span className="text-[10px] font-black uppercase tracking-widest text-gray-300 z-10">[ ARTICLE FEATURE IMAGE ]</span>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-12 pb-48">
        <div className="max-w-[1000px] mx-auto">
          <div className="space-y-6">
            {activeArticle.content.map((p, idx) => {
              // 检测标题
              const isHeading = /^[1-4]\.|\b总结\b|\bSummary\b|\b结语\b|\bConclusion\b/.test(p);
              // 检测列表项
              const isBullet = p.startsWith('•');
              
              return (
                <p 
                  key={idx} 
                  className={`tracking-tight leading-relaxed transition-all duration-500 ${
                    isHeading // 标题样式：大字号、粗字重、章节级间距
                      ? 'text-2xl md:text-3xl font-black pt-12 text-black tracking-tighter leading-[1.1]' 
                      : isBullet 
                        ? 'text-base md:text-xl font-medium pl-4 relative text-gray-500' 
                        : 'text-base md:text-xl font-medium text-gray-500'
                  }`}
                >
                  {isBullet && <span className="absolute left-0 text-black">•</span>}
                  {isBullet ? p.substring(1).trim() : p}
                </p>
              );
            })}
          </div>

          <div className="mt-24 pt-12 border-t border-gray-100">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden border border-black/5">
                 <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=64&h=64&auto=format&fit=crop" alt="Author" />
               </div>
               <div>
                 <p className="text-sm font-bold">Designer Portfolio</p>
                 <p className="text-xs text-gray-400 font-medium tracking-widest uppercase">{isEn ? "Digital Design Expert" : "数字设计专家"}</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="px-6 md:px-12 py-32 border-t border-gray-100 bg-[#f9f9f9] flex flex-col items-center">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-gray-400 mb-8">{isEn ? "Back to Thoughts" : "返回见解列表"}</p>
        <button 
          onClick={onBack}
          className="text-4xl md:text-7xl font-huge hover:opacity-50 transition-all duration-500 interactive text-center uppercase leading-none"
        >
          {isEn ? "View All Articles" : "查看全部文章"} ←
        </button>
      </section>
    </div>
  );
};

export default BlogDetail;

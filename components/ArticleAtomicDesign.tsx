
import React from 'react';
import ArticleTemplate, { ArticleSection } from './ArticleTemplate';
import { Language } from '../types';

const ArticleAtomicDesign: React.FC<{ language: Language, onBack: () => void }> = ({ language, onBack }) => {
  const isEn = language === 'en';

  const sections: ArticleSection[] = isEn ? [
    { type: 'paragraph', text: "Traditional Docker/K8s container services were designed for Microservices, pursuing isolation, statelessness, and lightweight footprints. But in the AI era, your users (AI Engineers) no longer care just if the service is 'alive'. They care about 'Has my model converged?', 'Is my VRAM utilization full?', and 'Can my training task resume from a checkpoint?'" },
    { type: 'heading', text: "1. Core Differences: Beyond Just Running" },
    { type: 'paragraph', text: "The primary difference between 'AI era' products and traditional ones lies in the diversity of workloads. You need to support three distinct scenarios simultaneously:" },
    { type: 'bullet', text: "Interactive Development: Like providing an IDE for programmers, you provide Jupyter Notebooks for algorithm engineers." },
    { type: 'bullet', text: "Distributed Training: Like an industrial assembly line, requiring extreme throughput and stability." },
    { type: 'bullet', text: "High-Performance Serving (Inference): Like a high-frequency trading system, requiring extremely low latency." },
    
    { type: 'heading', text: "2. Four Core Product Capabilities" },
    { type: 'heading', text: "I. Development Environment: The Cloud Workbench" },
    { type: 'bullet', text: "Pain Point: Configuring environments is a nightmare (CUDA versions, Python dependencies, driver conflicts)." },
    { type: 'bullet', text: "Solution: Image Marketplaces with pre-validated PyTorch/TensorFlow/vLLM; Persistent Workspaces (/home); One-click Direct Connection (Web VSCode/Jupyter)." },
    
    { type: 'heading', text: "II. Training Task Management: Gang Scheduling & Fault Tolerance" },
    { type: 'bullet', text: "Pain Point: If one GPU fails in a 100-card training task, the whole task fails. Or tasks get stuck halfway because only partial resources are available." },
    { type: 'bullet', text: "Solution: Gang Scheduling ('All or nothing'); Topology Awareness (network optimization); Auto-restart from Checkpoints." },
    
    { type: 'heading', text: "III. Resource Management: Squeezing Performance" },
    { type: 'bullet', text: "Pain Point: Idle GPUs in Notebooks or tasks too small to fill an A100." },
    { type: 'bullet', text: "Solution: GPU Virtualization/Slicing (MIG/vGPU); Idle Detection and Recycling; Mixed Deployment (Inference + Training)." },
    
    { type: 'heading', text: "IV. Model Management: The Model Asset Library" },
    { type: 'bullet', text: "Pain Point: Multi-GB model files are slow to download and versions are chaotic." },
    { type: 'bullet', text: "Solution: Built-in Model Registry; P2P Large File Acceleration (seconds-level loading for 50GB models)." },

    { type: 'heading', text: "3. Advice for Transitioning PMs (UX Perspective)" },
    { type: 'bullet', text: "Don't let users do math: Don't ask for 'CPU cores/Memory MB'. Ask 'I am running Llama-3-70B fine-tuning' and recommend the config: 4x A100, 320GB VRAM." },
    { type: 'bullet', text: "Visualization is trust: Provide real-time Loss Curves and VRAM Heatmaps. Users need to see these lines to feel safe." },
    { type: 'bullet', text: "Error messages in human language: Translate 'OOMKilled' to 'VRAM overflowed, try reducing Batch Size'." },

    { type: 'quote', text: "If the AI Agent platform is a 'Brain Hostel', then a general GPU container platform is the 'Brain Maternity Factory'." }
  ] : [
    { type: 'paragraph', text: "传统的 Docker/K8s 容器服务是为了微服务设计的，追求的是隔离性、无状态和轻量级。但在 AI 时代，你的用户（AI 工程师）关心的不再是“我的服务是否存活”，而是“我的模型收敛了没有”、“我的显存利用率满没满”、“我的训练任务挂了能不能断点续传”。" },
    { type: 'heading', text: "第一部分：核心差异——不仅是跑起来，而是跑得快、跑得稳" },
    { type: 'paragraph', text: "“AI 时代”产品的主要区别在于负载的多样性。你需要同时支撑三种截然不同的场景：" },
    { type: 'bullet', text: "交互式开发 (Interactive Development)： 就像给程序员配 IDE，你要给算法工程师配 Jupyter Notebook。" },
    { type: 'bullet', text: "分布式训练 (Distributed Training)： 就像工业流水线，要求极致的吞吐和稳定性。" },
    { type: 'bullet', text: "高性能推理 (Serving)： 就像高频交易系统，要求极低的延迟。" },
    
    { type: 'heading', text: "第二部分：AI 工程师视角的四大核心产品能力" },
    { type: 'heading', text: "1. 开发环境：不仅是容器，是“云端工作台”" },
    { type: 'bullet', text: "痛点： 配环境是噩梦（CUDA 版本、Python 依赖、驱动冲突）。" },
    { type: 'bullet', text: "产品解法： 预置镜像市场、持久化工作区（/home 挂载）、一键直连 JupyterLab/VSCode Web。" },
    
    { type: 'heading', text: "2. 训练任务管理：拥抱“帮派调度”与“容错”" },
    { type: 'bullet', text: "痛点： 100 张卡的训练任务，只要有一张卡挂了，整个任务就会失败。" },
    { type: 'bullet', text: "产品解法： Gang Scheduling（要么全部启动，要么一个都别动）；拓扑感知（Topology Awareness）优化网络速度；自动容错与 Checkpoint 管理。" },
    
    { type: 'heading', text: "3. 资源管理：不仅是分配，是“压榨性能”" },
    { type: 'bullet', text: "痛点： 有人占着茅坑不拉屎（开着 Notebook 不跑数），利用率是核心 KPI。" },
    { type: 'bullet', text: "产品解法： GPU 虚拟化/切分（MIG/vGPU）；闲置检测与回收；混合部署（在线推理压制离线训练）。" },
    
    { type: 'heading', text: "4. 模型管理：不仅是镜像，是“模型资产库”" },
    { type: 'bullet', text: "痛点： 模型文件动辄几十 GB，下载慢，版本乱。" },
    { type: 'bullet', text: "产品解法： 内置 Model Registry（像 Git 一样管理模型）；P2P 大文件加速（50GB 模型秒级加载）。" },

    { type: 'heading', text: "第四部分：给转型 PM 的建议（来自 UX 视角的迁移）" },
    { type: 'bullet', text: "不要让用户做数学题： 不要问 CPU 核数，直接根据任务（如 Llama3-70B 微调）推荐 4x A100 配置。" },
    { type: 'bullet', text: "可视化是信任的来源： 提供实时的 Loss Curve（损失曲线） 和 GPU 显存热力图，用户盯着这些线才安心。" },
    { type: 'bullet', text: "报错要“说人话”： 将 K8s 的 OOMKilled 翻译成“显存溢出了，建议将 Batch Size 调小”。" },

    { type: 'quote', text: "如果说 AI Agent 平台是“大脑的托管所”，那么通用的 GPU 容器平台就是“大脑的孕育工厂”。" }
  ];

  return (
    <ArticleTemplate 
      language={language}
      tag={isEn ? "GPU Cloud" : "GPU 容器云"}
      date={isEn ? "Mar 20, 2024" : "2024年3月20日"}
      title={isEn ? "GPU Container Service: From Ops Platform to Alchemy Factory" : "AI 时代的 GPU 容器服务——从“运维平台”到“炼丹工厂”"}
      subtitle={isEn ? "What infrastructure do AI engineers really need? Exploring the essence of 'AI Operating Systems'." : "AI 工程师到底需要什么样的基础设施？探讨当容器遇见张量，本质上的“AI 操作系统”该如何设计。"}
      sections={sections}
      onBack={onBack}
    />
  );
};

export default ArticleAtomicDesign;

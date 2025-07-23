// app/portfolio/page.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Calendar, 
  Clock, 
  Code2, 
  Smartphone, 
  Search, 
  Zap,
  ArrowLeft,
  Bot,
  Users,
  TrendingUp,
  Shield,
  Heart,
  Scale,
  Calculator,
  ChevronRight,
  Eye,
  GraduationCap,
  Star
} from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const projects = [
  {
    id: 'dental-clinic',
    title: '테스트 치과 홈페이지',
    category: '의료기관',
    description: '모던하고 신뢰감 있는 치과 전용 홈페이지. 예약 시스템, 진료과목 상세페이지, SEO 친화적 구조',
    image: '🦷',
    color: 'from-teal-500 to-cyan-500',
    liveUrl: 'https://dental-clinic-portfolio.vercel.app',
    githubUrl: 'https://github.com/geonwoong-creator/dental-clinic-portfolio',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'React Calendar'],
    features: [
      '4단계 예약 시스템',
      '진료과목 상세페이지',
      '완전 반응형 디자인',
      'SEO 친화적 구조',
      '플로팅 사이드바',
      '부드러운 애니메이션'
    ],
    highlights: [
      { icon: Clock, text: '개발기간: 1주' },
      { icon: Users, text: '타겟: 치과/병원' },
      { icon: TrendingUp, text: 'SEO 친화적 구조' },
      { icon: Smartphone, text: '모바일 최적화' }
    ],
    developmentProcess: [
      '요구사항 분석 (AI 활용)',
      'UI/UX 디자인',
      '컴포넌트 개발',
      '애니메이션 구현',
      'SEO 최적화',
      'Vercel 배포'
    ]
  },
  {
    id: 'law-firm',
    title: '프리미엄 법무법인',
    category: '법무서비스',
    description: '전문적이고 신뢰감 있는 법무법인 웹사이트. 상담 예약, 전문분야 소개, 성공사례 포트폴리오',
    image: '⚖️',
    color: 'from-slate-600 to-gray-700',
    liveUrl: '#',
    githubUrl: '#',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    features: [
      '온라인 상담 예약',
      '전문분야별 페이지',
      '변호사 소개',
      '성공사례 갤러리',
      '법률 뉴스',
      '다국어 지원 준비'
    ],
    highlights: [
      { icon: Clock, text: '개발기간: 1.5주' },
      { icon: Scale, text: '타겟: 법무법인' },
      { icon: Shield, text: '보안 강화' },
      { icon: Users, text: '전문가 이미지' }
    ],
    developmentProcess: [
      'AI 기반 콘텐츠 기획',
      '프리미엄 디자인',
      '전문성 어필 구조',
      '상담 시스템 구현',
      '신뢰도 향상 요소',
      '배포 및 최적화'
    ]
  },
];

const categories = ['전체', '의료기관', '법무서비스', '일반 기업'];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === '전체' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Header */}
      <motion.header 
        className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-40 border-b border-slate-700"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="font-semibold">홈으로 돌아가기</span>
            </Link>
            <h1 className="text-xl font-bold">Portfolio</h1>
            <div className="w-40"></div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-slate-800 px-4 py-2 rounded-full mb-6">
              <Bot className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-sm text-gray-300">AI-Powered Projects</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              완성된 <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">프로젝트들</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              AI를 활용한 빠른 개발로 완성한 실제 프로젝트들을 확인해보세요.<br />
              각 프로젝트는 <span className="text-blue-400">실제 비즈니스</span>에서 바로 사용 가능한 수준입니다.
            </p>

            {/* Stats */}
            <div className="flex justify-center space-x-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">{projects.length}+</div>
                <div className="text-sm text-gray-400">완성 프로젝트</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">100%</div>
                <div className="text-sm text-gray-400">AI 활용</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">1-2주</div>
                <div className="text-sm text-gray-400">평균 개발기간</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex bg-slate-800 rounded-lg p-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            key={selectedCategory}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-slate-800 rounded-xl overflow-hidden shadow-2xl border border-slate-700 group-hover:border-slate-600 transition-all duration-300">
                  {/* Project Image/Icon */}
                  <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-6xl mb-4">{project.image}</div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                    
                    {/* Tech Stack Pills */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                      {project.techStack.slice(0, 2).map((tech, idx) => (
                        <span key={idx} className="bg-black/30 backdrop-blur-sm px-2 py-1 text-xs rounded-full text-white">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 2 && (
                        <span className="bg-black/30 backdrop-blur-sm px-2 py-1 text-xs rounded-full text-white">
                          +{project.techStack.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {project.liveUrl !== '#' && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-black/30 backdrop-blur-sm p-2 rounded-full hover:bg-black/50 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.githubUrl !== '#' && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-black/30 backdrop-blur-sm p-2 rounded-full hover:bg-black/50 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                      <div className="flex items-center text-xs text-gray-400">
                        <Eye className="w-3 h-3 mr-1" />
                        자세히 보기
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <span key={idx} className="text-xs text-gray-400 bg-slate-700 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                        {project.features.length > 3 && (
                          <span className="text-xs text-gray-400">
                            +{project.features.length - 3}개 더
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="grid grid-cols-2 gap-2">
                      {project.highlights.slice(0, 2).map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-400">
                          <highlight.icon className="w-3 h-3 mr-1 text-blue-400" />
                          {highlight.text}
                        </div>
                      ))}
                    </div>

                    {/* View Details */}
                    <div className="mt-4 pt-4 border-t border-slate-700">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">프로젝트 상세보기</span>
                        <ChevronRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <motion.div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div 
            className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`h-32 bg-gradient-to-br ${selectedProject.color} flex items-center justify-between p-6`}>
              <div className="flex items-center">
                <div className="text-4xl mr-4">{selectedProject.image}</div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                  <span className="text-white/80">{selectedProject.category}</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-white/80 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <p className="text-gray-300 text-lg mb-6">{selectedProject.description}</p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-3">기술 스택</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span key={idx} className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-3">주요 기능</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-3">프로젝트 하이라이트</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center bg-slate-700 p-3 rounded-lg">
                      <highlight.icon className="w-5 h-5 text-blue-400 mr-3" />
                      <span className="text-gray-300">{highlight.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Development Process */}
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-3">개발 과정</h3>
                <div className="space-y-2">
                  {selectedProject.developmentProcess.map((step, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <span className="bg-blue-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center mr-3">
                        {idx + 1}
                      </span>
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                {selectedProject.liveUrl !== '#' && (
                  <a 
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    라이브 데모
                  </a>
                )}
                {selectedProject.githubUrl !== '#' && (
                  <a 
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-600 hover:border-gray-500 text-white px-6 py-3 rounded-lg flex items-center transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
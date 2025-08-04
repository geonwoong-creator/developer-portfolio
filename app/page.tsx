// app/page.tsx
"use client";

import type { Metadata } from "next";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Zap,
  Brain,
  Rocket,
  Monitor,
  Smartphone,
  Search,
  Clock,
  CheckCircle,
  ArrowRight,
  Github,
  Mail,
  Phone,
  Bot,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const TypewriterText = ({
  text,
  delay = 0,
}: {
  text: string;
  delay?: number;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const typing = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typing);
          setTimeout(() => setShowCursor(false), 1000);
        }
      }, 100);

      return () => clearInterval(typing);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <span>
      {displayText}
      {showCursor && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default function DeveloperPortfolio() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Schema.org structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://developer-portfolio-seven-rust.vercel.app/#organization",
        "name": "WMT.AI",
        "description": "AI 기술을 활용한 혁신적인 웹 개발 서비스. Next.js, React 전문가가 3배 빠른 속도로 완벽한 품질의 웹사이트를 제작합니다.",
        "url": "https://developer-portfolio-seven-rust.vercel.app",
        "sameAs": [],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": "Korean",
          "email": "highwoong@gmail.com",
          "telephone": "+82-10-1234-5678"
        },
        "areaServed": "KR",
        "serviceType": ["웹사이트 개발", "AI 웹개발", "홈페이지 제작", "Next.js 개발", "React 개발"]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://developer-portfolio-seven-rust.vercel.app/#localbusiness",
        "name": "WMT.AI",
        "description": "AI 기반 웹 개발 전문 서비스",
        "url": "https://developer-portfolio-seven-rust.vercel.app",
        "serviceArea": "대한민국",
        "priceRange": "100만원-500만원",
        "paymentAccepted": "현금, 계좌이체",
        "currenciesAccepted": "KRW"
      },
      {
        "@type": "WebSite",
        "@id": "https://developer-portfolio-seven-rust.vercel.app/#website",
        "name": "WMT.AI - 차세대 AI 웹개발자",
        "description": "AI 기술로 3배 빠른 웹 개발, 완벽한 품질의 홈페이지를 제작합니다",
        "url": "https://developer-portfolio-seven-rust.vercel.app",
        "inLanguage": "ko-KR",
        "publisher": {
          "@id": "https://developer-portfolio-seven-rust.vercel.app/#organization"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        {/* Floating Particles */}
        {isClient &&
          [...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
      </div>

      {/* Header */}
      <motion.header
        className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-40 border-b border-slate-700"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
            
                <Bot className="w-8 h-8 text-blue-400 mr-2" />
                <a href="/">
                <span className="text-xl font-bold">WMT.AI</span>
                </a>
            </motion.div>

            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="hover:text-blue-400 transition-colors"
              >
                About
              </a>
              <Link
                href="/portfolio"
                className="hover:text-blue-400 transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
            </nav>
            <Link href="/contact">
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Us
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center bg-slate-800 px-4 py-2 rounded-full mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
                <span className="text-sm text-gray-300">
                  AI-Powered Development
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <div className="text-white">차세대</div>
                <div className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  <TypewriterText text="AI 웹개발자" delay={1000} />
                </div>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                인공지능과 함께하는 혁신적인 웹 개발로
                <br />
                <span className="text-blue-400 font-semibold">
                  3배 빠른 속도
                </span>
                와
                <span className="text-purple-400 font-semibold">
                  {" "}
                  완벽한 품질
                </span>
                을 제공합니다
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact">
                  <motion.button
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    프로젝트 상담
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.button>
                </Link>
                <Link href="/portfolio">
                  <motion.button
                    className="border border-gray-600 hover:border-blue-400 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    포트폴리오 보기
                  </motion.button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">3x</div>
                  <div className="text-sm text-gray-400">빠른 개발</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">100%</div>
                  <div className="text-sm text-gray-400">AI 활용</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">24/7</div>
                  <div className="text-sm text-gray-400">지원</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Terminal Window */}
              <div className="bg-slate-800 rounded-lg shadow-2xl overflow-hidden">
                <div className="flex items-center bg-slate-700 px-4 py-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="ml-4 text-gray-400 text-sm">
                    AI-Powered Development
                  </div>
                </div>

                <div className="p-6 font-mono text-sm">
                  <div className="text-green-400">
                    $ ai-dev --create website --type="dental-clinic"
                  </div>
                  <div className="text-gray-400 mt-2">
                    ✓ Analyzing requirements...
                  </div>
                  <div className="text-gray-400">
                    ✓ Generating components...
                  </div>
                  <div className="text-gray-400">✓ Optimizing for SEO...</div>
                  <div className="text-gray-400">
                    ✓ Adding responsive design...
                  </div>
                  <div className="text-blue-400 mt-3">
                    Website created in 2.3 seconds! 🚀
                  </div>

                  <motion.div
                    className="mt-4 p-4 bg-slate-700 rounded"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                  >
                    <div className="text-purple-400">
                      Performance Score: 98/100
                    </div>
                    <div className="text-green-400">SEO Score: 95/100</div>
                    <div className="text-blue-400">Accessibility: 100/100</div>
                  </motion.div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 bg-blue-600 p-4 rounded-lg shadow-lg"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Brain className="w-8 h-8" />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-purple-600 p-4 rounded-lg shadow-lg"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Rocket className="w-8 h-8" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </section>

      {/* AI Technology Stack */}
      <section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI로 <span className="text-blue-400">혁신하는</span> 개발 프로세스
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              최첨단 AI 도구와 전문 개발 경험을 결합하여 더 빠르고 정확한
              웹사이트를 제작합니다
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                icon: Brain,
                title: "AI 기획",
                description:
                  "Claude, ChatGPT로 사용자 요구사항을 정확히 분석하고 최적의 설계 제안",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Code2,
                title: "AI 코딩",
                description:
                  "GitHub Copilot, Cursor로 고품질 코드를 3배 빠른 속도로 작성",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Search,
                title: "AI SEO",
                description:
                  "AI 분석으로 검색 최적화된 콘텐츠와 메타태그 자동 생성",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Zap,
                title: "AI 최적화",
                description: "성능, 보안, 접근성을 AI로 자동 검사하고 최적화",
                color: "from-yellow-500 to-orange-500",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative group"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{
                    backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  }}
                ></div>

                <div className="relative bg-slate-800 p-8 rounded-lg border border-slate-700 group-hover:border-slate-600 transition-colors">
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${item.color} mb-4`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Speed Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              기존 개발 vs <span className="text-blue-400">AI 개발</span>
            </h2>
            <p className="text-xl text-gray-300">
              같은 프로젝트, 확연히 다른 속도와 품질
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Traditional Development */}
            <motion.div
              className="bg-slate-800 p-8 rounded-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-red-400">
                기존 개발 방식
              </h3>
              <div className="space-y-4">
                {[
                  { task: "요구사항 분석", time: "1주", icon: Clock },
                  { task: "디자인 작업", time: "2주", icon: Monitor },
                  { task: "코딩 작업", time: "4주", icon: Code2 },
                  { task: "테스트 & 수정", time: "1주", icon: CheckCircle },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-slate-700 rounded-lg"
                  >
                    <div className="flex items-center">
                      <item.icon className="w-5 h-5 text-gray-400 mr-3" />
                      <span className="text-gray-300">{item.task}</span>
                    </div>
                    <span className="text-red-400 font-semibold">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-red-900/20 border border-red-800 rounded-lg">
                <div className="text-red-400 font-bold text-xl">
                  총 소요시간: 8주
                </div>
                <div className="text-gray-300 text-sm">
                  예상 비용: 300-500만원
                </div>
              </div>
            </motion.div>

            {/* AI Development */}
            <motion.div
              className="bg-slate-800 p-8 rounded-lg relative overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
              <div className="relative">
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                  AI 기반 개발
                </h3>
                <div className="space-y-4">
                  {[
                    { task: "AI 요구사항 분석", time: "1일", icon: Brain },
                    { task: "AI 디자인 생성", time: "2일", icon: Sparkles },
                    { task: "AI 코딩 지원", time: "1주", icon: Rocket },
                    { task: "자동 테스트", time: "1일", icon: Zap },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-4 bg-slate-700 rounded-lg border border-blue-800/50"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center">
                        <item.icon className="w-5 h-5 text-blue-400 mr-3" />
                        <span className="text-gray-300">{item.task}</span>
                      </div>
                      <span className="text-green-400 font-semibold">
                        {item.time}
                      </span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-green-900/20 border border-green-800 rounded-lg">
                  <div className="text-green-400 font-bold text-xl">
                    총 소요시간: 1.5주
                  </div>
                  <div className="text-gray-300 text-sm">
                    예상 비용: 80-200만원
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Benefits */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 px-8 py-4 rounded-full">
              <Zap className="w-6 h-6 mr-3" />
              <span className="text-xl font-semibold">
                80% 시간 단축, 50% 비용 절약
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

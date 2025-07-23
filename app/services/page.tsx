// app/services/page.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft,
  Bot,
  Code2,
  Smartphone,
  Search,
  Zap,
  Shield,
  Clock,
  DollarSign,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Settings,
  Palette,
  Globe,
  Database,
  Monitor,
  Headphones,
  Heart,
  Scale,
  Calculator,
  Building,
  FileText,
  MessageCircle,
  ArrowRight
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

const mainServices = [
  {
    id: 'web-development',
    title: 'AI 기반 웹사이트 개발',
    subtitle: '혁신적인 AI 도구로 3배 빠른 개발',
    icon: Code2,
    color: 'from-blue-600 to-cyan-600',
    description: '최신 AI 기술을 활용하여 기존보다 3배 빠른 속도로 고품질 웹사이트를 개발합니다.',
    features: [
      'Next.js 기반 최신 기술 스택',
      'AI 코드 생성 및 최적화',
      '완전 반응형 디자인',
      'SEO 최적화 기본 포함',
      '성능 최적화 자동 적용',
      '크로스 브라우저 호환성'
    ],
    pricing: {
      basic: '80만원~',
      premium: '200만원~',
      enterprise: '맞춤 견적'
    },
    deliverables: [
      '완성된 웹사이트',
      '모바일 최적화',
      '기본 SEO 설정',
      '3개월 무료 수정',
      '사용 가이드',
      '소스코드 제공'
    ]
  },
  {
    id: 'ai-optimization',
    title: 'AI SEO 최적화',
    subtitle: '검색 1페이지 노출을 위한 전문 서비스',
    icon: Search,
    color: 'from-green-600 to-emerald-600',
    description: 'AI 분석을 통한 키워드 연구, 콘텐츠 최적화, 기술적 SEO까지 종합적인 검색 최적화 서비스입니다.',
    features: [
      'AI 키워드 분석 및 전략',
      '페이지별 메타태그 최적화',
      '구조화된 데이터 마크업',
      '사이트맵 자동 생성',
      '페이지 속도 최적화',
      '검색엔진 등록 및 관리'
    ],
    pricing: {
      basic: '30만원~',
      premium: '80만원~',
      enterprise: '맞춤 견적'
    },
    deliverables: [
      'SEO 분석 보고서',
      '키워드 전략 문서',
      '최적화된 콘텐츠',
      '기술적 SEO 구현',
      '월간 성과 리포트',
      '지속적인 모니터링'
    ]
  },
  {
    id: 'maintenance',
    title: '웹사이트 유지보수',
    subtitle: '안정적인 운영을 위한 지속적인 관리',
    icon: Settings,
    color: 'from-purple-600 to-pink-600',
    description: '웹사이트 업데이트, 보안 관리, 성능 모니터링까지 전문적인 유지보수 서비스를 제공합니다.',
    features: [
      '정기 백업 및 복구',
      '보안 업데이트 적용',
      '성능 모니터링',
      '콘텐츠 업데이트',
      '기술 지원 및 상담',
      '긴급 상황 대응'
    ],
    pricing: {
      basic: '월 5만원',
      premium: '월 15만원',
      enterprise: '맞춤 견적'
    },
    deliverables: [
      '24/7 모니터링',
      '월간 성과 보고서',
      '무제한 기술 지원',
      '긴급 상황 대응',
      '정기 백업 서비스',
      '보안 상태 점검'
    ]
  }
];

const specializationServices = [
  {
    title: '병원/치과 전문 개발',
    icon: Heart,
    color: 'from-teal-500 to-cyan-500',
    description: '의료 분야 특화 기능과 디자인',
    features: ['예약 시스템', '환자 관리', '의료진 소개', '진료과목 안내']
  },
  {
    title: '법무법인 전문 개발',
    icon: Scale,
    color: 'from-slate-600 to-gray-700',
    description: '법률 서비스 특화 웹사이트',
    features: ['상담 예약', '전문분야 소개', '성공사례', '법률 정보']
  },
  {
    title: '일반 기업 홈페이지',
    icon: Building,
    color: 'from-purple-600 to-pink-600',
    description: '모든 업종 적용 가능한 범용 웹사이트',
    features: ['회사 소개', '제품 안내', '포트폴리오', '문의 시스템']
  }
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '80만원',
    description: '소규모 비즈니스에 적합한 기본 패키지',
    features: [
      '5페이지 웹사이트',
      '반응형 디자인',
      '기본 SEO 설정',
      '문의 폼',
      '3개월 무료 수정',
      '기본 유지보수 가이드'
    ],
    color: 'border-slate-600',
    popular: false
  },
  {
    name: 'Professional',
    price: '200만원',
    description: '중소기업과 전문직에 최적화된 패키지',
    features: [
      '10페이지 웹사이트',
      '반응형 디자인',
      '고급 SEO 최적화',
      '예약/상담 시스템',
      '관리자 패널',
      '6개월 무료 수정',
      '월 1회 무료 업데이트',
      '성능 분석 리포트'
    ],
    color: 'border-blue-500',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '맞춤 견적',
    description: '대규모 프로젝트와 특수 요구사항',
    features: [
      '무제한 페이지',
      '완전 맞춤 개발',
      '고급 기능 구현',
      '전용 데이터베이스',
      'API 연동',
      '1년 무료 수정',
      '전담 개발자 배정',
      '24/7 기술 지원'
    ],
    color: 'border-purple-500',
    popular: false
  }
];

const addOnServices = [
  {
    title: 'AI 콘텐츠 생성',
    price: '20만원~',
    description: 'AI로 생성하는 고품질 웹사이트 콘텐츠',
    icon: FileText
  },
  {
    title: '도메인 & 호스팅 설정',
    price: '10만원',
    description: '도메인 구매부터 호스팅 설정까지',
    icon: Globe
  },
  {
    title: '소셜미디어 연동',
    price: '15만원',
    description: '인스타그램, 페이스북 등 SNS 연동',
    icon: MessageCircle
  },
  {
    title: '고급 애니메이션',
    price: '30만원~',
    description: '브랜드 이미지 향상을 위한 특별 애니메이션',
    icon: Zap
  },
  {
    title: '다국어 지원',
    price: '50만원~',
    description: '영어, 중국어 등 다국어 웹사이트',
    icon: Globe
  },
  {
    title: '전용 챗봇',
    price: '40만원~',
    description: 'AI 기반 고객 상담 챗봇 시스템',
    icon: Bot
  }
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(0);

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
            <h1 className="text-xl font-bold">Services</h1>
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
              <span className="text-sm text-gray-300">AI-Powered Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              전문 <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">서비스</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              AI 기술을 활용한 혁신적인 웹 개발 서비스로<br />
              <span className="text-blue-400">더 빠르고, 더 완성도 높은</span> 결과를 제공합니다.
            </p>

            {/* Service Stats */}
            <div className="flex justify-center space-x-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">3x</div>
                <div className="text-sm text-gray-400">빠른 개발</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">50%</div>
                <div className="text-sm text-gray-400">비용 절약</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">100%</div>
                <div className="text-sm text-gray-400">만족도</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              핵심 <span className="text-blue-400">서비스</span>
            </h2>
            <p className="text-xl text-gray-300">
              AI 기술을 활용한 전문적인 웹 개발 서비스
            </p>
          </motion.div>

          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex items-center bg-gradient-to-r ${service.color} p-3 rounded-lg mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-xl text-blue-400 mb-6">{service.subtitle}</p>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">{service.description}</p>

                  {/* Features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center space-x-6 mb-8">
                    <div className="text-center">
                      <div className="text-sm text-gray-400">Basic</div>
                      <div className="text-lg font-bold text-blue-400">{service.pricing.basic}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-400">Premium</div>
                      <div className="text-lg font-bold text-purple-400">{service.pricing.premium}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-400">Enterprise</div>
                      <div className="text-lg font-bold text-green-400">{service.pricing.enterprise}</div>
                    </div>
                  </div>

                  <Link href="/contact">
                    <motion.button 
                      className={`bg-gradient-to-r ${service.color} text-white px-8 py-4 rounded-lg font-semibold flex items-center hover:shadow-lg transition-all`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      상담 신청하기
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.button>
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
                    <h4 className="text-lg font-semibold text-white mb-6">포함 서비스</h4>
                    <div className="space-y-4">
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                          <span className="text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg border border-blue-600/30">
                      <div className="flex items-center text-blue-400 text-sm font-semibold mb-2">
                        <Zap className="w-4 h-4 mr-2" />
                        AI 특별 혜택
                      </div>
                      <p className="text-gray-300 text-sm">
                        AI 기반 개발로 일반 업체 대비 50% 빠른 작업 완료 및 30% 비용 절감
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialization Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              업종별 <span className="text-blue-400">전문 서비스</span>
            </h2>
            <p className="text-xl text-gray-300">
              각 업종의 특성에 맞춘 맞춤형 웹사이트 개발
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {specializationServices.map((service, index) => (
              <motion.div
                key={index}
                className="group"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 group-hover:border-slate-600 transition-all duration-300 h-full">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-400">
                        <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-700">
                    <Link href="/contact">
                      <button className="w-full text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors">
                        자세히 보기 →
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
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
              투명한 <span className="text-blue-400">가격 정책</span>
            </h2>
            <p className="text-xl text-gray-300">
              프로젝트 규모에 맞는 합리적인 패키지
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative bg-slate-800 rounded-xl p-8 border-2 ${plan.color} ${
                  plan.popular ? 'scale-105' : ''
                } transition-all duration-300`}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-blue-400 mb-4">{plan.price}</div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact">
                  <motion.button 
                    className={`w-full py-4 rounded-lg font-semibold transition-colors ${
                      plan.popular 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'border border-slate-600 hover:border-blue-600 text-white hover:text-blue-400'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    시작하기
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              추가 <span className="text-blue-400">서비스</span>
            </h2>
            <p className="text-xl text-gray-300">
              웹사이트를 더욱 특별하게 만드는 선택 서비스
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {addOnServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <service.icon className="w-8 h-8 text-blue-400" />
                  <span className="text-green-400 font-semibold">{service.price}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-600/30 rounded-xl p-12">
              <Bot className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                AI 기반 웹 개발을 경험해보세요
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                무료 상담을 통해 프로젝트에 맞는 최적의 솔루션을 제안해드립니다
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    무료 상담 신청
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.button>
                </Link>
                <Link href="/portfolio">
                  <motion.button 
                    className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    포트폴리오 보기
                  </motion.button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">24시간</div>
                  <div className="text-sm text-gray-400">응답 보장</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">1-3주</div>
                  <div className="text-sm text-gray-400">개발 완료</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">3개월</div>
                  <div className="text-sm text-gray-400">무료 수정</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
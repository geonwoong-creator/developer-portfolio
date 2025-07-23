// app/contact/page.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Send, 
  Phone, 
  Mail, 
  MessageCircle, 
  Calendar,
  Clock,
  CheckCircle,
  Users,
  Bot,
  Zap,
  DollarSign,
  FileText,
  Shield,
  Star,
  Building,
  Heart,
  Scale,
  Calculator,
  Briefcase
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



const projectTypes = [
  {
    id: 'medical',
    title: '병원/치과 홈페이지',
    icon: Heart,
    color: 'from-teal-500 to-cyan-500',
    price: '150-300만원',
    period: '1-2주',
    features: [
      '예약 시스템',
      '진료과목 상세페이지',
      '의료진 소개',
      '환자 후기',
      'SEO 최적화',
      '모바일 최적화'
    ],
    suitable: ['치과', '내과', '피부과', '정형외과', '한의원']
  },
  {
    id: 'legal',
    title: '법무법인 홈페이지',
    icon: Scale,
    color: 'from-slate-600 to-gray-700',
    price: '200-400만원',
    period: '1.5-2.5주',
    features: [
      '상담 예약 시스템',
      '전문분야별 페이지',
      '변호사 소개',
      '성공사례',
      '법률 정보',
      '다국어 지원'
    ],
    suitable: ['법무법인', '개인 변호사', '법률 사무소']
  },
  {
    id: 'business',
    title: '일반 기업 홈페이지',
    icon: Building,
    color: 'from-purple-600 to-pink-600',
    price: '80-200만원',
    period: '1-2주',
    features: [
      '회사 소개',
      '제품/서비스 안내',
      '포트폴리오',
      '문의 시스템',
      '뉴스/공지',
      '채용 정보'
    ],
    suitable: ['스타트업', '중소기업', '개인 사업']
  }
];

const consultationSteps = [
  {
    step: 1,
    title: '요구사항 상담',
    description: 'AI 분석을 통한 정확한 요구사항 파악 및 최적 솔루션 제안',
    duration: '30분',
    icon: MessageCircle
  },
  {
    step: 2,
    title: '견적 및 일정',
    description: '프로젝트 범위에 따른 정확한 견적과 개발 일정 안내',
    duration: '즉시',
    icon: FileText
  },
  {
    step: 3,
    title: 'AI 기반 개발',
    description: '최신 AI 도구를 활용한 빠르고 정확한 개발 진행',
    duration: '1-3주',
    icon: Bot
  },
  {
    step: 4,
    title: '배포 및 완료',
    description: 'Vercel 배포, 도메인 연결, 사용법 교육까지 완벽 마무리',
    duration: '1일',
    icon: CheckCircle
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    features: [] as string[],
    preferredContact: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFeatureToggle = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch('https://script.google.com/macros/s/AKfycbxoMRAwQxy3haQ_IEyaUy7_dNqcGOV_6BDlQ9_8Y5bktwsEibcxDaaDTXCwkVUe6vDB/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
  
      // no-cors 모드에서는 항상 성공으로 간주
      alert('상담 신청이 완료되었습니다! 24시간 내 연락드리겠습니다.');
      
      // 폼 초기화
      setFormData({
        name: '', email: '', phone: '', company: '', 
        projectType: '', budget: '', timeline: '', 
        description: '', features: [], preferredContact: 'email'
      });
      
    } catch (error) {
      // 실제 네트워크 에러일 때만 실행
      alert('전송 중 오류가 발생했습니다. 직접 연락 부탁드립니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedProjectType = projectTypes.find(type => type.id === formData.projectType);

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
            <h1 className="text-xl font-bold">Project Consultation</h1>
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
              <span className="text-sm text-gray-300">AI-Powered Consultation</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              프로젝트 <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">상담 신청</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              AI 기반 개발로 더 빠르고 완성도 높은 웹사이트를 만들어드립니다.<br />
              <span className="text-blue-400">무료 상담</span>을 통해 맞춤 솔루션을 제안해드려요.
            </p>

            {/* Quick Stats */}
            <div className="flex justify-center space-x-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">24시간</div>
                <div className="text-sm text-gray-400">응답 시간</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">50%</div>
                <div className="text-sm text-gray-400">비용 절약</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">3배</div>
                <div className="text-sm text-gray-400">빠른 개발</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Types */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              프로젝트 <span className="text-blue-400">타입별 견적</span>
            </h2>
            <p className="text-xl text-gray-300">
              어떤 종류의 웹사이트가 필요하신가요?
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {projectTypes.map((type, index) => (
              <motion.div
                key={type.id}
                className="group cursor-pointer"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="bg-slate-800 rounded-xl border border-slate-700 group-hover:border-slate-600 transition-all duration-300 overflow-hidden">
                  <div className={`h-24 bg-gradient-to-br ${type.color} flex items-center justify-center`}>
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">{type.title}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">견적</span>
                        <span className="text-blue-400 font-semibold">{type.price}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">기간</span>
                        <span className="text-green-400 font-semibold">{type.period}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">주요 기능</h4>
                      <div className="space-y-1">
                        {type.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-300">
                            <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                        {type.features.length > 3 && (
                          <div className="text-xs text-gray-400">+{type.features.length - 3}개 더</div>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">적합한 업종</h4>
                      <div className="flex flex-wrap gap-1">
                        {type.suitable.slice(0, 2).map((item, idx) => (
                          <span key={idx} className="text-xs bg-slate-700 text-gray-300 px-2 py-1 rounded">
                            {item}
                          </span>
                        ))}
                        {type.suitable.length > 2 && (
                          <span className="text-xs text-gray-400">+{type.suitable.length - 2}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              상담 <span className="text-blue-400">프로세스</span>
            </h2>
            <p className="text-xl text-gray-300">
              체계적인 상담을 통해 최적의 솔루션을 제공합니다
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {consultationSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center relative"
                variants={fadeInUp}
              >
                <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-blue-400 text-sm font-semibold mb-1">STEP {step.step}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-center text-xs text-green-400">
                    <Clock className="w-3 h-3 mr-1" />
                    {step.duration}
                  </div>
                </div>

                {/* Connection Line */}
                {index < consultationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-slate-600"></div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              상담 <span className="text-blue-400">신청하기</span>
            </h2>
            <p className="text-xl text-gray-300">
              프로젝트에 대해 자세히 알려주세요. 24시간 내 연락드리겠습니다.
            </p>
          </motion.div>

          <motion.div
            className="bg-slate-800 rounded-xl p-8 border border-slate-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    이름 *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="홍길동"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    회사/기관명
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="테스트 치과"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="contact@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="010-1234-5678"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    프로젝트 타입 *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="">선택해주세요</option>
                    {projectTypes.map(type => (
                      <option key={type.id} value={type.id}>{type.title}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    예산 범위
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="">선택해주세요</option>
                    <option value="50-100">50-100만원</option>
                    <option value="100-200">100-200만원</option>
                    <option value="200-300">200-300만원</option>
                    <option value="300-500">300-500만원</option>
                    <option value="500+">500만원 이상</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  희망 완료 시기
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="">선택해주세요</option>
                  <option value="asap">최대한 빠르게</option>
                  <option value="1week">1주 이내</option>
                  <option value="2weeks">2주 이내</option>
                  <option value="1month">1개월 이내</option>
                  <option value="flexible">일정 협의 가능</option>
                </select>
              </div>

              {/* Features */}
              {selectedProjectType && (
                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    필요한 기능 (복수 선택 가능)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {selectedProjectType.features.map((feature, idx) => (
                      <label key={idx} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.features.includes(feature)}
                          onChange={() => handleFeatureToggle(feature)}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 border-2 rounded mr-3 flex items-center justify-center ${
                          formData.features.includes(feature)
                            ? 'bg-blue-600 border-blue-600'
                            : 'border-slate-600'
                        }`}>
                          {formData.features.includes(feature) && (
                            <CheckCircle className="w-3 h-3 text-white" />
                          )}
                        </div>
                        <span className="text-sm text-gray-300">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  프로젝트 상세 설명
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="어떤 웹사이트를 원하시는지 자세히 설명해주세요. 참고할 사이트가 있다면 URL도 함께 알려주세요."
                />
              </div>

              {/* Preferred Contact */}
              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  선호하는 연락 방법
                </label>
                <div className="flex space-x-6">
                  {[
                    { value: 'email', label: '이메일', icon: Mail },
                    { value: 'phone', label: '전화', icon: Phone },
                    { value: 'kakao', label: '카카오톡', icon: MessageCircle }
                  ].map((method) => (
                    <label key={method.value} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value={method.value}
                        checked={formData.preferredContact === method.value}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 border-2 rounded-full mr-3 flex items-center justify-center ${
                        formData.preferredContact === method.value
                          ? 'bg-blue-600 border-blue-600'
                          : 'border-slate-600'
                      }`}>
                        {formData.preferredContact === method.value && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <method.icon className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-sm text-gray-300">{method.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center transition-all duration-200"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      상담 신청 중...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      무료 상담 신청하기
                    </>
                  )}
                </motion.button>
                
                <p className="text-center text-sm text-gray-400 mt-4">
                  상담 신청 후 24시간 내 연락드립니다. 급한 경우 직접 연락 주세요.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Direct Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              직접 <span className="text-blue-400">연락하기</span>
            </h2>
            <p className="text-xl text-gray-300">
              급한 프로젝트나 즉시 상담이 필요하시면 바로 연락해주세요
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                icon: Phone,
                title: '전화 상담',
                info: '010-1234-5678',
                description: '평일 9:00-18:00 즉시 상담 가능',
                action: 'tel:010-1234-5678',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: Mail,
                title: '이메일 문의',
                info: 'contact@example.com',
                description: '24시간 내 답변 보장',
                action: 'mailto:contact@example.com',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: MessageCircle,
                title: '카카오톡 상담',
                info: '@developer_id',
                description: '실시간 채팅 상담',
                action: '#',
                color: 'from-yellow-500 to-orange-500'
              }
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.action}
                className="group"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 group-hover:border-slate-600 transition-all duration-300 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <contact.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">{contact.title}</h3>
                  <div className="text-blue-400 font-semibold mb-3">{contact.info}</div>
                  <p className="text-gray-300 text-sm">{contact.description}</p>
                  
                  <div className="mt-4 text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors">
                    바로 연락하기 →
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div 
            className="mt-12 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-600/20 rounded-xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center">
              <Bot className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                AI 기반 빠른 견적 시스템
              </h3>
              <p className="text-gray-300 mb-6">
                요구사항을 말씀해주시면 AI 분석을 통해 <span className="text-blue-400">10분 내</span> 정확한 견적과 
                개발 일정을 제공해드립니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center">
                  <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-sm text-gray-300">10분 내 견적</span>
                </div>
                <div className="flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-sm text-gray-300">100% 보안 상담</span>
                </div>
                <div className="flex items-center justify-center">
                  <Star className="w-5 h-5 text-purple-400 mr-2" />
                  <span className="text-sm text-gray-300">맞춤 솔루션 제안</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              자주 묻는 <span className="text-blue-400">질문</span>
            </h2>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                question: 'AI 개발이 기존 개발과 어떻게 다른가요?',
                answer: 'AI 도구를 활용하여 반복적인 코딩 작업을 자동화하고, 더 정확한 요구사항 분석과 최적화된 코드 생성이 가능합니다. 결과적으로 개발 시간은 50-70% 단축되면서도 품질은 더욱 향상됩니다.'
              },
              {
                question: '개발 기간이 정말 1-2주면 가능한가요?',
                answer: '네, AI 기반 개발 워크플로우를 통해 기존 1-2개월 작업을 1-2주로 단축합니다. 단, 프로젝트 규모와 복잡도에 따라 조정될 수 있으며, 상담 시 정확한 일정을 안내해드립니다.'
              },
              {
                question: '월 사용료나 유지비용이 있나요?',
                answer: '기본적으로 월 사용료는 없습니다. 도메인 비용(연 2-3만원)과 호스팅 비용(월 0-3만원)만 있으며, 선택사항으로 월 유지보수 서비스(월 5-10만원)를 제공합니다.'
              },
              {
                question: '완성 후 수정이나 추가 기능이 필요하면 어떻게 하나요?',
                answer: '완성 후 3개월간 무료 수정 서비스를 제공하며, 추가 기능이나 대규모 수정은 별도 견적을 드립니다. AI 개발 특성상 추가 작업도 빠르고 저렴하게 가능합니다.'
              },
              {
                question: '어떤 종류의 웹사이트까지 제작 가능한가요?',
                answer: '병원, 법무법인, 세무사무소 등 지역 비즈니스부터 쇼핑몰, 포트폴리오, 기업 사이트까지 대부분의 웹사이트 제작이 가능합니다. 복잡한 기능이 필요한 경우 상담을 통해 가능 여부를 확인해드립니다.'
              },
              {
                question: 'SEO 최적화나 검색 노출은 어떻게 되나요?',
                answer: '모든 웹사이트에 기본 SEO 최적화를 포함하며, 추가로 구글/네이버 등록, 키워드 최적화, 콘텐츠 최적화 서비스도 제공합니다. 지역 비즈니스의 경우 지역 SEO 특화 서비스를 제공합니다.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 rounded-lg p-6 border border-slate-700"
                variants={fadeInUp}
              >
                <h3 className="text-lg font-semibold text-white mb-3">
                  Q. {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  A. {faq.answer}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
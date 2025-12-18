export default function FeatureCards() {
  const features = [
    {
      icon: '🎨',
      title: '완벽한 스펙',
      description: '색상, 타이포그래피, 레이아웃, 컴포넌트 모두 포함'
    },
    {
      icon: '⚡',
      title: '즉시 적용',
      description: 'Tailwind 클래스 스니펫으로 바로 사용 가능'
    },
    {
      icon: '♿',
      title: '접근성',
      description: 'WCAG 2.1 AA/AAA 기준 준수'
    },
    {
      icon: '📊',
      title: '변화 요약',
      description: '업종별 디자인 결정 이유 설명'
    }
  ]

  return (
    <div id="features" className="grid md:grid-cols-4 gap-6 mt-12">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="text-4xl mb-3">{feature.icon}</div>
          <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
          <p className="text-sm text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}

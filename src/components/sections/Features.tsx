import { Bot, Zap, Users, Target, Shield, Clock } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'AI-Powered Matching',
    description: 'Advanced algorithms match candidates to roles based on skills, experience, and culture fit.'
  },
  {
    icon: Zap,
    title: 'Automated Screening',
    description: 'Save time with intelligent pre-screening and skill assessments.'
  },
  {
    icon: Users,
    title: 'Talent Insights',
    description: 'Deep analytics and insights into your talent pool and hiring process.'
  },
  {
    icon: Target,
    title: 'Precision Hiring',
    description: 'Find candidates that perfectly match your technical requirements and team culture.'
  },
  {
    icon: Shield,
    title: 'Bias Prevention',
    description: 'AI-driven screening that helps eliminate unconscious bias in the hiring process.'
  },
  {
    icon: Clock,
    title: 'Time Optimization',
    description: 'Reduce time-to-hire by up to 50% with automated workflows and intelligent matching.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful Features for Modern Recruitment
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Everything you need to streamline your technical hiring process and find the best talent.
          </p>
        </div>
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
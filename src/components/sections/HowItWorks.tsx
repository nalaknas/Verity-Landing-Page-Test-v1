import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Define Your Needs',
    description: 'Specify your requirements, tech stack, and team culture preferences.'
  },
  {
    number: '02',
    title: 'AI Matching',
    description: 'Our AI analyzes your requirements and matches them with the best candidates.'
  },
  {
    number: '03',
    title: 'Automated Screening',
    description: 'Candidates are automatically screened through technical assessments.'
  },
  {
    number: '04',
    title: 'Interview & Hire',
    description: 'Connect with top matches and make your final hiring decision.'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            A simple, streamlined process to find your perfect technical candidates.
          </p>
        </div>
        <div className="mt-16">
          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden md:block">
                    <ArrowRight className="h-6 w-6 text-gray-300" />
                  </div>
                )}
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <div className="text-xl font-bold text-blue-600">{step.number}</div>
                  <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
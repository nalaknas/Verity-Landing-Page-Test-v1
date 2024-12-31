import { CheckCircle } from 'lucide-react';

const benefits = [
  {
    title: 'Data-Driven Decisions',
    description: 'Make informed hiring decisions based on comprehensive candidate analytics and performance metrics.'
  },
  {
    title: 'Seamless Integration',
    description: 'Easily integrate with your existing HR tools and ATS systems for a unified workflow.'
  },
  {
    title: 'Cost Effective',
    description: 'Reduce hiring costs by up to 40% through automation and improved candidate matching.'
  },
  {
    title: 'Scalable Solution',
    description: "Whether you're hiring 5 or 500 developers, our platform scales with your needs."
  }
];

export function WhyVerity() {
  return (
    <section id="why-verity" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Verity?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We're revolutionizing technical recruitment with AI-powered solutions that save time, reduce costs, and help you find the perfect candidates.
            </p>
            <div className="mt-8">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="mt-12 lg:col-span-7 lg:mt-0">
            <div className="grid gap-8 md:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <CheckCircle className="h-6 w-6 flex-shrink-0 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                    <p className="mt-2 text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
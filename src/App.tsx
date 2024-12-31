import { Toaster } from 'sonner';
import { Navigation } from './components/Navigation';
import { WaitlistForm } from './components/WaitlistForm';
import { Features } from './components/sections/Features';
import { WhyVerity } from './components/sections/WhyVerity';
import { HowItWorks } from './components/sections/HowItWorks';
import { Testimonials } from './components/sections/Testimonials';
import { TrustedBy } from './components/sections/TrustedBy';
import { Brain } from 'lucide-react';

export default function App() {
  return (
    <>
      <Toaster position="top-center" />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-32 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:40px] bg-[position:center] opacity-20" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px] bg-[position:center] opacity-20" />
          </div>
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12">
                <Brain className="h-24 w-24 text-primary-600 animate-float opacity-10" />
              </div>
              
              <h1 className="text-7xl font-bold tracking-tight text-gray-900 mb-6">
                <span className="gradient-text">Verity</span>
              </h1>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                AI-Powered Tech Recruitment
                <span className="block text-primary-600 mt-2">Reimagined</span>
              </h2>
              <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-600">
                Transform your tech hiring process with AI-driven insights, precise candidate matching, and 
                automated skill assessment. Find the perfect tech talent faster than ever.
              </p>
              
              <div className="mt-24 flex justify-center space-x-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600">500+</div>
                  <div className="mt-2 text-sm text-gray-600">Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600">50k+</div>
                  <div className="mt-2 text-sm text-gray-600">Developers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600">98%</div>
                  <div className="mt-2 text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Features />
        <WhyVerity />
        <HowItWorks />
        <Testimonials />
        <TrustedBy />

        {/* Waitlist Section */}
        <section className="relative py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Join the Future of Tech Recruitment
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
                Be among the first to experience the next generation of AI-powered recruitment. 
                Join our waitlist today.
              </p>
              <div className="mt-10 flex justify-center">
                <WaitlistForm />
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t bg-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <div className="flex items-center space-x-2">
                <Brain className="h-8 w-8 text-primary-600" />
                <span className="font-semibold">Verity</span>
              </div>
              <p className="mt-4 text-sm text-gray-600 md:mt-0">
                © {new Date().getFullYear()} Verity. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
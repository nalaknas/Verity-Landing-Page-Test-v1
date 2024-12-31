import { Brain } from 'lucide-react';
import { Link } from './Link';

export function Navigation() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button 
          onClick={scrollToTop}
          className="flex items-center space-x-2 transition-opacity hover:opacity-80"
          aria-label="Scroll to top"
        >
          <Brain className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold">Verity</span>
        </button>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li><Link href="#features">Features</Link></li>
            <li><Link href="#why-verity">Why Verity</Link></li>
            <li><Link href="#how-it-works">How it Works</Link></li>
            <li><Link href="#testimonials">Testimonials</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
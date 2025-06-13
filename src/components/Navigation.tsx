
import { useEffect, useState } from 'react';
import Logo from './Logo';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 p-6 transition-all duration-300 ${
      scrolled ? 'bg-[#0B0B0F]/90 backdrop-blur-sm' : ''
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        <button className="text-white/80 hover:text-white transition-colors text-sm font-medium">
          Join waitlist →
        </button>
      </div>
    </nav>
  );
};

export default Navigation;

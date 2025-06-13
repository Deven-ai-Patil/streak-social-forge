
import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import ProductIntro from '../components/ProductIntro';
import StreakExamples from '../components/StreakExamples';
import SocialFeed from '../components/SocialFeed';
import FinalCTA from '../components/FinalCTA';
import Navigation from '../components/Navigation';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#0B0B0F] text-white overflow-x-hidden">
      <Navigation />
      <Hero scrollY={scrollY} />
      <ProductIntro />
      <StreakExamples />
      <SocialFeed />
      <FinalCTA />
    </div>
  );
};

export default Index;


import { useEffect, useRef, useState } from 'react';

const FinalCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-gradient-to-t from-[#0B0B0F] to-[#111118]">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Don't build alone.
            <br />
            <span className="text-orange-500">Build with streaks.</span>
          </h2>
          
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join a space where showing up is the only metric that matters.
            No noise. Just focus, community, and compounding effort.
          </p>
          
          <button className="group relative px-12 py-6 bg-orange-500 text-white font-bold text-lg rounded-full hover:bg-orange-400 transition-all duration-300 hover:scale-105">
            <span className="relative z-10">Join the waitlist</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Footer */}
        <div className={`mt-24 pt-12 border-t border-white/10 text-white/50 text-sm ${isVisible ? 'animate-fade-in animation-delay-600' : 'opacity-0'}`}>
          <p>&copy; 2024 FoundrStreak. Built for founders who show up.</p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

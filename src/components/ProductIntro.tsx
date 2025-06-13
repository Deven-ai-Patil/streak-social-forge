
import { useEffect, useRef, useState } from 'react';

const ProductIntro = () => {
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
    <section ref={sectionRef} className="py-32 px-6 bg-gradient-to-b from-[#0B0B0F] to-[#111118]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold">
              What is 
              <span className="text-orange-500"> FoundrStreak</span>?
            </h2>
            
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                FoundrStreak is a system that helps solo founders show up daily through 
                streak tracking, accountability, and community.
              </p>
              <p>
                It's not another productivity app.
              </p>
              <p className="text-orange-500 font-medium">
                It's a reason to keep going.
              </p>
            </div>
          </div>
          
          <div className={`${isVisible ? 'animate-fade-in animation-delay-300' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-2xl blur-xl scale-110"></div>
              <div className="relative bg-[#1A1A20] rounded-2xl p-8 border border-white/10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-white/60">Live streak tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse animation-delay-300"></div>
                    <span className="text-sm text-white/60">Community accountability</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse animation-delay-600"></div>
                    <span className="text-sm text-white/60">Daily momentum</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductIntro;

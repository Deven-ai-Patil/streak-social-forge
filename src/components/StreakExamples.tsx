
import { useEffect, useRef, useState } from 'react';

const StreakExamples = () => {
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

  const examples = [
    {
      id: 1,
      goal: "Reach $1K MRR in 30 days",
      dailyFocus: "Ship new features + cold DMs",
      streak: 23,
      quote: "Didn't want to show up. Showed up anyway.",
      color: "from-blue-500/20 to-blue-600/20",
      border: "border-blue-500/30"
    },
    {
      id: 2,
      goal: "Launch MVP in 14 days", 
      dailyFocus: "Code + write landing copy",
      streak: 12,
      quote: "Pushed live last night. Already got first user!",
      color: "from-purple-500/20 to-purple-600/20",
      border: "border-purple-500/30"
    },
    {
      id: 3,
      goal: "Make first sale",
      dailyFocus: "Build audience + cold email", 
      streak: 17,
      quote: "Finally made the first sale today. This works.",
      color: "from-red-500/20 to-red-600/20",
      border: "border-red-500/30"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-gradient-to-b from-[#111118] to-[#0B0B0F]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Your goal. Your streak.
            <br />
            <span className="text-orange-500">Your timeline.</span>
          </h2>
          
          <p className={`text-xl text-white/70 max-w-3xl mx-auto leading-relaxed ${isVisible ? 'animate-fade-in animation-delay-300' : 'opacity-0'}`}>
            Whether it's $1K MRR in 30 days or launching your MVP in 7, FoundrStreak helps you stay consistent until you get there.
          </p>
        </div>

        {/* Desktop: 3-column layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-16">
          {examples.map((example, index) => (
            <div 
              key={example.id}
              className={`relative bg-[#1A1A20] rounded-2xl p-8 border ${example.border} hover:scale-105 transition-all duration-300 ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${600 + index * 200}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${example.color} rounded-2xl blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1 bg-orange-500/20 px-3 py-1 rounded-full">
                    <span className="text-orange-500 text-sm">🔥</span>
                    <span className="text-orange-500 text-sm font-bold">{example.streak} days</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-white/60 text-sm font-medium">Goal:</span>
                    <p className="text-white font-semibold">{example.goal}</p>
                  </div>
                  
                  <div>
                    <span className="text-white/60 text-sm font-medium">Daily Focus:</span>
                    <p className="text-white/80">{example.dailyFocus}</p>
                  </div>
                  
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-white/90 italic">"{example.quote}"</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="lg:hidden">
          <div className="flex gap-6 overflow-x-auto custom-scrollbar pb-4 mb-16">
            {examples.map((example, index) => (
              <div 
                key={example.id}
                className={`flex-shrink-0 w-80 relative bg-[#1A1A20] rounded-2xl p-8 border ${example.border} ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${600 + index * 200}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${example.color} rounded-2xl blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1 bg-orange-500/20 px-3 py-1 rounded-full">
                      <span className="text-orange-500 text-sm">🔥</span>
                      <span className="text-orange-500 text-sm font-bold">{example.streak} days</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-white/60 text-sm font-medium">Goal:</span>
                      <p className="text-white font-semibold">{example.goal}</p>
                    </div>
                    
                    <div>
                      <span className="text-white/60 text-sm font-medium">Daily Focus:</span>
                      <p className="text-white/80">{example.dailyFocus}</p>
                    </div>
                    
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-white/90 italic">"{example.quote}"</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center ${isVisible ? 'animate-fade-in animation-delay-1200' : 'opacity-0'}`}>
          <p className="text-xl text-white/70 mb-8">
            Set your own streak goal.
            <br />
            Let FoundrStreak keep you accountable.
          </p>
          
          <button className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300">
            <span className="relative z-10">Join the waitlist →</span>
            <div className="absolute inset-0 bg-orange-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StreakExamples;

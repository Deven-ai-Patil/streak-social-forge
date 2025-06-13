
import { useEffect, useRef, useState } from 'react';
import FeedPost from './FeedPost';

const SocialFeed = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const mockPosts = [
    {
      id: 1,
      author: "Sarah Chen",
      handle: "@sarahbuilds",
      time: "2h",
      content: "Day 17: Didn't want to show up. Showed up anyway. Sometimes that's all it takes. 🔥",
      streak: 17,
      avatar: "SC"
    },
    {
      id: 2,
      author: "Marcus Rodriguez",
      handle: "@marcusdev",
      time: "4h",
      content: "Hit 10-day streak today. Feels incredible. The compound effect is real when you just don't break the chain.",
      streak: 10,
      avatar: "MR"
    },
    {
      id: 3,
      author: "Alex Thompson",
      handle: "@alexships",
      time: "6h",
      content: "Slipped yesterday. Back on it today. Let's go. The streak starts now, not tomorrow.",
      streak: 1,
      avatar: "AT"
    },
    {
      id: 4,
      author: "Priya Patel",
      handle: "@priyacodes",
      time: "8h",
      content: "30 days of showing up consistently. My startup feels different now. Momentum is everything.",
      streak: 30,
      avatar: "PP"
    },
    {
      id: 5,
      author: "Jake Wilson",
      handle: "@jakemakes",
      time: "12h",
      content: "The hardest part really isn't the building. It's the showing up when you don't want to. Day 5 ✅",
      streak: 5,
      avatar: "JW"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-[#111118]">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Talk to other founders.
            <span className="text-orange-500"> For free.</span>
            <br />
            Just like X.
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            FoundrStreak includes a built-in scrollable feed where founders post progress, 
            get support, and stay accountable. It looks like Twitter. But it's only for people who show up.
          </p>
        </div>

        <div className={`${isVisible ? 'animate-fade-in animation-delay-300' : 'opacity-0'}`}>
          <div className="relative">
            {/* Feed Container */}
            <div className="bg-[#1A1A20] rounded-2xl border border-white/10 overflow-hidden">
              <div className="p-6 border-b border-white/10">
                <h3 className="font-semibold text-lg">Founder Feed</h3>
                <p className="text-white/60 text-sm">Real updates from real builders</p>
              </div>
              
              <div className="max-h-96 overflow-y-auto custom-scrollbar">
                {mockPosts.map((post, index) => (
                  <FeedPost 
                    key={post.id} 
                    post={post} 
                    delay={index * 100}
                    isVisible={isVisible}
                  />
                ))}
              </div>
            </div>

            {/* Features List */}
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🧵", title: "Scrollable Updates", desc: "Tweet-style progress posts" },
                { icon: "💬", title: "Community Chat", desc: "Reply and support others" },
                { icon: "🔥", title: "Streak Visibility", desc: "Daily check-ins show up" },
                { icon: "✅", title: "Completely Free", desc: "Open to all FoundrStreak users" }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className={`text-center p-6 rounded-xl bg-[#1A1A20] border border-white/10 hover:border-orange-500/30 transition-colors ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  <div className="text-2xl mb-3">{feature.icon}</div>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-white/60 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;

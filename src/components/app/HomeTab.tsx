
import { useState } from 'react';
import { CheckCircle, Users, Calendar } from 'lucide-react';

const HomeTab = () => {
  const [checkedIn, setCheckedIn] = useState(false);
  const currentStreak = 12;

  const posts = [
    {
      id: 1,
      author: "@sarah_builds",
      content: "Day 15: Finally fixed the authentication bug that's been haunting me for 3 days. Sometimes stepping away is the answer.",
      streak: 15,
      time: "2 hours ago"
    },
    {
      id: 2,
      author: "@mike_codes",
      content: "Launched my landing page today! Not perfect but it's live. Progress over perfection 🚀",
      streak: 8,
      time: "4 hours ago"
    },
    {
      id: 3,
      author: "@alex_startup",
      content: "Day 23: Had my first customer call today. They actually want to pay for this thing!",
      streak: 23,
      time: "6 hours ago"
    }
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Streak Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-orange-500/20 px-6 py-3 rounded-full border border-orange-500/30 mb-4">
          <span className="text-2xl">🔥</span>
          <span className="text-orange-500 font-bold text-lg">
            You're on a {currentStreak}-day streak
          </span>
        </div>
        
        {!checkedIn ? (
          <button 
            onClick={() => setCheckedIn(true)}
            className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              <CheckCircle size={20} />
              Check in for today
            </span>
            <div className="absolute inset-0 bg-orange-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
          </button>
        ) : (
          <div className="flex items-center justify-center gap-2 text-green-500 font-semibold">
            <CheckCircle size={20} />
            <span>Checked in for today! 🎉</span>
          </div>
        )}
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-[#1A1A20] rounded-xl p-4 text-center border border-white/10">
          <div className="text-2xl font-bold text-orange-500">{currentStreak}</div>
          <div className="text-sm text-white/60">Current Streak</div>
        </div>
        <div className="bg-[#1A1A20] rounded-xl p-4 text-center border border-white/10">
          <div className="text-2xl font-bold text-blue-500">156</div>
          <div className="text-sm text-white/60">Total Days</div>
        </div>
        <div className="bg-[#1A1A20] rounded-xl p-4 text-center border border-white/10">
          <div className="text-2xl font-bold text-purple-500">89%</div>
          <div className="text-sm text-white/60">Consistency</div>
        </div>
      </div>

      {/* Feed */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Users size={20} />
          Founder Feed
        </h3>
        
        {posts.map((post) => (
          <div key={post.id} className="bg-[#1A1A20] rounded-xl p-4 border border-white/10 hover:border-white/20 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full"></div>
                <div>
                  <span className="font-semibold text-white">{post.author}</span>
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <span className="text-orange-500">🔥 {post.streak} days</span>
                    <span>•</span>
                    <span>{post.time}</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-white/90 leading-relaxed">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeTab;

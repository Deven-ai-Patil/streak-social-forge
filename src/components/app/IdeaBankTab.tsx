
import { useState } from 'react';
import { Plus, TrendingUp, Clock, ArrowUpRight } from 'lucide-react';

const IdeaBankTab = () => {
  const [filter, setFilter] = useState('trending');

  const ideas = [
    {
      id: 1,
      title: "AI-powered email scheduler",
      description: "Schedule emails based on recipient's timezone and optimal open rates",
      author: "@sarah_builds",
      votes: 23,
      category: "SaaS",
      trending: true
    },
    {
      id: 2,
      title: "Local business review aggregator",
      description: "Help small businesses collect and manage reviews from multiple platforms",
      author: "@mike_codes",
      votes: 18,
      category: "Local",
      trending: true
    },
    {
      id: 3,
      title: "Developer portfolio generator",
      description: "Auto-generate portfolios from GitHub repos with AI-written descriptions",
      author: "@alex_startup",
      votes: 31,
      category: "Developer Tools",
      trending: false
    },
    {
      id: 4,
      title: "Habit tracking for teams",
      description: "Track team habits and goals with gamification elements",
      author: "@team_builder",
      votes: 12,
      category: "Productivity",
      trending: false
    }
  ];

  const filteredIdeas = filter === 'trending' 
    ? ideas.filter(idea => idea.trending).sort((a, b) => b.votes - a.votes)
    : ideas.sort((a, b) => b.id - a.id);

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-1">Idea Bank</h1>
          <p className="text-white/70">Discover and share startup ideas</p>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <Plus size={18} />
          Submit Idea
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-1 mb-6 bg-[#1A1A20] rounded-lg p-1">
        <button 
          onClick={() => setFilter('trending')}
          className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            filter === 'trending' 
              ? 'bg-orange-500 text-white' 
              : 'text-white/60 hover:text-white'
          }`}
        >
          <TrendingUp size={16} className="inline mr-2" />
          Trending
        </button>
        <button 
          onClick={() => setFilter('newest')}
          className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            filter === 'newest' 
              ? 'bg-orange-500 text-white' 
              : 'text-white/60 hover:text-white'
          }`}
        >
          <Clock size={16} className="inline mr-2" />
          Newest
        </button>
      </div>

      {/* Ideas List */}
      <div className="space-y-4">
        {filteredIdeas.map((idea) => (
          <div key={idea.id} className="bg-[#1A1A20] rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all cursor-pointer group">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-white group-hover:text-orange-500 transition-colors">
                    {idea.title}
                  </h3>
                  <ArrowUpRight size={16} className="text-white/40 group-hover:text-orange-500 transition-colors" />
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-3">{idea.description}</p>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-white/60">by {idea.author}</span>
                  <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">
                    {idea.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1 ml-4">
                <button className="text-white/40 hover:text-orange-500 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </button>
                <span className="text-sm font-semibold text-white/80">{idea.votes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IdeaBankTab;

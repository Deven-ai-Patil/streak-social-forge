
import { useState } from 'react';
import { Trophy, Clock, Zap } from 'lucide-react';

const LeaderboardTab = () => {
  const [timeframe, setTimeframe] = useState('weekly');

  const leaderboardData = [
    {
      rank: 1,
      username: "@sarah_builds",
      currentStreak: 45,
      weeklyDays: 7,
      consistency: 98,
      avatar: "from-orange-500 to-red-500"
    },
    {
      rank: 2,
      username: "@mike_codes",
      currentStreak: 23,
      weeklyDays: 7,
      consistency: 95,
      avatar: "from-blue-500 to-purple-500"
    },
    {
      rank: 3,
      username: "@alex_startup",
      currentStreak: 38,
      weeklyDays: 6,
      consistency: 92,
      avatar: "from-green-500 to-blue-500"
    },
    {
      rank: 4,
      username: "@emma_builds",
      currentStreak: 15,
      weeklyDays: 6,
      consistency: 88,
      avatar: "from-purple-500 to-pink-500"
    },
    {
      rank: 5,
      username: "@dev_journey",
      currentStreak: 29,
      weeklyDays: 5,
      consistency: 85,
      avatar: "from-yellow-500 to-orange-500"
    },
    {
      rank: 6,
      username: "@founder_path",
      currentStreak: 12,
      weeklyDays: 5,
      consistency: 82,
      avatar: "from-indigo-500 to-purple-500"
    }
  ];

  const getRankDisplay = (rank: number) => {
    if (rank === 1) return { emoji: '🥇', color: 'text-yellow-500' };
    if (rank === 2) return { emoji: '🥈', color: 'text-gray-400' };
    if (rank === 3) return { emoji: '🥉', color: 'text-amber-600' };
    return { emoji: `#${rank}`, color: 'text-white/60' };
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2">
          <Trophy className="text-yellow-500" size={28} />
          Leaderboard
        </h1>
        <p className="text-white/70">Founders who showed up the most this week</p>
      </div>

      {/* Timeframe Toggle */}
      <div className="flex gap-1 mb-8 bg-[#1A1A20] rounded-lg p-1 max-w-xs mx-auto">
        <button 
          onClick={() => setTimeframe('weekly')}
          className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            timeframe === 'weekly' 
              ? 'bg-orange-500 text-white' 
              : 'text-white/60 hover:text-white'
          }`}
        >
          <Clock size={16} className="inline mr-2" />
          Weekly
        </button>
        <button 
          onClick={() => setTimeframe('alltime')}
          className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            timeframe === 'alltime' 
              ? 'bg-orange-500 text-white' 
              : 'text-white/60 hover:text-white'
          }`}
        >
          <Zap size={16} className="inline mr-2" />
          All-time
        </button>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {/* 2nd Place */}
        <div className="order-1 text-center pt-8">
          <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-16 h-16 rounded-full mx-auto mb-3"></div>
          <div className="text-2xl mb-1">🥈</div>
          <div className="font-semibold text-sm">{leaderboardData[1].username}</div>
          <div className="text-orange-500 text-sm">🔥 {leaderboardData[1].currentStreak}</div>
        </div>

        {/* 1st Place */}
        <div className="order-2 text-center">
          <div className="bg-gradient-to-br from-orange-500 to-red-500 w-20 h-20 rounded-full mx-auto mb-3 ring-4 ring-yellow-500/30"></div>
          <div className="text-3xl mb-2">🥇</div>
          <div className="font-bold">{leaderboardData[0].username}</div>
          <div className="text-orange-500 font-semibold">🔥 {leaderboardData[0].currentStreak}</div>
          <div className="text-sm text-white/60 mt-1">{leaderboardData[0].consistency}% consistency</div>
        </div>

        {/* 3rd Place */}
        <div className="order-3 text-center pt-12">
          <div className="bg-gradient-to-br from-green-500 to-blue-500 w-14 h-14 rounded-full mx-auto mb-3"></div>
          <div className="text-xl mb-1">🥉</div>
          <div className="font-semibold text-sm">{leaderboardData[2].username}</div>
          <div className="text-orange-500 text-sm">🔥 {leaderboardData[2].currentStreak}</div>
        </div>
      </div>

      {/* Full Leaderboard */}
      <div className="space-y-3">
        {leaderboardData.map((user, index) => {
          const rankDisplay = getRankDisplay(user.rank);
          const isTopThree = user.rank <= 3;
          
          return (
            <div 
              key={user.username} 
              className={`bg-[#1A1A20] rounded-xl p-4 border hover:border-white/20 transition-all ${
                isTopThree 
                  ? 'border-orange-500/30 bg-gradient-to-r from-orange-500/5 to-transparent' 
                  : 'border-white/10'
              }`}
            >
              <div className="flex items-center gap-4">
                {/* Rank */}
                <div className={`text-2xl font-bold w-12 text-center ${rankDisplay.color}`}>
                  {rankDisplay.emoji}
                </div>

                {/* Avatar */}
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${user.avatar} flex-shrink-0`}></div>

                {/* User Info */}
                <div className="flex-1">
                  <div className="font-semibold text-white mb-1">{user.username}</div>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-orange-500 font-medium">🔥 {user.currentStreak} days</span>
                    <span className="text-white/60">{user.weeklyDays}/7 this week</span>
                    <span className="text-white/60">{user.consistency}% consistency</span>
                  </div>
                </div>

                {/* Glow effect for top 3 */}
                {isTopThree && (
                  <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Your Position */}
      <div className="mt-8 bg-[#1A1A20] rounded-xl p-4 border border-blue-500/30">
        <div className="text-center">
          <div className="text-sm text-white/60 mb-1">Your Position</div>
          <div className="flex items-center justify-center gap-4">
            <span className="text-blue-500 font-bold">#12</span>
            <span className="text-orange-500">🔥 12 days</span>
            <span className="text-white/80">89% consistency</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardTab;

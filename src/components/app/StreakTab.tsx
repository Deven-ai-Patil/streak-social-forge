
import { Calendar, Award, BookOpen } from 'lucide-react';

const StreakTab = () => {
  const streakData = [
    { day: 1, date: 'Dec 1', completed: true },
    { day: 2, date: 'Dec 2', completed: true },
    { day: 3, date: 'Dec 3', completed: true },
    { day: 4, date: 'Dec 4', completed: true },
    { day: 5, date: 'Dec 5', completed: true },
    { day: 6, date: 'Dec 6', completed: true },
    { day: 7, date: 'Dec 7', completed: true, milestone: true },
    { day: 8, date: 'Dec 8', completed: true },
    { day: 9, date: 'Dec 9', completed: true },
    { day: 10, date: 'Dec 10', completed: true },
    { day: 11, date: 'Dec 11', completed: true },
    { day: 12, date: 'Dec 12', completed: true },
    { day: 13, date: 'Dec 13', completed: false, today: true },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Your Streak Journey</h1>
        <p className="text-white/70">Keep the momentum going</p>
      </div>

      {/* Current Streak */}
      <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl p-6 mb-8 border border-orange-500/30">
        <div className="text-center">
          <div className="text-4xl mb-2">🔥</div>
          <div className="text-3xl font-bold text-orange-500 mb-2">12 Days</div>
          <div className="text-white/80">Current Streak</div>
        </div>
      </div>

      {/* Milestones */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Award size={20} />
          Milestones
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 bg-[#1A1A20] rounded-lg p-3 border border-green-500/30">
            <div className="text-2xl">✅</div>
            <div>
              <div className="font-semibold text-green-500">Day 7 unlocked!</div>
              <div className="text-sm text-white/60">First week completed</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-[#1A1A20] rounded-lg p-3 border border-white/10 opacity-60">
            <div className="text-2xl">🎯</div>
            <div>
              <div className="font-semibold">Day 30 - Coming Soon</div>
              <div className="text-sm text-white/60">18 days to go</div>
            </div>
          </div>
        </div>
      </div>

      {/* Streak Timeline */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Calendar size={20} />
          Timeline
        </h3>
        <div className="grid grid-cols-7 gap-2">
          {streakData.map((day) => (
            <div key={day.day} className="text-center">
              <div className="text-xs text-white/60 mb-1">{day.date}</div>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-semibold border-2 ${
                day.today 
                  ? 'border-orange-500 bg-orange-500/20 text-orange-500'
                  : day.completed 
                    ? day.milestone 
                      ? 'border-yellow-500 bg-yellow-500/20 text-yellow-500'
                      : 'border-green-500 bg-green-500/20 text-green-500'
                    : 'border-white/20 bg-[#1A1A20] text-white/40'
              }`}>
                {day.milestone ? '🏆' : day.completed ? '✅' : day.today ? '🔥' : day.day}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Micro Journal */}
      <div>
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <BookOpen size={20} />
          Today's Note
        </h3>
        <textarea 
          placeholder="What did you work on today? (optional)"
          className="w-full bg-[#1A1A20] border border-white/10 rounded-xl p-4 text-white placeholder:text-white/40 focus:border-orange-500/50 focus:outline-none resize-none"
          rows={4}
        />
      </div>
    </div>
  );
};

export default StreakTab;

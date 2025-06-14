
import { useState } from 'react';
import { Home, Flame, Lightbulb, Trophy } from 'lucide-react';
import HomeTab from '../components/app/HomeTab';
import StreakTab from '../components/app/StreakTab';
import IdeaBankTab from '../components/app/IdeaBankTab';
import LeaderboardTab from '../components/app/LeaderboardTab';
import AppNavigation from '../components/app/AppNavigation';

const AppPage = () => {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', label: 'Home', icon: Home, component: HomeTab },
    { id: 'streak', label: 'Streak', icon: Flame, component: StreakTab },
    { id: 'ideas', label: 'Ideas', icon: Lightbulb, component: IdeaBankTab },
    { id: 'leaderboard', label: 'Board', icon: Trophy, component: LeaderboardTab },
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || HomeTab;

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">
      <AppNavigation />
      
      <div className="pb-20">
        <ActiveComponent />
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1A1A20] border-t border-white/10 px-4 py-2">
        <div className="flex items-center justify-around max-w-md mx-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'text-orange-500 bg-orange-500/10' 
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                <Icon size={20} />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AppPage;

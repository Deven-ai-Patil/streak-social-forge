
import { Bell, Settings } from 'lucide-react';
import Logo from '../Logo';

const AppNavigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#0B0B0F]/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <Logo />
        
        <div className="flex items-center gap-3">
          <button className="p-2 text-white/60 hover:text-white transition-colors">
            <Bell size={20} />
          </button>
          <button className="p-2 text-white/60 hover:text-white transition-colors">
            <Settings size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AppNavigation;

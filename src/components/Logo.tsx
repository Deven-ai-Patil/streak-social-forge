
import { Zap } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      <div className="relative">
        <Zap 
          size={24} 
          className="text-orange-500 group-hover:text-orange-400 transition-colors"
        />
        <div className="absolute inset-0 bg-orange-500/20 blur-md rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <span className="font-bold text-lg tracking-tight">FoundrStreak</span>
    </div>
  );
};

export default Logo;

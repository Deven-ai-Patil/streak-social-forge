
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import WaitlistModal from './WaitlistModal';

interface WaitlistFormProps {
  variant?: 'hero' | 'cta';
  referralSource?: string;
}

const WaitlistForm = ({ variant = 'hero', referralSource }: WaitlistFormProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isHeroVariant = variant === 'hero';

  return (
    <>
      <div className="flex justify-center">
        <Button
          onClick={() => setIsModalOpen(true)}
          className={`group relative font-semibold transition-all duration-300 transform hover:scale-105 ${
            isHeroVariant
              ? 'bg-white text-black hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-orange-500/25'
              : 'bg-orange-500 text-white hover:bg-orange-400 px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-orange-500/25'
          }`}
        >
          <span className="relative z-10 flex items-center gap-2">
            Join waitlist
            <span className="transform transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
          {!isHeroVariant && (
            <div className="absolute inset-0 bg-orange-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
          )}
          
          {/* Animated glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
        </Button>
      </div>

      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        referralSource={referralSource}
      />
    </>
  );
};

export default WaitlistForm;

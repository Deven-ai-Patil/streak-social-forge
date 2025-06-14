
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { X } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  referralSource?: string;
}

const WaitlistModal = ({ isOpen, onClose, referralSource }: WaitlistModalProps) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([
          {
            email: email.toLowerCase().trim(),
            referral_source: referralSource,
          }
        ]);

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Already signed up!",
            description: "This email is already on our waitlist.",
          });
        } else {
          throw error;
        }
      } else {
        setIsSubmitted(true);
        toast({
          title: "Welcome to the waitlist!",
          description: "We'll notify you when FoundrStreak launches.",
        });
      }
    } catch (error) {
      console.error('Error adding to waitlist:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1A1A20] rounded-2xl p-8 max-w-md w-full relative border border-white/10 animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        {isSubmitted ? (
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-green-500 font-semibold mb-4">
              <span className="text-2xl">✓</span>
              <span className="text-xl">You're on the list!</span>
            </div>
            <p className="text-white/70 mb-6">
              We'll email you when FoundrStreak is ready.
            </p>
            <Button
              onClick={onClose}
              className="bg-orange-500 text-white hover:bg-orange-400 px-6 py-2 rounded-full"
            >
              Close
            </Button>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Join the waitlist</h3>
            <p className="text-white/70 mb-6">
              Be the first to know when FoundrStreak launches.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                disabled={isLoading}
                required
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-orange-500 text-white hover:bg-orange-400 px-6 py-3 rounded-full font-semibold"
              >
                {isLoading ? 'Joining...' : 'Join waitlist →'}
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaitlistModal;

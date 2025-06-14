
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface WaitlistFormProps {
  variant?: 'hero' | 'cta';
  referralSource?: string;
}

const WaitlistForm = ({ variant = 'hero', referralSource }: WaitlistFormProps) => {
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
            referral_source: referralSource || variant,
          }
        ]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
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

  if (isSubmitted) {
    return (
      <div className="text-center">
        <div className="inline-flex items-center gap-2 text-green-500 font-semibold mb-2">
          <span>✓</span>
          <span>You're on the list!</span>
        </div>
        <p className="text-white/70">
          We'll email you when FoundrStreak is ready.
        </p>
      </div>
    );
  }

  const isHeroVariant = variant === 'hero';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`flex-1 ${isHeroVariant 
          ? 'bg-white/10 border-white/20 text-white placeholder:text-white/60' 
          : 'bg-white border-gray-300 text-black'
        }`}
        disabled={isLoading}
        required
      />
      <Button
        type="submit"
        disabled={isLoading}
        className={`group relative font-semibold transition-all duration-300 ${
          isHeroVariant
            ? 'bg-white text-black hover:bg-orange-500 hover:text-white px-6 py-2 rounded-full'
            : 'bg-orange-500 text-white hover:bg-orange-400 px-6 py-2 rounded-full'
        }`}
      >
        <span className="relative z-10">
          {isLoading ? 'Joining...' : 'Join waitlist →'}
        </span>
        {!isHeroVariant && (
          <div className="absolute inset-0 bg-orange-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
        )}
      </Button>
    </form>
  );
};

export default WaitlistForm;

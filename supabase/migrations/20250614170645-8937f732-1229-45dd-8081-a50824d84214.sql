
-- Create a waitlist table to store email signups
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  referral_source TEXT,
  notes TEXT
);

-- Add Row Level Security (RLS)
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (for public signups)
CREATE POLICY "Anyone can join waitlist" 
  ON public.waitlist 
  FOR INSERT 
  TO public
  WITH CHECK (true);

-- Create policy to allow reading (for admin purposes)
CREATE POLICY "Public can view waitlist count" 
  ON public.waitlist 
  FOR SELECT 
  TO public
  USING (true);

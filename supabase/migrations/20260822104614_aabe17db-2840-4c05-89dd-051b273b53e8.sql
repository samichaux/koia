CREATE TABLE public.waitlist_emails (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email text NOT NULL UNIQUE,
  source text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.waitlist_emails TO anon;
GRANT INSERT ON public.waitlist_emails TO authenticated;
GRANT ALL ON public.waitlist_emails TO service_role;

ALTER TABLE public.waitlist_emails ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can join the waitlist"
  ON public.waitlist_emails
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
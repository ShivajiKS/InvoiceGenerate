'use server';

import { createSupabaseServerClient } from '@/lib/supabase/server';

export async function getUserSession() {
  const supabase = createSupabaseServerClient();

  return supabase.auth.getSession();
}

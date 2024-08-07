'use server';

import { createSupabaseServerClient } from '@/lib/supabase/server';
import { z } from 'zod';
import SignInSchema from '@/lib/validators/signInSchema';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function SignInAction(formData: z.infer<typeof SignInSchema>) {
  const validatedFormData = SignInSchema.safeParse(formData);

  if (!validatedFormData.success)
    return { success: false, message: 'Invalid email or password' };

  const { email, password } = validatedFormData.data;

  const supabase = createSupabaseServerClient();

  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (response.error)
    return { success: false, message: response.error.message };

  // return { success: true, message: 'Sign-in successful' };
  revalidatePath('/', 'layout');
  redirect('/admin/dashboard/generate-invoice');
}

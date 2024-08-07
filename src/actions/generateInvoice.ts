'use server';

import { createSupabaseServerClient } from '@/lib/supabase/server';
import customerInvoiceSchema from '@/lib/validators/customerInvoiceSchema';
import { z } from 'zod';
import { redirect } from 'next/navigation';

export async function generateInvoice(
  formData: z.infer<typeof customerInvoiceSchema>
) {
  const data = customerInvoiceSchema.safeParse(formData);

  if (!data.success) return { error: 401, message: 'Invalid Information' };

  const db = createSupabaseServerClient();

  // let TodayDate = new Date().toJSON().slice(0, 10);

  const { error } = await db.from('customers').insert({ ...data.data });

  if (error) return { error: 401, message: 'Unable to generate' };

  redirect('/admin/dashboard/invoice-pdf');
}

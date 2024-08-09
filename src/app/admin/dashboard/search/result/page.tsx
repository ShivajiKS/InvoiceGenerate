import { XCircle } from 'lucide-react';
import Link from 'next/link';
import { createSupabaseServerClient } from '@/lib/supabase/server';
import { Card, CardContent } from '@/components/ui/card';

export const dynamic = 'force-dynamic';

export default async function Page({
  searchParams,
}: {
  searchParams?: { mobile: string };
}) {
  const supabase = createSupabaseServerClient();

  const { data, error } = await supabase
    .from('customers')
    .select()
    .eq('mobile', searchParams?.mobile as string);

  if (data?.length == 0 && searchParams?.mobile) {
    return (
      <div className='mx-auto mt-12 max-w-3xl rounded-b-md bg-white py-4 text-center shadow-md'>
        <div className='mx-auto h-8 w-8 text-gray-400'>
          <XCircle className='h-6 w-6' />{' '}
        </div>
        <h2 className='mt-2 text-sm font-semibold text-gray-900'>No result</h2>
        <p className='mx-auto mt-1 max-w-prose text-sm text-gray-500'>
          sorry we couldn{"'"}t find any matches for :{' '}
          <span className='font-medium text-green-600'>
            {searchParams?.mobile}
          </span>
        </p>
      </div>
    );
  }

  return (
    data && (
      <div className='mx-auto mt-8 flex max-w-3xl flex-col space-y-6 rounded-b-md bg-white px-2 py-4 shadow-md'>
        {data.map(({ id, name, complaints, amount, mobile, model }) => (
          <Card key={id} className='w-full space-y-5 bg-white p-5'>
            <div>
              Name : <span className='' />
              {name}
            </div>
            <div>
              Mobile Number : <span className='font-bold' />
              {mobile}
            </div>
            <div>
              Make & Model : <span className='font-bold' />
              {model}
            </div>
            <div>
              Complaints : <span className='font-bold' />
              {complaints}
            </div>
            <div>
              Amount : <span className='font-bold' />
              {amount}
            </div>
          </Card>
        ))}
      </div>
    )
  );
}

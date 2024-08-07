import BackButton from '@/components/backButton';
import { Button } from '@/components/ui/button';
import { createSupabaseServerClient } from '@/lib/supabase/server';

type propsTypes = {
  searchParams?: { query: string };
};

export default async function Page({ searchParams }: propsTypes) {
  // const db = createSupabaseServerClient();

  // const { data, error } = await db
  //   .from('customers')
  //   .select()
  //   .eq('mobile number', searchParams?.query);

  // console.log(data?.length);

  return (
    <div className=''>
      <BackButton />
      <div className='flex items-center justify-center pt-5'>
        <Button size='lg' value='download'>
          {' '}
          Print
        </Button>
      </div>
    </div>
  );
}

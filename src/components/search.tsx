'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, Search } from 'lucide-react';
import { useRef, useState, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SearchBox() {
  const searchParams = useSearchParams();

  const InputRef = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState<string>(
    searchParams.get('query') || ''
  );
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      InputRef?.current?.blur();
    }
    if (event.key === 'Enter') {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (!!searchQuery) {
      startTransition(() => {
        router.push(`/admin/dashboard/search/result?mobile=${searchQuery}`);
      });
    }
  };

  return (
    <>
      <div className='mx-auto mt-16 flex w-full max-w-3xl flex-col'>
        <div className='relative z-10 mx-2 h-12 rounded-md'>
          <Input
            placeholder='mobile number'
            onKeyDown={onKeyDown}
            ref={InputRef}
            onChange={(event) => setSearchQuery(event.target.value)}
            value={searchQuery}
            className='absolute inset-0 h-full text-lg'
          />
          <Button
            className='absolute inset-y-0 right-0 h-full rounded-l-none'
            onClick={onSubmit}
            size='sm'
            disabled={isPending}
          >
            {isPending ? (
              <Loader2 className='h-5 w-5 animate-spin' />
            ) : (
              <Search className='h-5 w-5' />
            )}
          </Button>
        </div>
      </div>
    </>
  );
}

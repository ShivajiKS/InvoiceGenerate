'use client';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { ChevronLeft } from 'lucide-react';

const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      variant='ghost'
      onClick={() => router.back()}
      className='mt-3 flex space-x-4'
    >
      <ChevronLeft className='h-6 w-6' /> Back
    </Button>
  );
};

export default BackButton;

import { Card } from '@/components/ui/card';

export default function Loading() {
  return (
    <div className='mx-auto mt-12 flex max-w-3xl flex-col space-y-6 rounded-b-md bg-white px-2 py-4 shadow-md'>
      <Card className='h-40 w-full animate-pulse space-y-5 bg-white p-5'>
        Loading...
      </Card>
    </div>
  );
}

import SearchBox from '@/components/search';
import { Suspense } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Suspense>
        <SearchBox />
      </Suspense>
      {children}
    </div>
  );
}

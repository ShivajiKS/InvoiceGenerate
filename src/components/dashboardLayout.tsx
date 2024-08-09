'use client';
import React, { useState } from 'react';
import { Sidebar, SidebarBody, SidebarLink } from '@/components/sidebar';
import { IconArrowLeft } from '@tabler/icons-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Plus, Search, User2 } from 'lucide-react';
import Image from 'next/image';
import { logout } from '@/lib/supabase/logout';
import { useRouter } from 'next/navigation';
import { createSupabaseBrowserClient } from '@/lib/supabase/client';
import { toast } from 'sonner';
import { Button } from './ui/button';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = [
    {
      label: 'Generate Invoice',
      href: '/admin/dashboard/generate-invoice',
      icon: (
        <Plus className='h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200' />
      ),
    },

    {
      label: 'Customers',
      href: '/admin/dashboard/customers',
      icon: (
        <User2 className='h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200' />
      ),
    },
    {
      label: 'Search',
      href: '/admin/dashboard/search',
      icon: (
        <Search className='h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200' />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <div
      className={cn(
        'mx-auto flex w-full max-w-screen-2xl flex-1 flex-col rounded-md border border-neutral-200 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800 md:flex-row lg:overflow-hidden',
        'h-screen' // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className='justify-between gap-10'>
          <div className='flex flex-1 flex-col overflow-y-auto overflow-x-hidden lg:px-4'>
            <>
              <Logo />
            </>
            <div className='mt-8 flex flex-col gap-3'>
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <Button
              variant='link'
              className='flex cursor-pointer items-center space-x-3 lg:px-4 lg:pb-10'
              onClick={async () => {
                const supabase = createSupabaseBrowserClient();
                const { error } = await supabase.auth.signOut();
                if (error) return;
                toast('Logout successful', {
                  duration: 1500,
                  position: 'top-right',
                });
                router.refresh();
              }}
            >
              <IconArrowLeft className='h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200' />
              <span>Logout</span>
            </Button>
          </div>
        </SidebarBody>
      </Sidebar>
      {/* Dashboard content */}
      {children}
    </div>
  );
}

const Logo = () => {
  return (
    <Link
      href='#'
      className='relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black'
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='whitespace-pre font-medium text-black dark:text-white'
      >
        Srinu Mobile Care
      </motion.span>
    </Link>
  );
};

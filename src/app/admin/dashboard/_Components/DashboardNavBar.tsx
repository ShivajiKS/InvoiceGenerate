"use client";

// import { ModeToggle } from '@/components'
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { Banknote, Folder, HomeIcon, Settings, Upload } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function DashboardNavBar({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col">
      <header className="flex justify-end h-14 lg:h-[20px] items-center gap-4 px-3 mr-1.5">
        <Dialog>
          <SheetTrigger className="min-[1024px]:hidden p-2 transition">
            <HamburgerMenuIcon width="30px" height="30px" />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <Link href="/">
                <SheetTitle>Nextjs Starter Kit</SheetTitle>
              </Link>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-[1rem]">
              <DialogClose asChild>
                <Link
                  className={clsx(
                    "flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                    {
                      "flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50":
                        pathname === "/admin/dashboard/listing",
                    }
                  )}
                  href="/admin/dashboard/listing"
                >
                  <div className="border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1 bg-white">
                    <Upload className="h-3 w-3" />
                  </div>
                  Add Invoice
                </Link>
              </DialogClose>
              {/* 2 :  */}
              <DialogClose asChild>
                <Link
                  className={clsx(
                    "flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                    {
                      "flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50":
                        pathname === "/admin/dashboard/add",
                    }
                  )}
                  href="/admin/dashboard/add"
                >
                  <div className="border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1 bg-white">
                    <HomeIcon className="h-3 w-3" />
                  </div>
                  Home
                </Link>
              </DialogClose>
              <Separator className="my-3" />
              <DialogClose asChild>
                <Link
                  className={clsx(
                    "flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                    {
                      "flex items-center gap-2 rounded-lg bg-gray-300 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50":
                        pathname === "/admin/dashboard/settings",
                    }
                  )}
                  href="#"
                  id="onboarding"
                >
                  <div className="border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1 bg-white">
                    <Settings className="h-3 w-3" />
                  </div>
                  Settings
                </Link>
              </DialogClose>
            </div>
          </SheetContent>
        </Dialog>
        {/* <div className="flex justify-center items-center gap-2 ml-auto">
          {config?.auth?.enabled && <UserProfile />}
          <ModeToggle />
        </div> */}
      </header>
      {children}
    </div>
  );
}

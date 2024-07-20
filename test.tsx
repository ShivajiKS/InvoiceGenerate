/*
dashboard layout :

import DashboardSideBar from "@/components/DashboardSideBar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full h-full">
      <DashboardSideBar />
      <Separator orientation="vertical" />
      <div className="grow"> {children}</div>
    </div>
  );
}



dashboard side bar : 
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function DashboardSideBar() {
  const pathname = usePathname();
  console.log(pathname?.split("/").pop());

  return (
    <aside className="w-48 h-full flex flex-col py-10 pl-4 pr-2 space-y-3">
      <Link
        href="/dashboard/add"
        className={` flex items-center rounded-lg cursor-pointer px-6 py-2 text-muted-foreground transition-transform duration-150 ease-out hover:scale-105 hover:font-bold hover:text-primary ${
          pathname?.split("/").pop() === "add" &&
          " text-primary font-bold bg-zinc-200 "
        }`}
      >
        Add
      </Link>
      <Link
        href="/dashboard/listing"
        className={`flex items-center rounded-lg cursor-pointer px-6 py-2 text-muted-foreground transition-transform duration-150 ease-out hover:scale-105 hover:font-bold hover:text-primary ${
          pathname?.split("/").pop() === "listing" &&
          "text-primary font-bold bg-zinc-200 "
        }`}
      >
        Listing
      </Link>
    </aside>
  );
}







dsdwwrereret 




"use client";

import { usePathname } from "next/navigation";
import { HomeIcon, Plus, List } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

export default function DashboardSideBar() {
  const pathname = usePathname();
  console.log(pathname?.split("/").pop());

  return (
    <div className="lg:block hidden border-r h-full">
      <div className="h-full min-h-screen flex flex-col gap-2">
        <div className="flex h-[55px] items-center justify-between border-b px-3 ">
          <Link href="#" className="flex items-center gap-2 font-semibold ml-1">
            nextjs starter template
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium ">
            <Link
              href="/dashboard/add"
              className={clsx(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-900 dark:hover:text-gray-50",
                {
                  "flex items-center gap-2 rounded-lg px-3 py-2 bg-gray-300 text-gray-500 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50":
                    pathname === "/dashboard/add",
                }
              )}
            >
              <div className="border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1 bg-white">
                <Plus className="h-4 w-4" />
              </div>
              Add
            </Link>
            <Link
              href="/dashboard/listing"
              className={clsx(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-900 dark:hover:text-gray-50",
                {
                  "flex items-center gap-2 rounded-lg px-3 py-2 bg-gray-300 text-gray-500 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50":
                    pathname === "/dashboard/listing",
                }
              )}
            >
              <div className="border rounded-lg dark:bg-black dark:border-gray-800 border-gray-400 p-1 bg-white">
                <List className="h-4 w-4" />
              </div>
              Listing
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}





 <div className="flex flex-col space-y-3 mt-[1rem]">
              <DialogClose asChild>
                <Link href="/dashboard">
                  <Button variant="outline" className="w-full">
                    <HomeIcon className="mr-2 h-4 w-4" />
                    Home
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/dashboard/projects">
                  <Button variant="outline" className="w-full">
                    <Folder className="mr-2 h-4 w-4" />
                    Projects
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/dashboard/finance">
                  <Button variant="outline" className="w-full">
                    <Banknote className="mr-2 h-4 w-4" />
                    Finance
                  </Button>
                </Link>
              </DialogClose>
              <Separator className="my-3" />
              <DialogClose asChild>
                <Link href="/dashboard/settings">
                  <Button variant="outline" className="w-full">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </Link>
              </DialogClose>
            </div>


*/

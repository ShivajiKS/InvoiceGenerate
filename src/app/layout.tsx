import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Srinu Invoice",
  description: "It is a Invoice generator application..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "bg-background font-sans antialiased flex flex-col relative w-screen min-h-screen p-0 m-0 overflow-x-hidden ",
          fontSans.variable
        )}
      >
        <div className="flex-grow">{children}</div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}

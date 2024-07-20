import DashboardSideBar from "@/app/admin/dashboard/_Components/DashboardSideBar";
import DashboardNavBar from "./_Components/DashboardNavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid w-full min-h-screen lg:grid-cols-[240px_1fr]">
      <DashboardSideBar />
      <DashboardNavBar>
        <main className="flex flex-col gap-4 lg:gap-6">{children}</main>
      </DashboardNavBar>
    </div>
  );
}

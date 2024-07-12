import { useSession } from "next-auth/react";
import ConvexClientProvider from "../providers";
import { auth } from "@/auth";
import SideBar from "@/components/navbar/SideBar.jsx";
import SearchandMobile from "@/components/navbar/SearchandMobile";
import { demoNavItems } from "@/utils/index";
import UserProfile from "@/components/navbar/UserProfile";

export default async function LoggedInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <ConvexClientProvider session={null}>
      <div className="fixed top-1/4 md:left-1/15 z-50 flex flex-col justify-between items-start">
        <div className="flex flex-row items-start space-y-1 lg:space-y-0 lg:space-x-4">
          <div className="mb-3">
            <SearchandMobile />
          </div>
        </div>
        <div className="hidden sm:block">
          <SideBar primaryNavItems={demoNavItems} />
        </div>
      </div>
      <main className="flex-1">{children}</main>
    </ConvexClientProvider>
  );
}

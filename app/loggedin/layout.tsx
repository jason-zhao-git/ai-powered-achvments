import { useSession } from "next-auth/react";
import ConvexClientProvider from "../providers";
import { auth } from "@/auth";
import SideBar from "@/components/navbar/SideBar.jsx";
import SearchandMobile from "@/components/navbar/SearchandMobile";
import { primaryNavItems } from "@/utils/index";

export default async function LoggedInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <ConvexClientProvider session={session}>
      
          <div className="fixed top-1/4 md:left-1/15 z-50 flex justify-between items-center">
            <div className="lg:ml-16">
              <div className="mb-3">
                <SearchandMobile />
              </div>
              <SideBar primaryNavItems={primaryNavItems} questItems={[]}/>
            </div>
          </div>
          <main className="flex-1">
            {children}
          </main>
       
    </ConvexClientProvider>
  );
}

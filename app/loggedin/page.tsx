import { Button } from "@/components/ui/button";
import { signInAction } from "@/serveractions/auth-action";
import Image from "next/image";
import UserProfile from "@/components/navbar/UserProfile";
import Tasks from "@/components/achvmain/Tasks";
import SideBar from "@/components/navbar/SideBar";
import SearchandMobile from "@/components/navbar/SearchandMobile";

//
export default function Home() {
  return (
    <main>
      <div className="relative min-h-screen min-w-full flex flex-col justify-center items-center bg-cover bg-center bg-gray-900">
        <div className="grid w-full md:grid-cols-[25%_1fr] lg:grid-cols-[40%_1fr]">
          <div className="fixed top-1/7 md:left-1/10 right-0 z-50 flex justify-between items-center">
            <div className="lg:ml-16">
              <SideBar />
            </div>
            <div className="flex-1 flex justify-start -mt-128 ml-2">
                <SearchandMobile />
            </div>
          </div>

          
        </div>
      </div>
    </main>
  );
}

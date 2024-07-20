import { Button } from "@/components/ui/button";
import { signInAction } from "@/serveractions/auth-action";
import Image from "next/image";
import UserProfile from "@/components/navbar/UserProfile";
import SideBar from "@/components/navbar/SideBar";
import SearchandMobile from "@/components/navbar/SearchandMobile";
import { demoNavItems } from "@/utils/index";

//
export default function Home() {
  return (
    <main>
      <div className="relative min-h-screen min-w-full flex flex-col justify-center items-center bg-cover bg-center bg-gray-800">
        <div className="grid w-full md:grid-cols-[25%_1fr] lg:grid-cols-[40%_1fr]">
        
        </div>
      </div>
    </main>
  );
}

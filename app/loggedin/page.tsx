import { Button } from "@/components/ui/button";
import { signInAction } from "@/serveractions/auth-action";
import Image from "next/image";
import UserProfile from "@/components/achvmain/UserProfile";
import Tasks from "@/components/achvmain/Tasks";

export default function Home() {
 
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="flex border-2">AI achv</h1>
      <UserProfile />
      <Button variant={"outline"}>Hi</Button>
      <Tasks />
      
    </main>
  );
}
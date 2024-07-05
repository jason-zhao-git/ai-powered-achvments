"use client";
import { Button } from "@/components/ui/button";
import { signInAction } from "@/serveractions/auth-action";
import Image from "next/image";
import Loginapp from "@/components/achvmain/Loginapp";

export default function Home() {
  
  return (
    <main>
      <Loginapp />
    </main>
  );
}

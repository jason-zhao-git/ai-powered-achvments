"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { signOutAction } from "@/serveractions/auth-action";

const defaultImage ="/achvAI.png";

export default function UserProfile() {
  const session = useSession();

  const imageUrl = session?.data?.user?.image;
  const name = session?.data?.user?.name;
  const email = session?.data?.user?.email;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="hover:cursor-pointer transition-colors duration-200 hover:bg-gray-200 hover:font-semibold">
        <Button
          variant={"secondary"}
          className="flex items-center justify-start gap-1 lg:gap-2 p-0 px-3 w-full bg-white"
        >
          {imageUrl && (
            <Image
            src={session?.data?.user?.image ?? defaultImage}
            width={24}
            height={24}
            alt={`profile picture`}
            className="rounded-full"
          />
          )}
          <p className="truncate">{name}</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full hidden md:block">
        <DropdownMenuItem className="lg:w-full flex items-start justify-center ">
          <form action={signOutAction}>
            <Button
              type="submit"
              variant={"ghost"}
              className="hover:font-semibold"
            >
              Log out
            </Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}





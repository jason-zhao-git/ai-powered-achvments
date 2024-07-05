"use client";

import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

const defaultImage ="/achvAI.png";


const UserProfile = () => {
  const session = useSession();

  return (
    <div>
      <Image
        src={session?.data?.user?.image ?? defaultImage}
        width={500}
        height={500}
        alt={` profile picture`}
        className="rounded-full"
      />
    </div>
  );
};

export default UserProfile;

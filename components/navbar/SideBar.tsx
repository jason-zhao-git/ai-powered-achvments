"use client";
import Link from "next/link";
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Tilt from "react-parallax-tilt";
import UserProfile from "./UserProfile";
import { primaryNavItems } from "@/utils";
import "../css/navbar.css";

export default function SideBar() {
  return (
    <div className="hidden md:block">
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
      <div className="container h-144 w-72 bg-white bg-opacity-30 rounded-lg shadow-lg border-2 border-opacity-30 border-white backdrop-filter backdrop-blur-sm backdrop-saturate-200 flex flex-col justify-start items-center p-6 overflow-y-scroll custom-scrollbar" >
          <div className="flex h-full w-full flex-col gap-2 bg-transparent">
            <div className="flex h-14 items-center pb-4 border-b-2 px-6 lg:h-[60px] lg:px-6">
              <UserProfile />
            </div>
            <div className="flex-1">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                {primaryNavItems.map(({ name, icon, link }, idx) => (
                  <Link
                    key={idx}
                    href={link}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-white/85 transition-colors duration-200 hover:bg-gray-200 hover:text-black hover:font-semibold"
                  >
                    {icon}
                    {name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
}

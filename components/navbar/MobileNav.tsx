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

import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { primaryNavItems, questItems, demoNavItems } from "@/utils";
import UserProfileMobile from "./UserProfileMobile";
import { ChevronsUpDown } from "lucide-react"; // Import Target icon for quests
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function MobileNav() {
  return (
    <div className="flex flex-col">
      <div className="flex h-14 items-center gap-4 bg-transparent px-2 lg:h-[60px] lg:px-6 ">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col bg-slate-800">
            <nav className="grid gap-2 text-lg font-medium">
              <UserProfileMobile />
              {demoNavItems.map(({ name, icon, link }, idx) => (
                <Link
                  key={idx}
                  href={link}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2   text-white/85 transition-colors duration-200 hover:bg-gray-200 hover:text-black hover:font-semibold"
                >
                  {icon}
                  {name}
                </Link>
              ))}
            </nav>
            <Collapsible defaultOpen={true}>
              <CollapsibleTrigger className="flex items-center gap-3 rounded-lg px-3 py-2 text-base text-white/85 transition-colors duration-200 hover:bg-gray-200 hover:text-black hover:font-semibold w-full">
                <ChevronsUpDown className="h-4 w-4" />
                My Quests
              </CollapsibleTrigger>
              <CollapsibleContent className="">
                <nav className="grid items-start px-2 text-sm font-medium">
                  {questItems.map(({ name, icon, link }, idx) => (
                    <Link
                      key={idx}
                      href={link}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-base text-white/85 transition-colors duration-200 hover:bg-gray-200 hover:text-black hover:font-semibold"
                    >
                      {icon}
                      {name}
                    </Link>
                  ))}
                </nav>
              </CollapsibleContent>
            </Collapsible>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

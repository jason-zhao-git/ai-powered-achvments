"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

import styled, { keyframes } from "styled-components";
import Tilt from "react-parallax-tilt";
import UserProfile from "./UserProfile";
import { ScrollArea } from "@/components/ui/scroll-area"

import { primaryNavItems } from "@/utils/index";

export default function SideBar( { primaryNavItems } ) {

  
  return (
    <div className="hidden sm:block">
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
        <ScrollArea className="container h-144 w-64 bg-white bg-opacity-30 rounded-lg shadow-lg border-2 border-opacity-30 border-white backdrop-filter backdrop-blur-sm backdrop-saturate-200 flex flex-col justify-start items-center p-6">
          <div className="flex h-full w-full flex-col gap-2 bg-transparent">
            <div className="flex h-14 items-center pb-4 border-b-2 px-6 lg:h-[60px] lg:px-6">
              <UserProfile />
            </div>
            <div className="flex-1">
              <nav className="grid items-start px-2 text-sm font-medium">
                {primaryNavItems.map(({ name, icon, link }, idx) => (
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
            </div>
          </div>
        </ScrollArea>
      </Tilt>
    </div>
  );
}

const hue = keyframes`
  from {
    -webkit-filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(-360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const AnimatedGradientText = styled.span`
  color: #ffffff;
  background-image: -webkit-linear-gradient(92deg, #a0eaff, #bfffd1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation:
    ${hue} 10s infinite linear,
    ${pulse} 2s infinite ease-in-out;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-feature-settings: "kern";
  overflow-wrap: break-word;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;

  &.no-animation {
    -webkit-animation: none;
    animation: none;
  }
`;

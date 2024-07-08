"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import SearchBar from "./SearchBar";
import MobileNav from "./MobileNav";

const SearchandMobile = () => {
  return (
    <div>
      <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
        <div className="container max-w-2xl bg-white bg-opacity-30 rounded-lg shadow-lg border-2 border-opacity-30 border-white backdrop-filter backdrop-blur-sm backdrop-saturate-200 flex flex-row justify-start items-center p-2">
          <SearchBar />
          <div className="md:hidden">
            <MobileNav />
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default SearchandMobile;

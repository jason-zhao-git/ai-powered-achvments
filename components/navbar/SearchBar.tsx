import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <form className="flex flex-1 justify-center items-center max-w-lg">
      <div className="relative w-full">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-white/90" />
        <Input
          type="search"
          placeholder="Search achievements..."
          className="w-full appearance-none bg-transparent pl-8 shadow-none placeholder-opacity-85 placeholder-white"
        />
      </div>
    </form>
  );
};

export default SearchBar;

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="flex flex-1 justify-center items-center max-w-lg border-0" onSubmit={handleSubmit}>
      <div className="relative w-full border-0">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-white/90" />
        <Input
          type="searchname"
          placeholder="Search achievements..."
          className="text-white w-full appearance-none bg-transparent pl-8 shadow-none placeholder-opacity-85 placeholder-white border-0"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchBar;

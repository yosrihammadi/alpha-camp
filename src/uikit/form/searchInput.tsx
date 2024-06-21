import React from "react";
import { SearchIcon } from "../icons/search";

const SearchInput = () => {
  return (
    <label className="border-white border-opacity-50 border-2 rounded-[10px] flex items-center px-6 py-4 w-[550px] max-w-full cursor-text">
      <SearchIcon />
      <input
        type="text"
        className="border-0 outline-none bg-transparent mx-auto w-9/12 h-full text-white placeholder-white placeholder-shown:truncate"
        placeholder="Search for campsites, local stores and more.."
      />
    </label>
  );
};

export default SearchInput;

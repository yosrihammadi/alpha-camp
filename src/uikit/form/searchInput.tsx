import React from "react";
import { SearchIcon } from "../icons/search";

const SearchInput = () => {
  return (
    <label className="border-white border-opacity-50 border-2 rounded-md flex items-center px-6 py-4">
      <SearchIcon />
      <input type="text" className="border-0 outline-none bg-transparent" />
    </label>
  );
};

export default SearchInput;

import React from "react";
import { SearchIcon } from "../icons/search";

const ProductSearchInput = () => {
  return (
    <label className="border-gray-100 border-2 rounded-[10px] flex items-center px-6 py-4 w-full max-w-full cursor-text">
      <SearchIcon opacity={0.5} fill="black" />
      <input
        type="text"
        className="border-0 outline-none bg-transparent px-9 flex-1 h-full text-black placeholder:text-black placeholder:opacity-50 placeholder-shown:truncate"
        placeholder="Search for campsites, local stores and more.."
      />
    </label>
  );
};

export default ProductSearchInput;

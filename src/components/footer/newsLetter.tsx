import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-green-900 bg-opacity-50 rounded-[9px] p-6 flex flex-col text-center w-[290px] mx-auto lg:mx-0">
      <span className="font-work font-semibold text-[15px] text-white mb-1">
        Weekly Newsletter
      </span>
      <span className="font-work text-gray-300 text-xs mb-5">
        Get blog articles and offers via email
      </span>

      <input
        type="email"
        id="email"
        placeholder="Your Email"
        className="font-work text-xs text-white py-2 px-3 placeholder-gray-300 bg-black mb-2 rounded-[5px] outline-none border-0"
      />
      <button
        type="button"
        className="w-[240px] max-w-full bg-green-400 rounded-[5px] p-2 text-white text-xs font-work font-medium"
      >
        Subscribe
      </button>
    </div>
  );
};

export default NewsLetter;

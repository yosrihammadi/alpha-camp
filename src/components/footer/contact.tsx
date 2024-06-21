import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col">
      <span className="text-white text-sm font-semibold font-jakarta mb-2">
        About
      </span>
      <p className="font-jakarta text-gray-300 text-xs max-w-[275px] mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>
      <div className="mt-auto">
        <div className="flex mb-0.5">
          <span className="font-jakarta font-semibold text-white text-xs">
            Email :
          </span>
          <span className="font-jakarta text-gray-300 text-xs ms-0.5">
            Houssein.ghanmi.3@gmail.com
          </span>
        </div>
        <div className="flex">
          <span className="font-jakarta font-semibold text-white text-xs">
            Phone :
          </span>
          <span className="font-jakarta text-gray-300 text-xs ms-0.5">
            0021655984808
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;

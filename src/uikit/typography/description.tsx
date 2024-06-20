import React, { ReactNode } from "react";

const Description = ({ children }: { children: ReactNode }) => {
  return (
    <p className="text-gray-600 text-base text-center mb-14 max-w-[1000px] mx-auto">
      {children}
    </p>
  );
};

export default Description;

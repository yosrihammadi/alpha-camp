import React, { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="text-gray-700 text-center text-5xl font-bold font-inika mb-10">
      {children}
    </h2>
  );
};

export default Title;

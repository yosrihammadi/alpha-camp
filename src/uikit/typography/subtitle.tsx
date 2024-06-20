import React, { ReactNode } from "react";

const Subtitle = ({ children }: { children: ReactNode }) => {
  return (
    <p className="uppercase text-lg text-center font-bold font-inika text-green-50 mb-5">
      {children}
    </p>
  );
};

export default Subtitle;

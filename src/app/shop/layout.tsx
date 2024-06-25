import Header from "@/components/header";
import { ReactNode } from "react";

const ShopLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col">
      <Header bgColor="white" textColor="dark" position="sticky" />
      {children}
    </div>
  );
};

export default ShopLayout;

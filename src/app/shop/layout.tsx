import { ReactNode } from "react";
import Header from "@/components/header";
import LinkTree from "@/components/shop/linkTree";
import ProductSearchInput from "@/uikit/form/productSearchInput";

const ShopLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col">
      <Header bgColor="white" textColor="dark" position="sticky" />
      <div className="relative py-10 px-6 lg:px-0 container mx-auto">
        <div className="mb-5 ps-8">
          <LinkTree />
        </div>
        <div className="mb-8">
          <ProductSearchInput />
        </div>
        {children}
      </div>
    </div>
  );
};

export default ShopLayout;

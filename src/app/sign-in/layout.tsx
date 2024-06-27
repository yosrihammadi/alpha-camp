import { ReactNode } from "react";
import Header from "@/components/header";

const SignInLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col">
      <Header bgColor="white" textColor="dark" position="sticky" />
      <div className="relative py-10 px-6 lg:px-0 container mx-auto">
        {children}
      </div>
    </div>
  );
};

export default SignInLayout;

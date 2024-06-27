import { ReactNode } from "react";
import Header from "@/components/header";

const SignUpLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col h-full">
      <Header bgColor="white" textColor="dark" position="sticky" />
      <div className="relative py-10 px-6 lg:px-0 container mx-auto flex-1">
        {children}
      </div>
    </div>
  );
};

export default SignUpLayout;

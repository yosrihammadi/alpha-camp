import { ReactNode } from "react";

const SignInLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="relative py-10 px-6 lg:px-0 container mx-auto flex-1">
        {children}
      </div>
    </div>
  );
};

export default SignInLayout;

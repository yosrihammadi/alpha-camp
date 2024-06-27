import SignUpForm from "@/components/signup/signUpForm";

const SignUpBusiness = () => {
  return (
    <div className="h-full flex flex-col">
      <SignUpForm isBusiness />
    </div>
  );
};

export default SignUpBusiness;

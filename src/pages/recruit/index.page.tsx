import { Footer } from "@/components/common";
import RecruitMain from "@/components/recruit";
import { useState } from "react";

const Recruit = () => {
  const [emailInputValue, setEmailInputValue] = useState("");
  return (
    <>
      <RecruitMain
        emailInputValue={emailInputValue}
        emailInputOnChange={(e) => setEmailInputValue(e.target.value)}
      />
      <Footer />
    </>
  );
};

export default Recruit;

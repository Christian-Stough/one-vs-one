import React from "react";
import SigninButton from "@/components/Button/SigninButton";

export default function NoUser() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col gap-8 w-[350px]">
        <SigninButton />
      </div>
    </div>
  );
}

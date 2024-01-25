"use client";

import { signOut, useSession } from "next-auth/react";
import React from "react";
import Button from "./Button/Button";

export default function NavBar() {
  const session = useSession();
  const handleSignOut = () => {
    signOut();
  };
  return (
    <div className="relative w-full bg-cyan-500 flex justify-center items-center py-4 text-3xl light text-white">
      <div>One Vs One</div>
      {session.data && (
        <Button
          variant="secondary"
          className="w-[150px] absolute right-2 top-1/2 transform -translate-y-1/2"
          onClick={handleSignOut}
        >
          Sign Out
        </Button>
      )}
    </div>
  );
}

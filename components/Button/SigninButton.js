"use client";

import React from "react";
import Button from "./Button";
import { signIn } from "next-auth/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function SigninButton() {
  const handleSignIn = async (provider) => {
    signIn(provider);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Sign In</Button>
      </DialogTrigger>
      <DialogContent className="w-[375px]">
        <DialogHeader>Sign In</DialogHeader>
        <Button onClick={() => handleSignIn("discord")}>
          Sign in with Discord
        </Button>
      </DialogContent>
    </Dialog>
  );
}

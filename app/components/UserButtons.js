"use client";

import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import React from "react";
import { createSessionId } from "@/server/database_actions";

export default function UserButtons({ session }) {
  const router = useRouter();

  const handleClick = async () => {
    const session_id = await createSessionId({ player: session.user.name });
    router.push(`/lobby/${session_id}`);
  };

  return (
    <div className="flex justify-center items-center w-1/2 h-full">
      <div className="flex flex-col gap-8 w-[350px]">
        <Button onClick={handleClick}>Duel</Button>
        <Button className="relative bg-neutral-200 text-neutral-400 border border-neutral-300 hover:bg-neutral-200 hover:text-neutral-400 hover:border hover:border-neutral-300 cursor-default">
          View Your Profile Stats
          <div className="absolute left-1/3 top-2 text-xs px-2 py-1 border bg-yellow-100 border-yellow-400 rounded text-yellow-800 -rotate-[30deg]">
            Coming Soon!
          </div>
        </Button>
      </div>
    </div>
  );
}

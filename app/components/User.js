import React from "react";

import UserButtons from "./UserButtons";
import Profile from "@/components/Profile";

export default function User({ session, player_data }) {
  return (
    <div className="flex h-full w-full">
      <div className="w-1/2 h-full flex justify-center items-center">
        <Profile session={session} player_data={player_data} />
      </div>
      <UserButtons session={session} />
    </div>
  );
}

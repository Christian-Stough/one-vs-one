import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import Profile from "@/components/Profile";
import { supabase } from "@/app/context/Supabase";
import WaitingBox from "./components/WaitingBox";
import { headers } from "next/headers";

export default async function page({ params }) {
  const session_id = params.lobby_id;
  const session = await getServerSession(authOptions);
  let { data: player, error } = await supabase
    .from("players")
    .select("*")
    .eq("name", session.user.name);

  let { data: session_data, error: session_error } = await supabase
    .from("sessions")
    .select("*")
    .eq("session_id", session_id);

  const headerList = headers();
  const base_url = headerList.get("x-forwarded-proto") || "http";
  const host = headerList.get("host") || "localhost:3000";

  const url = `${base_url}://${host}/lobby/${session_id}/join/${session_data[0].invite_id}`;

  return (
    <div className="flex flex-col w-full items-center h-full">
      <div className="flex flex-col py-12">
        <div className="">Link to Send</div>
        <div className="w-[500px] italic text-neutral-700 select-all drop-shadow py-2 px-4 whitespace-nowrap rounded-sm border border-cyan-600 bg-cyan-100 overflow-hidden overflow-ellipsis">
          {url}/join/{session_data[0].invite_id}
        </div>
      </div>
      <div className="flex h-full w-full relative">
        <div className="w-1/2 flex justify-center items-center">
          <Profile
            session={session}
            player_data={player[0]}
            size={300}
            tooltip={false}
          />
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 text-5xl font-semibold">
          VS
        </div>
        <WaitingBox />
      </div>
    </div>
  );
}

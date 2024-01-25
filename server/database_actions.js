"use server";

import { supabase } from "@/app/context/Supabase";
import { v4 as uuidv4 } from "uuid";

export const createSessionId = async ({ player: player }) => {
  const session_id = uuidv4();
  const invite_id = uuidv4();

  await supabase
    .from("sessions")
    .insert([
      { session_id: session_id, player_1: player, invite_id: invite_id },
    ]);

  return session_id;
};

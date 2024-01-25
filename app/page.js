import NoUser from "./components/NoUser";
import User from "./components/User";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { supabase } from "./context/Supabase";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    let { data: player, error } = await supabase
      .from("players")
      .select("*")
      .eq("name", session.user.name);

    if (player.length === 0) {
      console.log("no player");
      player = await supabase
        .from("players")
        .insert([{ name: session.user.name, wins: 0, loses: 0, winstreak: 0 }])
        .select("*")
        .eq("name", session.user.name)
        .then((res) => res.data);
    }

    return <User session={session} player_data={player[0]} />;
  } else return <NoUser />;
}

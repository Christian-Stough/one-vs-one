import Button from "@/components/Button/Button";
import React from "react";
import { FireIcon } from "@heroicons/react/24/solid";
import { FireIcon as FireIconOutline } from "@heroicons/react/24/outline";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function User({ session, player_data }) {
  return (
    <div className="flex h-full w-full">
      <div className="w-1/2 h-full flex justify-center items-center">
        <div className="flex flex-col w-fit h-fit gap-3">
          <div className="text-3xl flex justify-center  font-semibold">
            {session.user.name}
          </div>
          <div className="relative h-fit w-fit">
            <img
              src={session.user.image}
              className="size-[450px]  rounded border border-cyan-600 drop-shadow"
            />
            <div className="absolute min-w-fit flex gap-8  left-1/2 transform -translate-x-1/2 -bottom-8 drop-shadow-sm px-8 py-2 h-fit bg-white border border-cyan-600 rounded">
              {player_data.winstreak > 5 && (
                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="absolute h-fit w-fit -left-3 -top-4">
                        <FireIcon className="size-8 text-red-500 absolute" />
                        <FireIconOutline className="size-8 absolute" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="translate-x-3">
                      <p>{player_data.winstreak} Winstreak</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}

              <div className="flex flex-col items-center text-2xl">
                <div>{player_data.wins}</div>
                <div className="font-semibold text-blue-800">W</div>
              </div>
              <div className="flex flex-col items-center text-2xl">
                <div>{player_data.loses}</div>
                <div className="font-semibold text-red-800">L</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/2 h-full">
        <div className="flex flex-col gap-8 w-[350px]">
          <Button>Duel</Button>
          <Button className="relative bg-neutral-200 text-neutral-400 border border-neutral-300 hover:bg-neutral-200 hover:text-neutral-400 hover:border hover:border-neutral-300 cursor-default">
            View Your Profile Stats
            <div className="absolute left-1/3 top-2 text-xs px-2 py-1 border bg-yellow-100 border-yellow-400 rounded text-yellow-800 -rotate-[30deg]">
              Coming Soon!
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

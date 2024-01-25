import React from "react";
import { FireIcon } from "@heroicons/react/24/solid";
import { FireIcon as FireIconOutline } from "@heroicons/react/24/outline";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Profile({
  session,
  player_data,
  size = 450,
  tooltip = true,
}) {
  return (
    <div className="flex flex-col w-fit h-fit gap-3">
      <div className="text-3xl flex justify-center  font-semibold">
        {session.user.name}
      </div>
      <div className="relative h-fit w-fit">
        <img
          src={session.user.image}
          className={`size-[${size}px]  rounded border border-cyan-600 drop-shadow`}
        />
        <div className="absolute min-w-fit flex gap-8  left-1/2 transform -translate-x-1/2 -bottom-8 drop-shadow-sm px-8 py-2 h-fit bg-white border border-cyan-600 rounded">
          {player_data.winstreak > 5 && tooltip ? (
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
          ) : (
            player_data.winstreak > 5 && (
              <div className="absolute h-fit w-fit -left-3 -top-4">
                <FireIcon className="size-8 text-red-500 absolute" />
                <FireIconOutline className="size-8 absolute" />
              </div>
            )
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
  );
}

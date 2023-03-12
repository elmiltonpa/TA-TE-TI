import React from "react";

export const Scoreboard = ({ score }) => {
  return (
    <div className="flex w-[496px] h-20">
      <div className="bg-red-600 w-2/4 text-6xl flex justify-center items-center">
        {score[0]}
      </div>
      <div className="bg-blue-700 w-2/4 text-6xl flex justify-center items-center">
        {score[1]}
      </div>
    </div>
  );
};
//

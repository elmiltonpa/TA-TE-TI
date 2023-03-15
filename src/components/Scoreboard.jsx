import React from "react";

export const Scoreboard = ({ score }) => {
  return (
    <div className="flex tateti:w-[496px] w-full h-20">
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

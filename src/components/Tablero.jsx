import React from "react";
import { Botones } from "./Botones";

export const Tablero = ({ handleClick, isTrue }) => {
  return (
    <div>
      <Botones handleClick={handleClick} isTrue={isTrue} />
    </div>
  );
};

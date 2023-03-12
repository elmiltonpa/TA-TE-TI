import React from "react";
import { Botones } from "./Botones";

export const Tablero = ({ handleClick }) => {
  return (
    <div>
      <Botones handleClick={handleClick} />
    </div>
  );
};

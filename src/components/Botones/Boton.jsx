import React from "react";

export const Boton = ({ valor, handleClick }) => {
  return (
    <button
      className="w-40 h-40 text-8xl bg-black text-white"
      id={valor}
      onClick={() => {
        let nuevovalor = parseInt(valor);
        handleClick(nuevovalor);
      }}
    ></button>
  );
};

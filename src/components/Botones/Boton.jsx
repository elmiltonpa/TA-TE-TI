import React from "react";

export const Boton = ({ valor, handleClick }) => {
  return (
    <button
      className=" bg-black   w-40 h-40 text-8xl  text-white"
      id={valor}
      onClick={() => {
        let nuevovalor = parseInt(valor);
        handleClick(nuevovalor);
      }}
    ></button>
  );
};

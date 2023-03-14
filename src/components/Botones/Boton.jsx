import React from "react";

export const Boton = ({ valor, handleClick, isTrue }) => {
  // const boton = document.getElementById(valor);
  // boton.addEventListener("click", () => {
  //   boton.disabled = true;
  // });

  return (
    <button
      className="button bg-black   w-40 h-40 text-8xl  text-white"
      id={valor}
      disabled={isTrue}
      onClick={() => {
        let nuevovalor = parseInt(valor);
        handleClick(nuevovalor);
      }}
    ></button>
  );
};

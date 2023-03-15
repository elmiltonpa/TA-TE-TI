import React from "react";

export const Boton = ({ valor, handleClick, isTrue }) => {
  // const boton = document.getElementById(valor);
  // boton.addEventListener("click", () => {
  //   boton.disabled = true;
  // });

  return (
    <button
      className="button bg-black tateti:w-40 active:bg-purple-700 tateti:h-40 w-28 h-28 text-8xl  text-white"
      id={valor}
      tabIndex={-1}
      disabled={isTrue}
      onClick={() => {
        let nuevovalor = parseInt(valor);
        handleClick(nuevovalor);
      }}
    ></button>
  );
};

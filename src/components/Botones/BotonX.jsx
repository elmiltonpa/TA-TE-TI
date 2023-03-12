import React, { useState } from "react";

const Boton = () => {
  const [state, setState] = useState("X");
  const letras = ["X", "O"];
  const [contador, setContador] = useState(1);

  const handleClick = (valor) => {
    setState(letras[contador]);
    setContador(contador + 1);
    if (contador == 1) {
      setContador(0);
    }
    document.getElementById(valor).innerHTML = state;
  };
  return (
    <div className=" flex gap-3">
      <button
        id="1"
        onClick={() => {
          handleClick(1);
        }}
        className="w-40 h-40 text-7xl bg-black text-white"
      ></button>
      <button
        id="2"
        onClick={() => {
          handleClick(2);
        }}
        className="w-40 h-40 text-7xl bg-black text-white"
      ></button>
      <button
        id="3"
        onClick={() => {
          handleClick(3);
        }}
        className="w-40 h-40 text-7xl bg-black text-white"
      ></button>
    </div>
  );
};

export default Boton;

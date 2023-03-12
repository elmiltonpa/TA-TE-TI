import React from "react";
import { Boton } from "./Botones/Boton";

export const Botones = ({ handleClick, truee }) => {
  const generarBotones = (valor) =>
    valor.map((valores) => (
      <Boton
        key={valores}
        valor={valores}
        handleClick={handleClick}
        truee={truee}
      />
    ));

  return (
    <div id="tablero" className="flex flex-col gap-2">
      <div id="fila1" className="flex gap-2">
        {generarBotones(["0", "1", "2"])}
      </div>
      <div id="fila2" className="flex gap-2">
        {generarBotones(["3", "4", "5"])}
      </div>
      <div id="fila3" className="flex gap-2">
        {generarBotones(["6", "7", "8"])}
      </div>
    </div>
  );
};

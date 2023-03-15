import React, { useState } from "react";
import { Scoreboard } from "./components/Scoreboard";
import { Tablero } from "./components/Tablero";

let Array = [null, null, null, null, null, null, null, null, null];

const App = () => {
  const [state, setState] = useState("X");
  const letras = ["X", "O"];
  const [isTrue, setIstrue] = useState(false);
  const [contador, setContador] = useState(1);
  const [contador2, setContador2] = useState(1);

  const [scoree, setScore] = useState([0, 0]);

  const posicionesganadoras2 = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const colororiginal = (a, b, c) => {
    document.getElementById(a).classList.remove("bg-yellow-500");
    document.getElementById(b).classList.remove("bg-yellow-500");
    document.getElementById(c).classList.remove("bg-yellow-500");
    document.getElementById(a).classList.add("bg-black");
    document.getElementById(b).classList.add("bg-black");
    document.getElementById(c).classList.add("bg-black");
  };

  const cambiarcolor = (a, b, c) => {
    document.getElementById(a).classList.remove("bg-black");
    document.getElementById(b).classList.remove("bg-black");
    document.getElementById(c).classList.remove("bg-black");
    document.getElementById(a).classList.add("bg-yellow-500");
    document.getElementById(b).classList.add("bg-yellow-500");
    document.getElementById(c).classList.add("bg-yellow-500");
    setTimeout(() => {
      colororiginal(a, b, c);
    }, 1000);
  };

  const ganador = (arrayy) => {
    for (let i = 0; i < 8; i++) {
      let array = posicionesganadoras2[i];
      let [a, b, c] = array;
      if (
        arrayy[a] === arrayy[b] &&
        arrayy[a] === arrayy[c] &&
        arrayy[a] != null &&
        arrayy[b] != null &&
        arrayy[c] != null
      ) {
        cambiarcolor(a, b, c);
        return true;
      }
    }
    return false;
  };

  const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

  const reset = (ganador) => {
    setIstrue(true);
    Array = [null, null, null, null, null, null, null, null, null];

    if (ganador === "X") {
      setScore([scoree[0] + 1, scoree[1]]);
    } else {
      if (ganador === "O") {
        setScore([scoree[0], scoree[1] + 1]);
      } else {
        console.log("EMPATE");
      }
    }

    setTimeout(() => {
      setIstrue(false);
      setState("X");
      setContador(1);
      setContador2(1);
      numeros.forEach((valor) => {
        document.getElementById(valor).innerText = "";
      });
    }, 1000);
  };

  const handleClick = (valor) => {
    console.log(state);
    if (document.getElementById(valor).innerText !== "") {
      return;
    } else {
      let nuevovalor = parseInt(valor);
      Array[nuevovalor] = state;
    }
    if (contador2 >= 5) {
      if (ganador(Array)) {
        reset(state);
      }
    }

    setContador2(contador2 + 1);
    setState(letras[contador]);
    setContador(contador + 1);
    if (contador == 1) {
      setContador(0);
    }
    document.getElementById(valor).innerText = state;
    if (contador2 === 9) {
      reset();
    }
  };

  const resetscore = () => {
    numeros.forEach((valor) => (document.getElementById(valor).innerText = ""));
    setState("X");
    setContador(1);
    setContador2(1);
    setScore([0, 0]);
  };

  return (
    <div className="flex bg-emerald-900 gap-2 justify-evenly items-center tateti:h-full h-screen">
      <div className="text-[150px] pb-[150px] tateti:flex hidden  flex-col gap-4  items-center">
        <div className="h-[160px] font-sans font-medium text-yellow-500">
          TA
        </div>
        <div className="h-[160px] font-sans font-medium text-yellow-500">
          TE
        </div>
        <div className="h-[160px] font-sans font-medium text-yellow-500">
          TI
        </div>
      </div>
      <div className="pt-10 flex flex-col justify-center items-center">
        <div>
          <Tablero handleClick={handleClick} isTrue={isTrue} />
        </div>
        <div className="mt-2 tateti:block w-full">
          <Scoreboard score={scoree} />
        </div>
        <button
          className="w-36 mt-2 h-12 bg-black text-white"
          onClick={resetscore}
        >
          RESET
        </button>
        <div className="mt-[9px] pb-3 text-gray-50">
          Hecho con ❤ por Milton Ibarra
        </div>
      </div>
      <div className="text-[150px] pb-[150px] tateti:flex hidden  flex-col  gap-4 items-center">
        <div className="h-[160px] font-sans font-medium text-yellow-500">
          TA
        </div>
        <div className="h-[160px] font-sans font-medium text-yellow-500">
          TE
        </div>
        <div className="h-[160px] font-sans font-medium text-yellow-500">
          TI
        </div>
      </div>
    </div>
  );
};

export default App;

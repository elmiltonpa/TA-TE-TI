import React, { useState } from "react";
import { Scoreboard } from "./components/Scoreboard";
import { Tablero } from "./components/Tablero";

let Array = [null, null, null, null, null, null, null, null, null];

const App = () => {
  const [state, setState] = useState("X");
  const letras = ["X", "O"];
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
        return true;
      }
    }
    return false;
  };

  const numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];

  const reset = (ganador) => {
    Array = [null, null, null, null, null, null, null, null, null];
    // if (ganador === "X") {
    //   setScore((score[0] += 1));
    // } else {
    //   if (ganador === "O") {
    //     setScore((score[1] += 1));
    //   }
    // }

    if (ganador === "X") {
      console.log("GANADOR X");
      setScore([scoree[0] + 1, scoree[1]]);
    } else {
      if (ganador === "O") {
        console.log("GANADOR O");
        setScore([scoree[0], scoree[1] + 1]);
      } else {
        console.log("EMPATE");
      }
    }

    setTimeout(() => {
      setState("X");
      setContador(1);
      setContador2(1);
      numeros.forEach((valor) => {
        document.getElementById(valor).innerHTML = "";
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
    if (contador2 === 8) {
      reset();
    }
  };

  const resetscore = () => {
    setScore([0, 0]);
  };

  return (
    <div className="flex bg-emerald-900 gap-2 justify-evenly items-center h-screen">
      <div className="text-[150px] pb-[150px] flex flex-col gap-4 items-center">
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
      <div className="flex flex-col justify-center items-center">
        <div>
          <Tablero handleClick={handleClick} />
        </div>
        <div className="mt-2">
          <Scoreboard score={scoree} />
        </div>
        <button
          className="w-36 mt-2 h-12 bg-black text-white"
          onClick={resetscore}
        >
          RESET
        </button>
      </div>
      <div className="text-[150px] pb-[150px] flex flex-col gap-4 items-center">
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

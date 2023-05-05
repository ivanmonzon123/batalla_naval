import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { GetCode } from "../Helpers/GetCode";
import { LocalStorage } from "../Helpers/LocalStorage";
//import { useEffect } from "react";

export default function Home() {
  const generate = GetCode();
  const [localData, setlocalData] = LocalStorage("code", "");
  const navegate = useNavigate();

  const handleSubmint = (e) => {
    e.preventDefault();
     console.log(e.target.value);
     if (e.target.value === "PrimerJugador") {
         navegate("/PrimerJugador");

     } else {
         navegate("/SegundoJugador");
     }
    
  };

  return (
    <div
      className="w-100 d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <div>
        <h2>Seleccione un jugador</h2>
        <div className="text-center">
          <Button
            className="m-2"
            onClick={handleSubmint}
            value="PrimerJugador"
            variant="primary"
          >
            Jugador A
          </Button>
          <Button
            className="m-2"
            onClick={handleSubmint}
            variant="primary"
            value="SegundoJugador"
          >
            Jugador B
          </Button>
        </div>
      </div>
    </div>
  );
}

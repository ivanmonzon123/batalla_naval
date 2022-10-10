import React from "react";
import InssertBarco from "../Componets/InsertBarcos";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../Firebase/FirebaseConf";
import { useNavigate } from "react-router-dom";
const ConfBarcos = () => {
    const navegate = useNavigate();
    let arreglo = []
    const [objPos, setobjPos] = useState(arreglo);

    const handleClick = async ()=>{
        let date = (window.location.pathname).substring(1);
        let matrix = []
        let ataque = "Ataque"+date;  
        let matrixAtaq = [];
        for (let index = 0; index < 10; index++) {
        matrixAtaq.push([' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']);
        }

        if(objPos.length === 5){
            
            for (let index = 0; index < 10; index++) {
                matrix.push([' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']);
            }
            console.log(matrix)
            objPos.map((dato)=>{
                if(dato.pos === 'Vertical'){
                    for (let fila = 0; fila < dato.cant; fila++) {
                        matrix[dato.x++][dato.y]='1'
                    }
                }else{
                    for (let column = 0; column < dato.cant; column++) {
                        matrix[dato.x][dato.y++]='1'
                    }
                }
            })
            console.log(matrix)
        }else{
            console.log(objPos.length)
        }
        

        await setDoc(doc(db, "Jugadores", date), {
            A: matrix[0],
            B: matrix[1],
            C: matrix[2],
            D: matrix[3],
            E: matrix[4],
            F: matrix[5],
            G: matrix[6],
            H: matrix[7],
            I: matrix[8],
            J: matrix[9],
          });
          
          await setDoc(doc(db, "Jugadores", ataque), {
            A: matrixAtaq[0],
            B: matrixAtaq[1],
            C: matrixAtaq[2],
            D: matrixAtaq[3],
            E: matrixAtaq[4],
            F: matrixAtaq[5],
            G: matrixAtaq[6],
            H: matrixAtaq[7],
            I: matrixAtaq[8],
            J: matrixAtaq[9],
          });
          if(date === 'PrimerJugador'){
            navegate('/JugadorA')
          }else{
            navegate('/JugadorB')
          }
          
    }
  return (
    <div
      className="w-100 d-flex justify-content-center align-items-center"
      style={{ height: "85vh" }}
    >
      <div>
        <h3 className="text-center mb-5">Formulario de registro Barcos</h3>
        <InssertBarco Obj={objPos} Name={"Portaviones"} Casillas={"5"} />
        <InssertBarco Obj={objPos} Name={"Acorazado"} Casillas={"4"} />
        <InssertBarco Obj={objPos} Name={"Crucero"} Casillas={"3"} />
        <InssertBarco Obj={objPos} Name={"Submarino"} Casillas={"3"} />
        <InssertBarco Obj={objPos} Name={"Destructor"} Casillas={"2"} />
        <div className="w-100 text-center">
          <Button className="m-2" variant="primary" type="submit" onClick={handleClick}>
            Continuar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfBarcos;

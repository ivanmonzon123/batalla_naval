import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toMatrix } from "../Helpers/toMatrix";
import { changeForm } from "../Helpers/changeForm";
import { useState,useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase/FirebaseConf";

function FormAtaque({ataque, impacto, user, enemy, controlButon}) {
  const [x, setx] = useState(-1);
  const [y, sety] = useState(-1);
  let myAtacks = toMatrix(ataque);
  let myImpact = toMatrix(impacto);
  
    useEffect(() => {
      document.getElementById('buton').disabled = controlButon;
      document.getElementById('buton').textContent  = 'Enviar'
      // console.log('entro aqui')
    }, [impacto]);

    const guardar = async ()=>{
      await setDoc(doc(db, "Jugadores", user), {
        A: myAtacks[0],
        B: myAtacks[1],
        C: myAtacks[2],
        D: myAtacks[3],
        E: myAtacks[4],
        F: myAtacks[5],
        G: myAtacks[6],
        H: myAtacks[7],
        I: myAtacks[8],
        J: myAtacks[9],
      });
      await setDoc(doc(db, "Jugadores", enemy), {
        A: myImpact[0],
        B: myImpact[1],
        C: myImpact[2],
        D: myImpact[3],
        E: myImpact[4],
        F: myImpact[5],
        G: myImpact[6],
        H: myImpact[7],
        I: myImpact[8],
        J: myImpact[9],
      });
      document.getElementById('buton').disabled = true
      document.getElementById('buton').textContent  = 'Esperando...'
    }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(myImpact[x][y] === '1'){
      myImpact[x][y] = 'X'
      myAtacks[x][y] = 'K'
      //myImpact = changeForm(myImpact);
      guardar();
    }else{
      if(myImpact[x][y] === ' '){
        myImpact[x][y] = 'O'
        myAtacks[x][y] = 'F'
        guardar();
      }
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Coordenadas Filas: </Form.Label>
        <Form.Control onChange={(e)=>(setx((e.target.value.charCodeAt(0))-65))} type="text" pattern="^[A-J]+$"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Coordenadas Columnas: </Form.Label>
        <Form.Control onChange={(e)=>(sety((e.target.value)-1))} type="number" min={1} max={10} />
      </Form.Group>
      <Button variant="primary" type="submit" id="buton" >
        Enviar
      </Button>
    </Form>
  );
}

export default FormAtaque;

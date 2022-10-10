import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toMatrix } from "../Helpers/toMatrix";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase/FirebaseConf";

function FormAtaque({ataque, impacto, user, enemy}) {
  const [x, setx] = useState(-1);
  const [y, sety] = useState(-1);
  let myAtacks = toMatrix(ataque);
  let myImpact = toMatrix(impacto);
  // let x = -1
  // let y = -1

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("El ataque papu :v", myAtacks);
    console.log("Parece que le di :v", myImpact);
    console.log('fila: ',x)
    console.log('column: ',y)
    myAtacks[x][y] = 'O'
    if(myImpact[x][y] === '1'){
      myImpact[x][y] = 'X'
    }else{
      myImpact[x][y] = 'O'
    }
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
    console.log("El ataque papu :v", myAtacks);
    console.log("Parece que le di :v", myImpact);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Coordenadas Filas: </Form.Label>
        <Form.Control onChange={(e)=>(setx((e.target.value.charCodeAt(0))-65))} type="text" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Coordenadas Columnas: </Form.Label>
        <Form.Control onChange={(e)=>(sety((e.target.value)-1))} type="number" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default FormAtaque;

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function InssertBarco({Obj,Name,Casillas}) {
    const objetito = {pos:'',x:-1,y:-1,cant: parseInt(Casillas)}
    const [barquito, setbarquito] = useState(objetito);

    const handleSubmit = (e) => {
        e.preventDefault()
    // setbarquito({ ...barquito, [e.target.name]: e.target.value });
    }
    const disableButton = (e)=>{
      console.log(barquito)
        if(barquito.pos!='' && barquito.x!=-1 && barquito.y!=-1){
            // console.log(barquito);
            Obj.push(barquito);
           e.target.disabled = true
           
        }
    }

  return (
    <Form className="d-flex align-items-center mb-3 mt-3" onSubmit={handleSubmit}>
        <h6 style={{width: '110px'}}>{Name} = </h6>
      <Form.Group className="d-flex align-items-center" controlId="">
        <Form.Label className="me-2 ms-3">X: </Form.Label>
        <Form.Control name="x" onChange={(e)=>(barquito.x = parseInt(e.target.value)-1)} type="number" required />
      </Form.Group>
      <Form.Group className="d-flex align-items-center" controlId="">
        <Form.Label className="me-2 ms-3">Y: </Form.Label>
        <Form.Control name="y" onChange={(e)=>(barquito.y = parseInt(e.target.value)-1)} type="number" required />
      </Form.Group>
      <select id="selector" name="pos" onClick={(e)=>(barquito.pos = e.target.value)} className="w-auto me-3 ms-3" required>
        <option disabled selected>
          Selecione una posicion: 
        </option>
        <option>Vertical</option>
        <option>Horizontal</option>
      </select>
      <h6>{Casillas} Casillas</h6>
      <Button  className='text-center' variant="primary" type="submit" onClick={disableButton}>
        Enviar
      </Button>
    </Form>
  );
}

export default InssertBarco;

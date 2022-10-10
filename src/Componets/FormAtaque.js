import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormAtaque() {
  return (
    <Form >
      <Form.Group className="mb-3">
        <Form.Label>Coordenadas Filas: </Form.Label>
        <Form.Control type="number"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Coordenadas Columnas: </Form.Label>
        <Form.Control type="number"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default FormAtaque;
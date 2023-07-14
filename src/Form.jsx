import React, {useRef} from "react";
import emailjs from '@emailjs/browser'

// function From(){
//   const refForm = useRef();
//   const handleSubmit = (event) =>{
//     event.preventDefault();
//   }
// }

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css'
import './Form.css'

function From() {
  const form = document.getElementById("formulario")
  const enviar  = addEventListener("submit", ()=>{

  })
  return (
    <Form id='formulario' name="contacto">
      <Row className="mb-3">

        <Form.Group as={Col} controlId="Name">
          <Form.Control type="hidden" name="form-name" value="contact" />
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre" name="nombre"/>
          <Form.Text>EL nombre no puede contener números</Form.Text>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="example@gmail.com" name="email"/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label>Dirección</Form.Label>
            <Form.Control placeholder="C/ España" name="dirección"/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label>piso</Form.Label>
            <Form.Control placeholder="12" name="piso"/>
        </Form.Group>
        </Row>
        
      <Form.Group className="mb-3" controlId="formGridNumber">
        <Form.Label>Número</Form.Label>
        <Form.Control type='tel' placeholder="634 126 753" name="numero"/>
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Provincia</Form.Label>
          <Form.Control type="text" name="provincia"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Ciuadad</Form.Label>
          <Form.Select name="ciudad" defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Código postal</Form.Label>
          <Form.Control type="number" name="códigopostal"/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Recuérdame" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    // <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdg_vybYPo6K9-QkphahYozylzfkpt8IoE0rzFo8wI6DlgUag/viewform?pli=1" frameborder="1"></iframe>
  );
}

export default From;


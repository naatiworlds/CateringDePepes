import React, {useRef} from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css'
import './Form.css'

function From() {
  
  return (
    <Form name="contact" method="POST" netlify netlify-honeypot="bot-field">
      <Row className="mb-3">
      <Form.Control type="hidden" name="form-name" value="contact"/>

        <Form.Group as={Col} controlId="Name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre" name="nombre"/>
          <Form.Text>EL nombre no puede contener números</Form.Text>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="example@gmail.com" name="correo"/>
          <Form.Text>Debe contener un @ + un dominio ej: .com</Form.Text>
        </Form.Group>
      </Row>
      
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridNumber">
        <Form.Label>Número</Form.Label>
        <Form.Control type='tel' placeholder="634 126 753" name="numero"/>
        <Form.Text>Número existente</Form.Text>
      </Form.Group>

        <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label>Dirección</Form.Label>
            <Form.Control type="text" placeholder="C/ España 15 1ºb" name="direccion"/>
            <Form.Text>Dirección existente</Form.Text>
        </Form.Group>
        
        </Row>

        <Form.Group className="mb-3" controlId="textarea">
            <Form.Label>Comentarios</Form.Label>
            <Form.Control type="textarea" placeholder="Escriba un comentario aquí " name="comentarios"/>
        </Form.Group>

      

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Acepto las políticas del sitio web" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default From;
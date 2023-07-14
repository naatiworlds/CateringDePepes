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
  
  return (
    <Form id='formulario' action="mailto:cateringdepepes@gmail.com">
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
        </Form.Group>
      </Row>
      
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridNumber">
        <Form.Label>Número</Form.Label>
        <Form.Control type='tel' placeholder="634 126 753" name="numero"/>
      </Form.Group>

        <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label>Dirección</Form.Label>
            <Form.Control type="text" placeholder="C/ España" name="direccion"/>
        </Form.Group>
        
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Dirección</Form.Label>
            <Form.Control type="textarea" placeholder="EscrEscriba un comentarioiba " name="comentarios"/>
        </Form.Group>

      

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Recuérdame" />
      </Form.Group>
    </Form>
  );
}

export default From;

// {/* <form name="contact" method="POST" netlify netlify-honeypot="bot-field">
//   <input type="hidden" name="form-name" value="contact" />
//   <div className="contacto">
//     <div className="nombre">
//       <label htmlFor="nombre">Nombre</label>
//       <input type="text" name="nombre" id="nombre" placeholder="Nombre"/>
//     </div>
    
//     <div className="correo">
//       <label htmlFor="correo">Correo</label>
//       <input type="email" name="correo" id="correo" placeholder="Example@gmail.com"/>
//     </div>
    
//     <div className="numero">
//       <label htmlFor="numero">Número</label>
//       <input type="tel" name="numero" id="numero" placeholder="378 78 65 78"/>
//     </div>
//     <div className="direccion">
//       <label htmlFor="direccion">dirección</label>
//       <input type="text" name="direccion" id="direccion" placeholder="direccion"/>
//     </div>
//   </div>
  
//   <br />

//   <textarea name="comentarios" id="comentarios" cols="30" rows="10" placeholder="Escriba un comentario" re></textarea>
  
//   <br />
//   <button className="boton" type="submit">Enviar</button>
// </form> */}

// {/* // <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdg_vybYPo6K9-QkphahYozylzfkpt8IoE0rzFo8wI6DlgUag/viewform?pli=1" frameborder="1"></iframe> */}

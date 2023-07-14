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
    <form id="formulario" name="contacto">
      <label htmlFor="nombre">Nombre</label>
      <input type="text" name="nombre" id="nombre" placeholder="Nombre"/>
      
      <label htmlFor="correo">Correo</label>
      <input type="email" name="correo" id="correo" placeholder="Example@gmail.com"/>
      
      <label htmlFor="numero">Número</label>
      <input type="tel" name="numero" id="numero" placeholder="378 78 65 78"/>
      
      
      <label htmlFor="direccion">dirección</label>
      <input type="text" name="direccion" id="direccion" placeholder="direccion"/>

      <textarea name="comentarios" id="comentarios" cols="50" rows="10" placeholder="Escriba un comentario"></textarea>
      
      <input type="hidden" name="form-name" value="contact" />
      
      <button type="submit">Enviar</button>
    </form>
    // <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdg_vybYPo6K9-QkphahYozylzfkpt8IoE0rzFo8wI6DlgUag/viewform?pli=1" frameborder="1"></iframe>
  );
}

export default From;


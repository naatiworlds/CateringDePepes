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
    <>
      <form name="contacto" method="POST" data-netlify="true">
      <label htmlFor="nombre">Nombre</label>
      <input type="text" name="nombre" id="nombre" placeholder="Su nombre"/>
      <label htmlFor="correo">Correo</label>
      <input type="email" name="correo" id="correo" placeholder="example@gmail.com"/>
      <label htmlFor="numero">número</label>
      <input type="tel" name="numero" id="numero" placeholder="687 78 89 12"/>
      <textarea name="opinion" id="opinion" cols="30" rows="10" placeholder="Añada un comentario aquí"></textarea>
      <button type="submit">Enviar</button>
    </form>
    </>
    // <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdg_vybYPo6K9-QkphahYozylzfkpt8IoE0rzFo8wI6DlgUag/viewform?pli=1" frameborder="1"></iframe>
  );
}

export default From;


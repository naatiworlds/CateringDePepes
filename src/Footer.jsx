import {Button, Card} from 'react-bootstrap';
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.css'
import instagramLogo from './assets/instagram.png'
import facebookLogo from './assets/facebook.webp'
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";


function Footer() {
  return (
    <Card>
        <div className="ifoFooter">
        <Card.Body>
            <Card.Title>Contacto</Card.Title>
            <Card.Text>
            Información de contacto <br />
            Teléfono: 634 126 753 // 600  492  931 <br />
            Gmail: <a href='»mailto:cateringdepepes@gmail.com subject=Consulta%20dietas&body=Deseo%20información%20sobre%20las%Menús»'>cateringdepepes@gmail.com</a> 
            </Card.Text>
            
        </Card.Body>
        <Card.Body>
            <Card.Title>Siguienos en:</Card.Title>
                <Card.Text>
                    <a href='https://www.instagram.com/cateringdepepes/' target='_blank'><BsInstagram></BsInstagram></a>
                    <a href="https://www.facebook.com/profile.php?id=100093870864040" target='_blank'><BsFacebook></BsFacebook></a>
                    <a href="https://wa.me/34634126753" target='_blank'><BsWhatsapp></BsWhatsapp></a>
                </Card.Text>
        </Card.Body>
        </div>
     
      <Card.Body class='copy'>
        <Card.Text>
            © Catering de pepes 2023
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Footer;
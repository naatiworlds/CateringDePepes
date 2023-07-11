import {Button, Card} from 'react-bootstrap';
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.css'
import instagramLogo from './assets/instagram.png'
import facebookLogo from './assets/facebook.webp'


function Footer() {
  return (
    <Card>
        <div className="ifoFooter">
        <Card.Body>
            <Card.Title>Contacto</Card.Title>
            <Card.Text>
            Información de contacto <br />
            Teléfono: 634 126 753 // 600  492  931 <br />
            Gmail: <a href='mailto:cateringdepepes@gmail.com'>cateringdepepes@gmail.com</a> 
            </Card.Text>
            
        </Card.Body>
        <Card.Body>
            <Card.Title>Siguienos en:</Card.Title>
                <Card.Text>
                    <a href='https://www.instagram.com/cateringdepepes/' target='_blank'><img src={instagramLogo} alt="Un pequeño logo de instagram para el footer de la página" /></a>
                    <a href="https://www.facebook.com/profile.php?id=100093870864040" target='_blank'><img src={facebookLogo} alt="Un pequeño logo de facebook para el footer de la página" /></a>
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
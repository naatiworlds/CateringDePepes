import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './pages/Home';
import {BsFillHouseFill} from 'react-icons/bs'
import {BsEnvelopeFill} from 'react-icons/bs'
import {BsCardHeading} from 'react-icons/bs'
import {BsCurrencyEuro} from 'react-icons/bs'
import {BsFillPersonFill} from 'react-icons/bs'
import {BsBookmarkHeartFill} from 'react-icons/bs'
import {BsMicrosoftTeams} from 'react-icons/bs'
import {BsFillImageFill} from 'react-icons/bs'


function Navegacion() {
  return (
    <>
      <Navbar bg='beige' variant='beige' width='100%' expand='lg' stkicy='top'> 
        <Nav>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav.Link href='/'><BsFillHouseFill></BsFillHouseFill>Inicio</Nav.Link>
            <Nav.Link href='/Contacto'><BsEnvelopeFill></BsEnvelopeFill>Contacto</Nav.Link>
            <NavDropdown title="Nuestra carta" href='/nuestraCarta' >

              <NavDropdown.Item href='/NuestraCarta'>Nuestra carta</NavDropdown.Item>
              <NavDropdown.Divider></NavDropdown.Divider>
              
              <NavDropdown.Item href='/MenuPorPrecio'><BsCurrencyEuro></BsCurrencyEuro>Menú por precios</NavDropdown.Item>
              <NavDropdown.Item href='/MenuInfantil'><BsFillPersonFill></BsFillPersonFill>Menú infantil</NavDropdown.Item>
              <NavDropdown.Item href='/MenuALaCarta'><BsBookmarkHeartFill></BsBookmarkHeartFill>Menú a la carta</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='/QuienesSomos'><BsMicrosoftTeams></BsMicrosoftTeams>Quiénes somos</Nav.Link>
            <Nav.Link href='/Fototeca'><BsFillImageFill></BsFillImageFill>Fototeca</Nav.Link>
          </Navbar.Collapse>
          
        </Nav>
      </Navbar>
    </>
  );
}

export default Navegacion;

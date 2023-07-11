import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import Home from './pages/Home';

function Navegacion() {
  return (
    <>
      <Navbar bg='beige' variant='beige' width='100%' expand='lg' stkicy='top'> 
        <Nav>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav.Link href='/'>Inicio</Nav.Link>
            <Nav.Link href='/Contacto'>Contacto</Nav.Link>
            <NavDropdown title="Nuestra carta" href='/nuestraCarta' >

              <NavDropdown.Item href='/NuestraCarta'>Nuestra carta</NavDropdown.Item>
              <NavDropdown.Divider></NavDropdown.Divider>
              
              <NavDropdown.Item href='/MenuPorPrecio'>Menú por precios</NavDropdown.Item>
              <NavDropdown.Item href='/MenuInfantil'>Menú infantil</NavDropdown.Item>
              <NavDropdown.Item href='#'>Menú a la carta</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#'>Quiénes somos</Nav.Link>
            <Nav.Link href='#'>Fototeca</Nav.Link>
          </Navbar.Collapse>
          
        </Nav>
      </Navbar>
    </>
  );
}

export default Navegacion;

import banner from '../assets/banner.jpg'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css'
import { Button } from 'react-bootstrap';
import './Contacto.css'
import Form from '../Form'


function Contacto() {
  return (
    <>
     <header>
        <div className='headerContacto'>
            <div className='mask' >
                <div className='cuadro'>
                <div className='text-white'>
                    <h1 className='mb-3'>Contacto</h1>
                    <Button variant="outline-light"><a href="mailto:cateringdepepes.com">Contacto</a></Button>
                </div>
                </div>
            </div>
        </div>
    </header>
    <Form />
    </>
   
  )
}

export default Contacto

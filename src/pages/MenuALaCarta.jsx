import { Button } from 'react-bootstrap';
import './NuestraCarta.css'

function MenuALaCarta(){
    return (
        <>
        <header>
            <div
                className='headerNuestraCarta'>
                <div className='mask' >
                    <div className='cuadro'>
                    <div className='text-white'>
                        <h1 className='mb-3'>Menú a la carta</h1>
                        <Button variant="outline-light"><a href="/Contacto">Contáctenos</a></Button>
                    </div>
                    </div>
                </div>
            </div>
        </header>
        <section>
            <p>¿Quiere un menú personalizado?</p>
            <p>Diseñamos tu menú a su medida <a href="/Contacto">Contáctenos para más información</a></p>
        </section>
        </>
    )
}

export default MenuALaCarta
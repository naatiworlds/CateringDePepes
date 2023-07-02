import { Button } from 'react-bootstrap';
import './NuestraCarta.css'

function NuestraCarta(){
    return (
        <>
        <header>
            <div
                className='headerNuestraCarta'>
                <div className='mask' >
                    <div className='cuadro'>
                    <div className='text-white'>
                        <h1 className='mb-3'>Nuestra carta</h1>
                        <Button variant="outline-light"><a href="/MenuPorPrecio">Mira nuestros menús</a></Button>
                    </div>
                    </div>
                </div>
            </div>
        </header>
        <section>
            <p>Diseñamos tu menú a su medida <a href="/MenuPorPrecio">mire algunos ejemplos</a></p>
        </section>
        </>
    )
}

export default NuestraCarta
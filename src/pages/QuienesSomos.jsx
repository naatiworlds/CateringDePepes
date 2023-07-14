import { Button } from 'react-bootstrap';
import './NuestraCarta.css'

function QuienesSomos(){
    return (
        <>
        <header>
            <div
                className='headerNuestraCarta'>
                <div className='mask' >
                    <div className='cuadro'>
                    <div className='text-white'>
                        <h1 className='mb-3'>Quienes somos</h1>
                        <Button variant="outline-light"><a href="/Contacto">Contáctenos</a></Button>
                    </div>
                    </div>
                </div>
            </div>
        </header>
        <section>
            <p>Somos una empresa dedicada al servicio de caterings <br></br>
            ofrecemos un servicio extraordinario de categoría muy profesional, 
            una calidad gourmet y unos servicios inigualables</p>
            <p>Hacemos que su mejor momento se convierta en un momento inolvidable</p>
            <p>Si está interesado <a href="/Contacto">Contáctenos para más información</a></p>
        </section>
        </>
    )
}

export default QuienesSomos
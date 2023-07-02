import { Button } from 'react-bootstrap';
import './MenuPorPrecio.css'

function MenuPorPrecio(){
    return (
        <>
            <header>
        <div className='headerMenuPorPrecio'>
            <div className='mask' >
                <div className='cuadro'>
                <div className='text-white'>
                    <h1 className='mb-3'>Menú por precios</h1>
                    <Button variant="outline-light"><a href="mailto:cateringdepepes.com">Contacto</a></Button>
                </div>
                </div>
            </div>
        </div>
    </header>
    <section>
        <p></p>
    </section>
    </>
    )
}

export default MenuPorPrecio
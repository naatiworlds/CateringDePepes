import { Button } from 'react-bootstrap';
import './MenuInfantil.css'

function MenuInfantil(){
    return (
        <>
        <header>
            <div className='headerMenuInfantil'>
                <div className='mask' >
                    <div className='cuadro'>
                    <div className='text-white'>
                        <h1 className='mb-3'>Menú infantil</h1>
                        <Button variant="outline-light"><a href="mailto:cateringdepepes.com">Contacto</a></Button>
                    </div>
                    </div>
                </div>
            </div>
        </header>
        <section class='ManuInfantil'>
            <main>
                <h2>Menú infantil</h2>
            </main>
            <article class='entrantes'>
                <h3>Entrantes</h3>
                <p>A elergir entre:</p>
            </article>
            <div class="opciones">
                <article class='opcion1'>
                    <h3>Opción 1</h3>
                    <p>PATATAS FRITAS</p>

                    <p>GALLETAS OREO</p>

                    <p>EMPANADA DE JAMÓN YORK Y QUESO</p>

                    <p>BROCHETAS DE FRUTA</p>

                    <p>FRUTOS SECOS</p>
                </article>
                <article class='opcion2'>
                    <h3>Opción 2</h3>
                    <p>PATATAS FRITAS</p>

                    <p>GOLOSINAS</p>

                    <p>SALADITOS</p>

                    <p>DONUTS</p>

                    <p>EMBUTIDOS VARIADOS</p>

                    <p>FRUTOS SECOS</p>

                    <p>BROCHETAS DE FRUTA</p>
                </article>
                <article class='opcion3'>
                    <h3>Opción 3</h3>
                    <p>CROISSANT DE CHOCOLATE</p>

                    <p>SANDWICH DE JAMÓN YORK Y QUESO</p>

                    <p>PATATAS FRITAS (VARIOS TIPOS)</p>

                    <p>GUSANITOS BROCHETA DE FRUTA</p>
                </article>
            </div>
            <article class='platoPrincipal'>
                <h3>Plato principal</h3>
                <p>A elegir entre:</p>

            <div className="opciones">
                <article class='opcion1'>
                    <h3>Opción 1</h3>
                    <p>PERRITO CALIENTE</p>
                </article>
                <article class='opcion1'>
                    <h3>Opción 2</h3>
                    <p>MINIHAMBURGUESA</p>
                </article>
                <article class='opcion1'>
                    <h3>Opción 3</h3>
                    <p>NUGUET DE POLLO</p>
                </article>
            </div>


            </article>
            <article class='individual1'>
                <h3>Bebidas</h3>
                <p>Zumo, agua, refrescos</p>
            </article>
        </section>
        </>
    )
}

export default MenuInfantil
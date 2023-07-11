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
        <section class='Menu1'>
            <main>
                <h2>Menú nº 1</h2>
            </main>
            <article class='entrantes'>
                <h3>Entrantes</h3>
                <p>Delicias de cazón en adobo</p>
                <p>Verbena de croquetas de la abuela</p>
                <p>Feria de quesos</p>
                <p>Surtido de embutidos ibéricos</p>
            </article>
            <article class='compartir'>
                <h3>Para compartir en mesa</h3>
                <p>Barquetas de ensaladilla</p>
                <p>Jamón ibérico</p>
                <p>Gambas blancas de Huelva</p>
            </article>
            <div class="individual">
                <article class='individual1'>
                    <h3>Individual 1er plato</h3>
                    <p>Cóctel de marisco</p>
                    <p>o</p>
                    <p>Salmorejo cordobés con jamón ibérico</p>
                </article>
                <article class='individual2'>
                    <h3>Individual 2º plato</h3>
                    <p>Solomillo (con salsa a elegir) acompañado <br></br> de patatas parisinas a las finas hierbas</p>
                    <p>o</p>
                    <p>Mero a la roteña</p>
                </article>
            </div>
            <article class='postres'>
                <h3>Postres</h3>
                <p>Tarta helada o surtido de mini pasteles gourmet</p>
            </article>
            <article class='bebidas'>
                <h3>Bebidas</h3>
                <p>Agua mineral, refrescos, cervezas, fino moscatel, vino blanco, vino tinto</p>
            </article>
        </section>
        <hr />
        <section class='Menu2'>
            <main>
                <h2>Menú nº 2</h2>
            </main>
            <article class='entrantes'>
                <h3>Entrantes</h3>
                <p>Degustación de salmorejo cordobés con jamón ibérico</p>
                <p>Delicias de cazón en adobo</p>
                <p>Verbenas de croquetas de la abuela</p>
                <p>Lagrimitas de pollo con salsa especial</p>
                <p>Tartaletas variadas</p>
                <p>Delicias de pulpo</p>
                <p>Gran mesa buffet de quesos españoles</p>
                <p>Chicharrones en directo</p>
                <p>Surtido ibérico acompañado de salazones y ahumados de Barbate</p>
            </article>

            <article class='compartir'>
                <h3>Para compartir en mesa</h3>
                <p>Gambas de Huelva</p>
                <p>Picatostes con pate a las finas hierbas</p>
            </article>
            <div class="individual">
                <article class='individual1'>
                    <h3>Individual 1er plato</h3>
                    <p>Surtido de embutidos ibéricos</p>
                    <p>Cóctel de marisco</p>
                    <p>Sorbete de limón con aromas de cava</p>
                </article>
                <article class='individual1'>
                    <h3>Individual 2º plato</h3>
                    <p>Solomillo a la castellana con guarnición de patatas parisinas a las finas hierbas</p>
                    <p>Lomo de bacalao con guarnición de verduras al estilo del cheff</p>
                </article>
            </div>
            <article class='individual1'>
                <h3>Postres</h3>
                <p>Tarta helada o surtido de mini pasteles gourmet</p>
            </article>
            <article class='individual1'>
                <h3>Bebidas</h3>
                <p>Agua mineral, refrescos, cervezas, fino moscatel, vino blanco, vino tinto</p>
            </article>
        </section>
        <hr />
        <section class='Menu3'>
            <main>
                <h2>Menú nº 3</h2>
            </main>
            <article class='entrantes'>
                <h3>Entrantes</h3>
                <p>Degustación de salmorejo cordobés con jamón ibérico</p>
                <p>Delicias de cazón en adobo</p>

                <p>Verbenas de croquetas de la abuela</p>

                <p>Lagrimitas de pollo con salsa especial</p>

                <p>Tartaletas variadas</p>

                <p>Delicias de pulpo</p>

                <p>Cazuela de barbecho gallego</p>

                <p>Barquillos de albóndigas de ternera de retinto de la Janda a los 4 quesos</p>

                <p>Gran mesa de quesos españoles</p>

                <p>Chicharrones en directo</p>

                <p>Cortadores de jamín en directo donde se cortará jamón ibérico</p>

                <p>Tortillas de camarones en directo</p>

                <p>Surtido ibérico acompañado de salazones y ahumados de Barbate</p>

                <p>(Mesa dehesa y mar)</p>
            </article>
            <article class='compartir'>
                <h3>Para compartir en mesa</h3>
                <p>Gambas blancas de Huelva</p>

                <p>Zamburiñas al chimichurri</p>

                <p>o</p>

                <p>Picatostes con pate a las finas hierbas</p>
            </article>
            <div class="individual">
                <article class='individual1'>
                    <h3>Individual 1er plato</h3>
                    <p>Cóctel de marisco</p>

                    <p>Sorbete de limón con aromas de cava</p>
                </article>
                <article class='individual1'>
                    <h3>Individual 2º plato</h3>
                    <p>A elegir entre 4 opciones:</p>

                    <p>Arroz negro marinero con Ali-Oli</p>

                    <p>Arroz con pollo campero</p>

                    <p>Arroz con carne ibérica</p>

                    <p>Carne al toro de lidia en salsa castellana</p>
                </article>
            </div>
            <article class='individual1'>
                <h3>Postres</h3>
                <p>Tarta helada o surtido de mini pasteles gourmet</p>
            </article>
            <article class='individual1'>
                <h3>Bebidas</h3>
                <p>Agua mineral, refrescos, cervezas, fino moscatel, vino blanco, vino tinto</p>
            </article>
        </section>
    </>
    )
}

export default MenuPorPrecio
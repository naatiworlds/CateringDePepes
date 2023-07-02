import Image404 from '../assets/404.svg'
import './NoPage.css'

function NoPage(){
    return (
        <div class="container">
            <img class="ops" src={Image404} />
            <br />
            <br />
            <h3>Lo sentimos :(
                <br /> Esta dirección no existe para esta página.</h3>
            <br />
            <a class="buton" href="/">Vuelve al Inicio</a>
        </div>
    )
}

export default NoPage
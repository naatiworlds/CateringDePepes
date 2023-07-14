import '../App.css'
import Imagen from '../Imagen'
import banner1 from '../assets/serigrafia.png'
import banner2 from '../assets/banner2.png'
import '../Imagen.css'


function Home() {
  return (
    <>
      <section class="banner">
        <Imagen banner={banner1} />
        <Imagen banner={banner2} />
      </section>
      <section class='presentación'>
        <p>Una empresa dedicada al catering a nivel profesional</p>
      </section>
    </>
  )
}

export default Home

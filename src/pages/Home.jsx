import '../App.css'
import Imagen from '../Imagen'
import banner1 from '../assets/seriografia.jpg'
import banner2 from '../assets/banner2.jpg'
import '../Imagen.css'


function Home() {
  return (
    <>
      <section class="banner">
        <Imagen banner={banner1} />
        <Imagen banner={banner2} />
      </section>
      
    </>
  )
}

export default Home

import { Outlet, Link } from "react-router-dom";
import logo from '../assets/logo.png'
import Navegacion from '../Navegacion'
import '../Navegation.css'
import Footer from '../Footer'

const Layout = () => {
  return (
    <>
      <header className='Header'>
        <div className="titulo">
          <img src={logo} alt="Imagen con la información de contacto de la empresa"/>{'  '}
          <h1>www.cateringdepepes.com</h1>
        </div>
        <Navegacion />
      </header>
      <footer>
        <Footer />
      </footer>
      <Outlet />
    </>
  )
};

export default Layout;


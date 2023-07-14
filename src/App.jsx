import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Contacto from "./pages/Contacto";
import NuestraCarta from "./pages/NuestraCarta";
import MenuPorPrecio from "./pages/MenuPorPrecio";
import MenuInfantil from "./pages/MenuInfantil"
import MenuALaCarta from "./pages/MenuALaCarta";
import QuienesSomos from "./pages/QuienesSomos";
import Fototeca from "./pages/Fototeca";
import NoPage from "./pages/NoPage";

function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="NuestraCarta" element={<NuestraCarta />} />
        <Route path="MenuPorPrecio" element={<MenuPorPrecio />} />
        <Route path="MenuInfantil" element={<MenuInfantil />} />
        <Route path="MenuALaCarta" element={<MenuALaCarta />} />
        <Route path="QuienesSomos" element={<QuienesSomos />} />
        <Route path="Fototeca" element={<Fototeca />} />
        <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Contacto from "./pages/Contacto";
import NuestraCarta from "./pages/NuestraCarta";
import MenuPorPrecio from "./pages/MenuPorPrecio";
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
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";
import MeusPedidos from "../pages/MeusPedidos";
import Categorias from "../pages/Categorias";
import NotFound404 from "../components/NotFound404";
import Cadastre from "../pages/Cadastre";


const Paths = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/produtos" element={<ProductListingPage />} />
        <Route path="/productview" element={<ProductViewPage />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/pedidos" element={<MeusPedidos />} />
        <Route path="/cadastre" element={<Cadastre/>}/>
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Paths;

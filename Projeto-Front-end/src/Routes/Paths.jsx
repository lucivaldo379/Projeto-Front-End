import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import ProductViewPage from "../pages/ProductViewPage";
import Categorias from "../pages/Categorias";
import MeusPedidos from "../pages/MeusPedidos";


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
      </Routes>
    </BrowserRouter>
  );
};

export default Paths;

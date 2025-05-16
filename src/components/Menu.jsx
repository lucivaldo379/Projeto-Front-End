import React from "react";
import { useLocation } from "react-router-dom"; // Importando o useLocation

const Menu = () => {
  const location = useLocation(); // Pega a URL atual
  const currentPath = location.pathname; // Caminho da página atual

  // Itens do Menu com seus respectivos caminhos
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Produtos", path: "/produtos" },
    { name: "Categorias", path: "/categorias" },
    { name: "Meus Pedidos", path: "/meus-pedidos" }
  ];

  return (
    <nav>
      <div className="container">
        <div className="d-flex justify-content-start gap-4 fw-medium text-secondary small">
          {/* Mapeando itens do menu */}
          {menuItems.map((item, index) => {
            const isActive = currentPath === item.path; // Verifica se o item está ativo

            return (
              <button
                key={index}
                className={`btn  ${isActive ? " bg-pink" : "text-secondary"}`}
                style={isActive ? { color: "#e83e8c" } : { color: "#706f6f" }} // Estilo condicional
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Menu;

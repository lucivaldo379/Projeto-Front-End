import { NavLink } from "react-router-dom";
import Logo from "../Logo";


const Header = () => {
  return (
    <header className="bg-light shadow-sm py-3">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
          <div>
            <Logo />
          </div>

          <div className="flex-grow-1">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Pesquisar produto..."
              />
              <span className="input-group-text bg-white border-start-0">
                <i className="bi bi-search"></i>
              </span>
            </div>
          </div>

          <div className="d-flex gap-2">
            <NavLink to="/cadastre"><button className="btn btn-link text-decoration-underline text-dark">
              Cadastre-se
            </button></NavLink>
            <button className="btn text-white" style={{ backgroundColor: '#c73364' }}>
              Entrar
            </button>
          </div>

          <div>
            <img
              src="/src/assets/mini-cart.svg"
              alt="Carrinho de compras"
              style={{ width: '20px' }}
            />
          </div>
        </div>

        {/* Menu de navegação */}
        <div className="mt-4">
          <ul className="nav">
            <li className="nav-item">
              <NavLink
                to="/home"
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/produtos"
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              >
                Produtos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/categorias"
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              >
                Categorias
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/pedidos"
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              >
                Meus Pedidos
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;



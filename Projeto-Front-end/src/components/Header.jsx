import Logo from "./Logo";
import { Link } from "react-router-dom";


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
                        <button className="btn btn-link text-decoration-underline text-dark">Cadastre-se</button>
                        <button className="btn text-white" style={{  backgroundColor: '#c73364'}}>Entrar</button>

                    </div>

                    {/* Carrinho */}
                    <div>
                        <img 
                            src="/src/assets/mini-cart.svg" 
                            alt="Carrinho de compras" 
                            style={{ width: '20px' }} 
                        />
                    </div>
                </div>
<br /> <br />
               <div id="menu">
    <ul className="nav">
        <li className="nav-item">
              <Link to="/home" className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
            <Link to="/produtos" className="nav-link">Produtos</Link>
        </li>
        <li className="nav-item">
            <Link to="/categorias" className="nav-link">Categorias</Link>
        </li>
        <li className="nav-item">
            <Link to="/pedidos" className="nav-link">Meus Pedidos</Link>
        </li>
    </ul>
</div>

            </div>
        </header>
    );
}

export default Header;

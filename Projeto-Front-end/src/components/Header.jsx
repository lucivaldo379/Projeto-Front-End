import Logo from "./Logo";

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
            <a href="#" className="nav-link active">Home</a>
        </li>
        <li className="nav-item">
            <a href="#" className="nav-link">Produtos</a>
        </li>
        <li className="nav-item">
            <a href="#" className="nav-link">Categorias</a>
        </li>
        <li className="nav-item">
            <a href="#" className="nav-link">Meus Pedidos</a>
        </li>
    </ul>
</div>

            </div>
        </header>
    );
}

export default Header;

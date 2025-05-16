import Logo from "./Logo";
import SearchFilter from "./FilterGroup";
import BuyBox from "./BuyBox";
import Menu from "./Menu"; // Importando o componente Menu

const Header = () => {
  const itemCount = 2; // Pode vir do contexto futuramente

  return (
    <header className="bg-white shadow-sm w-100">
      {/* Linha 1 */}
      <div className="container py-3">
        <div className="row align-items-center">
          {/* Logo */}
          <div className="col-auto">
            <Logo />
          </div>

          {/* Campo de busca */}
          <div className="col">
            <SearchFilter />
          </div>

          {/* Ações do usuário */}
          <div className="col-auto d-flex align-items-center gap-3">
            <button className="btn btn-link text-secondary fw-semibold">Cadastre-se</button>
            <button className="btn text-white" style={{ backgroundColor: "#e83e8c", borderRadius: "8px" }}>
              Entrar
            </button>

            <BuyBox itemCount={itemCount} />
          </div>
        </div>
      </div>

      {/* Linha 2 - Menu */}
      <Menu /> {/* Aqui está o seu menu importado e renderizado */}
    </header>
  );
};

export default Header;

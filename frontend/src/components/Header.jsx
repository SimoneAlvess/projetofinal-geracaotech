import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
import logoHeader from "../assets/logo-header.svg";
import miniCart from "../assets/mini-cart.svg";
import { HeaderContainer } from "../styles/StylesGlobal";

const Header = () => {
  // FUNÇÃO PARA CAMPO DE BUSCA
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleResearch = (event) => {
    event.preventDefault();
     if (search.trim()) {
       navigate(`/products?filter=${encodeURIComponent(search)}`);
     }
  };

  return (
    <>
      <HeaderContainer>
        <div className="navbar navbar-expand-lg">
          <div className="container">
            <Logo src={logoHeader} alt={"Logo Header"} />
            {/* Campo de busca */}
            <form className="position-relative" onSubmit={handleResearch}>
              <input type="search" placeholder="Pesquisar produto..." value={search} onChange={(e) => setSearch(e.target.value)} />
              <button type="submit" className="position-absolute top-50 right-0 translate-middle bg-transparent border-0">
                <i className="pi pi-search" style={{ fontSize: "1.3rem" }}></i>
              </button>
            </form>
            <div className="d-flex align-items-center gap-4">
              <a className="register" href="">
                Cadastre-se
              </a>
              <a className="login" href="">
                Entrar
              </a>
              <img src={miniCart} alt="Carrinho de compras" />
            </div>
          </div>
        </div>
        {/* Navegação principal */}
        <nav>
          <div className="container">
            <ul className="navbar-nav d-flex flex-row gap-4">
              <li className="nav-item">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/products"}>Produtos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/categorias"}>Categorias</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/meuspedidos"}>Meus Pedidos</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </HeaderContainer>
    </>
  );
};

export default Header;

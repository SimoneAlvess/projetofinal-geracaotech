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
        <div className="container">
          <Logo src={logoHeader} alt={"Logo Header"} />
          {/* Campo de busca */}
          <form className="position-relative" onSubmit={handleResearch}>
            <input className="ps-4 pe-5" type="search" placeholder="Pesquisar produto..."  value={search} onChange={(e) => setSearch(e.target.value)} />
            <button type="submit" className="position-absolute top-50 right-0 translate-middle bg-transparent border-0">
              <i className="pi pi-search" style={{ fontSize: "1.3rem" }}></i>
            </button>
          </form>
          {/* Área de redirecionamento */}
          <div className="d-flex gap-4 align-items-center">
            <a className="register" href="">
              Cadastre-se
            </a>
            <a className="login" href="">
              Entrar
            </a>
          </div>
          <div className="cart">
            <img src={miniCart} alt="Carrinho de compras" />
            <span>2</span>
          </div>
        </div>
        {/* Navegação principal */}
        <nav className="container">
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/products"}>Produtos</NavLink>
            </li>
            <li>
              <NavLink to={"/categorias"}>Categorias</NavLink>
            </li>
            <li>
              <NavLink to={"/meuspedidos"}>Meus Pedidos</NavLink>
            </li>
          </ul>
        </nav>
      </HeaderContainer>
    </>
  );
};

export default Header;

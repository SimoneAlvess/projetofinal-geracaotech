import { FooterContainer } from "../styles/StylesGlobal";
import Logo from "./Logo";
import logoFooter from "../assets/logo-footer.svg";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.svg";
import InfoComponent from "../components/InfoComponent";

const Footer = () => {
  const informations = [
    { text: "Sobre Drip Store", link: "/about" },
    { text: "Segurança", link: "/segurança" },
    { text: "Wishlist", link: "/wishlist" },
    { text: "Blog", link: "/blog" },
    { text: "Trabalhe conosco", link: "/trabalheconosco" },
    { text: "Meus Pedidos", link: "/meuspedidos" },
  ];

  const categories = [
    { text: "Camisetas", link: "/camisetas" },
    { text: "Calças", link: "/calças" },
    { text: "Bonés", link: "/bones" },
    { text: "Headphones", link: "/headphones" },
    { text: "Tênis", link: "/tenis" },
  ];

  const contact = [{ text: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161" }, { text: <br /> }, { text: "(85) 3051-3411" }];

  return (
    <FooterContainer>
      <div className="container">
        <div className="row">
          {/* Área de logo e rede socias */}
          <div className="col-md-5 div-description">
            <Logo src={logoFooter} alt={"Logo Footer"} />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae harum alias, officia expedita omnis
              <br /> dolorem dolorum, asperiores.
            </p>
            <div className="d-flex gap-4 pt-3 pb-4">
              <a href="https://www.facebook.com/digitalcollegebr" target="_blank" rel="noopener noreferrer">
                <img src={Facebook} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/digitalcollegebr/" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="https://www.twitter.com/eaicollegers" target="_blank" rel="noopener noreferrer">
                <img src={Twitter} alt="Twitter" />
              </a>
            </div>
          </div>
          {/* Área de informações */}
          <div className="col-md-2 lh-lg">
            <InfoComponent title="Informações" informations={informations} />
          </div>
          <div className="col-md-2 lh-lg">
            <InfoComponent title="Categorias" informations={categories} />
          </div>
          <div className="col-md-3">
            <InfoComponent title="Contato" informations={contact} />
          </div>
        </div>
        {/* Área de copyright */}
        <div className="text-center">
          <hr />
          <p>&copy; 2024 Digital Store</p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;

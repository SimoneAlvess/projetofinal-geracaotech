import Gallery from "../components/Gallery";
import Section from "../components/Section";
import Helmet from "react-helmet";
import ProductListing from "../components/ProductListing";
import { ImgContainer, SectionContainerHome, IconsContainer } from "../styles/StylesGlobal";

const images = [{ src: "../public/home-slide-1.jpeg" }, { src: "../public/home-slide-2.jpeg" }, { src: "../public/home-slide-3.jpeg" }, { src: "../public/home-slide-4.jpeg" }, { src: "../public/home-slide-5.jpeg" }, { src: "../public/home-slide-6.jpeg" }, { src: "../public/home-slide-7.jpeg" }, { src: "../public/home-slide-8.jpeg" }];

const products = [
  { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-1.jpeg", price: 200, priceDiscount: 149.9 },
  { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-2.jpeg", price: 300, priceDiscount: 250 },
  { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-3.jpeg", price: 100, priceDiscount: 89.9 },
  { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-4.jpeg", price: 150, priceDiscount: 120 },
  { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-5.jpeg", price: 330, priceDiscount: 280 },
  { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-3.jpeg", price: 190.99, priceDiscount: 160 },
  { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-1.jpeg", price: 230, priceDiscount: 210.99 },
  { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-2.jpeg", price: 410, priceDiscount: 350 },
];

const HomePage = () => {
  return (
    <>
      <Helmet title="Home | Digital Store" />
      <Gallery width="1440px" height="681px" images={images} />
      <Section title="Coleções em destaque" titleAlign="center">
        <ImgContainer>
          <div className="position-relative">
            <img className="img-card" src="/public/collection-1.png" alt="Imagem 1" />
            <a className="position-absolute" href="/products">
              <button>Comprar</button>
            </a>
          </div>
          <div className="position-relative">
            <img className="img-card" src="/public/collection-2.png" alt="Imagem 1" />
            <a className="position-absolute" href="/products">
              <button>Comprar</button>
            </a>
          </div>
          <div className="position-relative">
            <img className="img-card" src="/public/collection-3.png" alt="Imagem 1" />
            <a className="position-absolute" href="/products">
              <button>Comprar</button>
            </a>
          </div>
        </ImgContainer>
      </Section>
      <Section title="Coleções em destaque" titleAlign="center">
        <IconsContainer className="d-flex justify-content-center align-items-center gap-4">
          <a href="/products">
            <img src="../public/camisa.png" alt="camisa" />
          </a>
          <a href="/products">
            <img src="../public/calça.png" alt="calça" />
          </a>
          <a href="/products">
            <img src="../public/calça.png" alt="calça" />
          </a>
          <a href="/products">
            <img src="../public/fone.png" alt="fone" />
          </a>
          <a href="/products">
            <img src="../public/tenis.png" alt="tenis" />
          </a>
        </IconsContainer>
      </Section>
      <Section
        title="Produtos em alta"
        titleAlign="left"
        link={{
          href: "/products",
          text: "Ver todos",
          icon: "pi pi-arrow-right",
        }}
        className="d-flex justify-content-between"
      >
        <ProductListing products={products} />
      </Section>
      <SectionContainerHome className="container-fluid">
        <div className="row">
          <div className="col-6">
            <img src="../public/tênis.png" alt="tênis" width={"535px"} />
          </div>
          <div className="col-6">
            <h6>Oferta especial</h6>
            <h2>Air Jordan edição de colecionador</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In explicabo laudantium sed dignissimos exercitationem labore debitis. Explicabo minus doloribus, illo sunt ea tenetur aliquam asperiores minima! Saepe, quod nisi. Dolore!</p>
            <a href="/products">
              <button>Ver Ofertas</button>
            </a>
          </div>
        </div>
      </SectionContainerHome>
    </>
  );
};

export default HomePage;

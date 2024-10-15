import Gallery from "../components/Gallery";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing"
import { ImgContainer } from "../styles/StylesGlobal";

const images = [
  { src: "../public/home-slide-1.jpeg" }, 
  { src: "../public/home-slide-2.jpeg" }, 
  { src: "../public/home-slide-3.jpeg" }, 
  { src: "../public/home-slide-4.jpeg" }, 
  { src: "../public/home-slide-5.jpeg" }, 
  { src: "../public/home-slide-6.jpeg" }, 
  { src: "../public/home-slide-7.jpeg" }, 
  { src: "../public/home-slide-8.jpeg" }];

const products = [
  { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-1.jpeg", price: 200, priceDiscount: 149.9 },
  { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-2.jpeg", price: 300, priceDiscount: 250 },
  { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-3.jpeg", price: 100, priceDiscount: 89.90 },
  { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-4.jpeg", price: 150, priceDiscount: 120 },
  { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-5.jpeg", price: 330, priceDiscount: 280 },
  { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-3.jpeg", price: 190.99, priceDiscount: 160 },
  { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-1.jpeg", price: 230, priceDiscount: 210.99 },
  { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-2.jpeg", price: 410, priceDiscount: 350 },
];

const HomePage = () => {
  return (
    <>
      <Gallery width="1440px" height="681px" images={images} />
      <Section title="Coleções em destaque" titleAlign="center">
        <ImgContainer>
          <img src="/public/collection-1.png" alt="Imagem 1" />
          <img src="/public/collection-2.png" alt="Imagem 2" />
          <img src="/public/collection-3.png" alt="Imagem 3" />
        </ImgContainer>
      </Section>
      <Section title="Produtos em alta" titleAlign="left">
        <ProductListing products={products} />
      </Section>
    </>
  );
};

export default HomePage;

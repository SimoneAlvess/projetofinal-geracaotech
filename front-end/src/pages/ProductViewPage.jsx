import Gallery from "../components/Gallery";
import { ProductViewContainer } from "../styles/StylesGlobal";
import Helmet from "react-helmet";
import BuyBox from "../components/BuyBox";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";
import ProductOptions from "../components/ProductOptions";

const ProductViewPage = () => {
  const images = [{ src: "../public/carrousel-product-1.jpg" }, { src: "../public/carrousel-product-4.jpg" }, { src: "../public/carrousel-product-3.jpg" }, { src: "../public/carrousel-product-1.jpg" }, { src: "../public/carrousel-product-2.jpg" }];

  const products = [
    { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-1.jpeg", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-2.jpeg", price: 300, priceDiscount: 250 },
    { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-3.jpeg", price: 100, priceDiscount: 89.9 },
    { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-4.jpeg", price: 150, priceDiscount: 120 },
  ];

  const sizes = ["36", "37", "38", "39", "40"];
  const colors = ["#d585ad", "#6FEEFF", "#807f7f", "#6D70B7"];

  return (
    <>
      <Helmet title="Produto | Digital Store" />
      <ProductViewContainer>
        <div className="container product-container">
          <Gallery images={images} showThumbs width="700px" height="570px" radius="4px" />
          <div>
            <BuyBox name="Tênis Nike Revolution 6 Next Nature Masculino" reference="Casual | Nike | REF: 123456" stars={4.5} rating="(90 avaliações)" price="299,90" priceDiscount="249,90" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nesciunt a ratione dolor consequuntur neque perspiciatis ipsam impedit, voluptates ad doloremque.">
              <div className="options-product">
                <h6>Tamanho</h6>
                <ProductOptions options={sizes} shape="square" radius="4px" type="text" />
                <h6>Tamanho</h6>
                <ProductOptions options={colors} shape="circle" type="color" />
              </div>
            </BuyBox>
          </div>
        </div>
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
      </ProductViewContainer>
    </>
  );
};

export default ProductViewPage;

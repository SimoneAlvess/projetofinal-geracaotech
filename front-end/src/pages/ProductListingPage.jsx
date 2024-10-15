import { ProductListingContainer } from "../styles/StylesGlobal";
import FilterGroup from "../components/FilterGroup";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";

const ProductListingPage = () => {
  const markOptions = [
    { text: "Adidas", value: "adidas" },
    { text: "Nike", value: "nike" },
    { text: "Pruma", value: "pruma" },
    { text: "CocaCola", value: "cocaCola" },
  ];

  const categoryOptions = [
    { text: "Esporte e lazer", value: "esporteLazer" },
    { text: "Casual", value: "casual" },
    { text: "Utilitário", value: "utilitario" },
    { text: "Corrida", value: "corrida" },
  ];

  const genderOptions = [
    { text: "Masculino", value: "masculino" },
    { text: "Feminino", value: "feminino" },
    { text: "Unisex", value: "unisex" },
  ];

  const stateOptions = [
    { text: "Novo", value: "novo" },
    { text: "Usado", value: "usado" },
  ];

  const products = [
    { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-1.jpeg", price: 200, priceDiscount: 149.9 },
    { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-2.jpeg", price: 300, priceDiscount: 250 },
    { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-3.jpeg", price: 100, priceDiscount: 89.9 },
    { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-4.jpeg", price: 150, priceDiscount: 120 },
    { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-5.jpeg", price: 330, priceDiscount: 280 },
    { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-3.jpeg", price: 190.99, priceDiscount: 160 },
    { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-1.jpeg", price: 230, priceDiscount: 210.99 },
    { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-2.jpeg", price: 410, priceDiscount: 350 },
    { name: "K-Swiss V8 - Masculino", image: "../public/product-thumb-3.jpeg", price: 100, priceDiscount: 89.9 },
  ];

  return (
    <>
      <ProductListingContainer className="container">
        <aside>
          <div className="select-container">
            <label htmlFor="opcoes">Ordenar por</label>
            <select name="opcoes" id="opcoes" className="form-select form-select-lg">
              <option value="">Preço: Menor preço</option>
              <option value="">Preço: Maior preço</option>
            </select>
          </div>
          <div className="filter-container">
            <h6>Filtrar por</h6>
            <hr />
            <FilterGroup title="Marca" inputType="checkbox" options={markOptions} />
            <FilterGroup title="Categoria" inputType="checkbox" options={categoryOptions} />
            <FilterGroup title="Gênero" inputType="checkbox" options={genderOptions} />
            <FilterGroup title="Estado" inputType="radio" options={stateOptions} />
          </div>
        </aside>
        <Section title="Total de produtos encontrados" titleAlign="left">
          <ProductListing products={products} columns={3} />
        </Section>
      </ProductListingContainer>
    </>
  );
};

export default ProductListingPage;

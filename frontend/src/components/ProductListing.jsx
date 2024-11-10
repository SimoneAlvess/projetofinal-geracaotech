import ProductCard from "../components/ProductCard";
import { ProductContainer } from "../styles/StylesGlobal";

const ProductListing = ({ products, columns }) => {
  return (
    <>
      <ProductContainer className={columns === 3 ? "three-columns" : "four-columns"}>
        {products.map((product, index) => (
          <ProductCard key={index} image={product.image} name={product.name} price={product.price} priceDiscount={product.priceDiscount} size={columns === 3 ? "small" : ""} />
        ))}
      </ProductContainer>
    </>
  );
};

export default ProductListing;

import { CardContainer } from "../styles/StylesGlobal";

const ProductCard = ({ image, name, price, priceDiscount, size }) => {
  return (
    <>
      <CardContainer>
        <a href="/product/:id">
          <img src={image} alt={name} className={size === "small" ? "small-image" : ""} />
        </a>
        <h2>{name}</h2>
        <div className="product-price">
          {priceDiscount ? (
            <>
              <span className="price">${price}</span>
              <span className="price-discount">${priceDiscount}</span>
            </>
          ) : (
            <span>{price}</span>
          )}
        </div>
      </CardContainer>
    </>
  );
};

export default ProductCard;

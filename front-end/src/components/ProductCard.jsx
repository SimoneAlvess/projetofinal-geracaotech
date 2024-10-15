import { CardContainer } from "../styles/StylesGlobal";

const ProductCard = ({ image, name, price, priceDiscount }) => {
  return (
    <>
      <CardContainer>
        <img src={image} alt={name}/>
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

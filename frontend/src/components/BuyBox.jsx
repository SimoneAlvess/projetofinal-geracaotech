import { ContainerBuyBox } from "../styles/StylesGlobal";
import starIcon from "../assets/star-icon.svg";
import starsIcon from "/public/Stars.jpg";

const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description, children }) => {
  return (
    <>
      <ContainerBuyBox>
        <h1>{name}</h1>
        <p className="text-reference">{reference}</p>
        <div className="pb-3 d-flex gap-2 align-items-center">
          <img src={starsIcon} alt="Star icon" height={"14px"} />
          <span className="stars d-flex align-items-center justify-content-center gap-1">
            {stars}
            <img src={starIcon} alt="Estrelas" />
          </span>
          <span className="rating"> {rating} </span>
        </div>
        <div>
          <span className="price">
            <span className="style-moeda">R$ </span>
            {price}
          </span>
          <span className="price-discount">{priceDiscount}</span>
        </div>
        <p className="description"> {description} </p>
        <div>{children}</div>
        <button>Comprar</button>
      </ContainerBuyBox>
    </>
  );
};

export default BuyBox;

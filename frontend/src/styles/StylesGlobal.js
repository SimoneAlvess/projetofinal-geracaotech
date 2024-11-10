import styled from "styled-components";

// ESTILOS DO COMPONENTE HEADER
export const HeaderContainer = styled.header`
  height: 180px;
  align-items: center;
  padding-top: 25px;
  & form input {
    height: 60px;
    width: 559px;
    border-radius: 8px;
    background-color: #47474710;
    border: none;
    margin-left: 18px;
    padding-left: 20px;
    padding-right: 30px;
  }
  & input:focus {
    outline: none;
    border: 2px solid #c92071;
  }
  & input::placeholder,
  .pi-search {
    opacity: 60%;
    font-size: 16px;
    cursor: pointer;
  }
  & .register {
    color: #474747;
    font-size: 16px;
    text-decoration: underline;
    width: 110px;
    padding-left: 17px;
  }
  & .login {
    background-color: #c92071;
    width: 114px;
    height: 40px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 14px;
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & nav {
    padding-top: 30px;
    padding-bottom: 0;
    & li a {
      color: #474747;
      text-decoration: none;
      font-size: 16px;
      &:hover,
      &.active {
        color: #c92071;
        font-weight: 700;
        border-bottom: 2px solid #c92071;
        padding-bottom: 2px;
      }
    }
  }
`;

// ESTILOS DO COMPONENTE FOOTER
export const FooterContainer = styled.footer`
  background-color: #1f1f1f;
  color: white;
  max-height: 454;
  width: 100vw;
  padding-top: 75px;
  & .div-description p {
    font-size: 16px;
    padding-top: 30px;
  }
  & p {
    font-size: 13px;
  }
`;

// ESTILOS DO COMPONENTE INFOCOMPONENT-FOOTER
export const DivContainer = styled.div`
  & ul {
    padding-left: 0;
  }
  & ul li {
    list-style: none;
    & a {
      color: white;
      text-decoration: none;
      font-size: 16px;
      font-weight: 300;
    }
  }
  & h5 {
    margin-bottom: 25px;
    font-weight: 600;
    font-size: 18px;
  }
`;

// ESTILOS DO COMPONENTE SECTION
export const SectionContainer = styled.section`
  & .text-center {
    text-align: center;
    margin-top: 100px;
  }
  & h2 {
    color: #474747;
    font-size: 24px;
    font-weight: 700;
  }
  & a {
    color: #c92071;
    font-size: 18px;
    text-decoration: none;
  }
`;

// ESTILOS DO COMPONENTE GALLERY
export const GalleryContainer = styled.div`
  & button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  & .gallery-slide {
    position: relative;
  }
  & .thumbnails {
    display: flex;
    margin-top: 15px;
    gap: 29px;
  }
  & .thumbnail {
    width: 117px;
    height: 95px;
    object-fit: cover;
    cursor: pointer;
    border-radius: 4px;
    transition: border 0.3s;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(0.9);
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      border-radius: 100%;
    }
  }
  & .thumbnail.active {
    border: 2px solid #c92071;
  }
`;

// ESTILOS DO COMPONENTE HOMEPAGE
export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 25px;
  & .img-card {
    border-radius: 4px;
    width: 362px;
    height: 251px;
    cursor: pointer;
  }
  & a {
    bottom: 30px;
    left: 7%;
    & button {
      background-color: #f7f7fc;
      color: #c92071;
      font-size: 16px;
      font-weight: 700;
      border: none;
      border-radius: 8px;
      width: 153px;
      height: 48px;
    }
  }
`;

// ESTILOS COMPONENTE DO HOMEPAGE
export const SectionContainerHome = styled.section`
  padding: 90px 100px 90px 100px;
  background-color: white;
  & h6 {
    color: #c92071;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 15px;
  }
  & h2 {
    color: #474747;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 15px;
  }
  & button {
    background-color: #c92071;
    color: white;
    width: 200px;
    height: 40px;
    margin-top: 10px;
    border-radius: 8px;
    border: none;
    font-size: 14px;
    font-weight: 700;
  }
`;

// ESTILOS COMPONENTE DO HOMEPAGE
export const IconsContainer = styled.div`
  margin-bottom: 100px;
  margin-top: 40px;
  & img {
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
      border-radius: 100%;
    }
  }
`;

// ESTILOS DO COMPONENTE PRODUCTCARD
export const CardContainer = styled.div`
  & img {
    width: 292px;
    height: 321px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  & h2 {
    font-weight: 500;
  }
  & .price {
    padding-right: 10px;
    color: #8f8f8f;
    text-decoration: line-through;
    font-weight: 600;
  }
  & .product-price {
    color: #1f1f1f;
    font-size: 24px;
  }
  & .price-discount {
    color: #1f1f1f;
    font-weight: 600;
  }
`;

// ESTILOS DO COMPONENTE PRODUCTLISTING
export const ProductContainer = styled.div`
  display: grid;
  justify-content: center;
  gap: 10px;
  margin-bottom: 90px;
  &.four-columns {
    grid-template-columns: repeat(4, 1fr);
  }
  &.three-columns {
    grid-template-columns: repeat(3, 1fr);
  }
  & img {
    width: 270px;
  }
  & .small-image {
    max-width: 258px;
  }
`;

// ESTILOS DO COMPONENTE PRODUCTLISTINGPAGE
export const ProductListingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 40px;
  & .select-container {
    width: 308px;
    height: 60px;
    margin-bottom: 50px;
    & label {
      font-size: 16px;
      color: #474747;
      font-weight: 700;
      margin-bottom: 10px;
    }
    & select {
      color: #474747;
      background-color: #f9f8fe;
      border-radius: 1px;
      border: 1px solid #474747;
      font-size: 16px;
      height: 60px;
    }
  }
  & .filter-container {
    background-color: white;
    width: 308px;
    padding: 30px;
    border-radius: 4px;
    & h6 {
      font-size: 16px;
      color: #474747;
      font-weight: 700;
    }
    & hr {
      color: #cccccc;
    }
  }
  & h2 {
    font-size: 16px;
  }
`;

//  ESTILOS DO COMPONENTE FILTERGROUP
export const FilterContainer = styled.div`
  & .title-size {
    font-size: 14px !important;
    color: #474747;
    margin-top: 15px;
  }
  & div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    padding-top: 5px;
    & input {
      width: 22px;
      height: 22px;
      accent-color: #c92071;
      border-color: #666666;
    }
  }
`;

//ESTILOS DO COMPONENTE PRODUCTVIEWPAGE
export const ProductViewContainer = styled.div`
  & .product-container {
    margin-top: 70px;
    margin-bottom: 90px;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 2rem;
  }
  & .options-product h6 {
    font-size: 14px;
    font-weight: 700;
    color: #8f8f8f;
    margin: 20px 0 15px 0;
  }
`;

// ESTILOS DO COMPONENTE PRODUCTOPTION
export const ContainerProductOption = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;

  & .square {
    border: 1px solid #cccccc;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    cursor: pointer;
  }

  & .circle {
    border: 1px solid #cccccc;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    cursor: pointer;
  }
  & .text {
    font-size: 24px;
    color: #474747;
    font-weight: 600;
  }
  .selected {
    border: 2px solid #c92071;
    background-color: #c92071;
    color: white;
  }
`;

// ESTILOS DO COMPONENTE BUYBOX
export const ContainerBuyBox = styled.div`
  & h1 {
    font-size: 32px;
    font-weight: 700;
    color: #1f1f1f;
  }
  & .text-reference {
    font-size: 12px;
    color: #666666;
    font-weight: 500;
  }
  & .stars {
    font-size: 14px;
    border-radius: 4px;
    background-color: #f6aa1c;
    color: white;
    font-weight: 900;
    width: 63px;
    height: 23px;
    padding: 6px 10px 6px 10px;
  }
  & .rating {
    font-size: 14px;
    color: #8f8f8f;
    font-weight: 500;
  }
  & .price {
    font-size: 32px;
    font-weight: 700;
    color: #474747;
    & .style-moeda {
      font-size: 16px;
      font-weight: 400;
    }
  }
  & .price-discount {
    font-size: 16px;
    color: #cccccc;
    text-decoration: line-through;
    padding-left: 8px;
  }
  & .description {
    margin-top: 15px;
    font-size: 14px;
    color: #474747;
  }
  & button {
    font-size: 16px;
    font-weight: 700;
    color: white;
    background-color: #f6aa1c;
    border: none;
    border-radius: 8px;
    width: 220px;
    height: 48px;
  }
`;

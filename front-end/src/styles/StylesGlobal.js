import styled from "styled-components";

// ESTILOS DO COMPONENTE HEADER
export const HeaderContainer = styled.header`
  height: 192px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 30px;
  & div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  & form input {
    height: 60px;
    width: 559px;
    border-radius: 8px;
    background-color: #47474710;
    border: none;
    margin-left: 18px;
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
    width: 100vw;
    & ul {
      display: flex;
      flex-direction: row;
      gap: 23px;
      padding-top: 35px;
      margin-bottom: 0;
      padding-left: 0;
      list-style: none;
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
  }
  & .cart {
    position: relative;
    padding-left: 50px;
    cursor: pointer;
    & span {
      position: absolute;
      top: -10px;
      right: -10px;
      background-color: #c92071;
      color: white;
      border-radius: 50%;
      padding: 0 5px 0 5px;
      font-size: 12px;
      font-weight: 700;
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
    padding-top: 100px;
  }
  & .text-left {
    text-align: left;
  }
  & h2 {
    color: #474747;
    font-size: 24px;
    font-weight: 700;
  }
  & a {
    color: #c92071;
    font-size: 18px;
  }
`;

// ESTILOS DO COMPONENTE GALLERY
export const GalleryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  & button {
    border: none;
    background-color: #ffffff00;
    cursor: pointer;
  }
`;

// ESTILOS DO COMPONENTE HOMEPAGE
export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 25px;
  margin-bottom: 100px;
  & img {
    border-radius: 4px;
    cursor: pointer;
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
`;

// ESTILOS DO COMPONENTE PRODUCTLISTINGPAGE
export const ProductListingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 40px;
  & .select-container {
    width: 308px;
    height: 60px;
    margin-bottom: 40px;
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

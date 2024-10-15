import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const MainContainer = styled.main`
  flex: 1;
  margin-top: 9px;
  background-color: #f9f8fe;
`;

const Layout = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  );
};

export default Layout;

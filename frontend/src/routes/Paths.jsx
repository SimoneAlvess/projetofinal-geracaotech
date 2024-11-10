import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout.jsx";
import HomePage from "../pages/HomePage.jsx";
import ProductListingPage from "../pages/ProductListingPage.jsx";
import Notfound from "../pages/Notfound.jsx";
import ProductViewPage from "../pages/ProductViewPage.jsx";

const Paths = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/product/:id" element={<ProductViewPage />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Paths;

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Homepage/Homepage";
import Footer from "./components/footer/Footer";
import NoPage from "./pages/noPages/NoPage";
import ProductInfo from "./pages/productInfo/ProductInfo";
import Layout from "./components/layout/Layout";
import HomePageProductCard from "./components/homePageProduct/HomePageProductCard";
import Homepage from "./pages/Homepage/Homepage";
import ScrollTop from "./components/scrollTop/ScrollTop";
import Cart from "./pages/cart/CartPage";
import AllProduct from "./pages/allProduct/allProduct";
import Signup from "./pages/registration/Signup";
import Login from "./pages/registration/Login";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProductPage from "./pages/admin/AddProductPage";
import UpdateProductPage from "./pages/admin/UpdateProductPage";
import MyState from "./context/myState";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";

function App() {
  return (
    <MyState>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Layout children={<Homepage />} />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/productInfo/:id" element={<ProductInfo />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRouteForAdmin>
                <AdminDashboard />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path="/add-product"
            element={
              <ProtectedRouteForAdmin>
                <AddProductPage />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path="/updateproduct/:id"
            element={
              <ProtectedRouteForAdmin>
                <UpdateProductPage />
              </ProtectedRouteForAdmin>
            }
          />
        </Routes>
      </BrowserRouter>
    </MyState>
  );
}

export default App;

import * as React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";


const App = () => {

  const isUserLoggedIn = true;

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />

          {/* agar user logged in hai to use login aur register waale pages nahi dikhne chaiye */}
          <Route path="/login" element={isUserLoggedIn ? <Navigate to="/" /> : <Login />} />    {/*Redirect to in v6 chnges to Navigate to*/}
          <Route path="/register" element={isUserLoggedIn ? <Navigate to="/" /> : <Register />} />
        </Routes>
      </BrowserRouter>

    </>
  )

};

export default App;
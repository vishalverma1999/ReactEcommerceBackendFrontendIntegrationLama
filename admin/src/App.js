import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import "./app.css"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserList from "./pages/home/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

const App = () => {

  // const location = useLocation();
  // console.log(location);

  // const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin : false;
  const isUserLoggedIn = useSelector((state)=> state.user.currentUser);
  console.log(isUserLoggedIn);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={isUserLoggedIn ? <Navigate to="/" /> : <Login />} />
        </Routes>
         {
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/userList" element={<UserList />} />
                <Route path="/user/:userId" element={<User />} />     {/*path is going to be user and additionally :userId, so this means basically look at this path and after this userId can be anything any number any string and it's going to be our user id*/}
                <Route path="/newUser" element={<NewUser />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/newProduct" element={<NewProduct />} />
              </Routes>
            </div>
          </>
        }
      </BrowserRouter>
    </>
  )
};

export default App;


/*
newProduct
*/

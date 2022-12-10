import { Route, Routes } from "react-router-dom";
import ClickToTop from "./components/clickToTop/ClickToTop";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import ReactToastContainer from "./components/reactToastContainer/ReactToastContainer";
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";
import AddProduct from "./pages/dashboard/admin/AddProduct";
import ManageOrders from "./pages/dashboard/admin/ManageOrders/ManageOrders";
import ManageProducts from "./pages/dashboard/admin/ManageProducts/ManageProducts";
import ManageUsers from "./pages/dashboard/admin/ManageUsers/ManageUsers";
import Dashboard from "./pages/dashboard/Dashboard";
import MyProfile from "./pages/dashboard/MyProfile";
import MyOrders from "./pages/dashboard/users/MyOrders";
import Review from "./pages/dashboard/users/Review";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/home/showcaseProducts/ProductDetails";
import Login from "./pages/loginSignup/Login";
import SignUp from "./pages/loginSignup/SignUp";
import Address from "./pages/payment/Address";
import Payment from "./pages/payment/Payment";
import Store from "./pages/store/Store";
import RequireAuth from "./requireauth/RequireAuth";


function App() {
  return (
    <main className="max-w-screen-xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Store />} />
        <Route path="/productDetails/:Id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/address" element={<Address />} />
        <Route path="/payment" element={<Payment />} />

        {/* dashboard routes */}
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route path="myProfile" element={<MyProfile />} />
          <Route path="myOrders" element={<MyOrders />} />
          <Route path="review" element={<Review />} />
          <Route path="addProduct" element={<AddProduct />} />
          <Route path="manageUsers" element={<ManageUsers />} />
          <Route path="manageOrders" element={<ManageOrders />} />
          <Route path="manageProducts" element={<ManageProducts />} />
        </Route>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <ClickToTop />
      <Footer />
      <ReactToastContainer />
    </main>
  );
}

export default App;

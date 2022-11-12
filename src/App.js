import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import ReactToastifyContainer from "./components/reactToastContainer/ReactToastifyContainer";
import About from "./pages/about/About";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import ProductDetails from "./pages/home/showcaseProducts/ProductDetails";
import Login from "./pages/loginSignup/Login";
import SignUp from "./pages/loginSignup/SignUp";
import Store from "./pages/store/Store";

function App() {
  return (
    <main className="max-w-screen-xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Store />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Footer />
      <ReactToastifyContainer />
    </main>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/product/Products";
import {Cart} from "./pages/cart/Cart";
import { Favorite } from './pages/favorite/Favorite';
import { ProductDetail } from './pages/product/ProductDetail';
import Navbar from "./components/Navbar";
import { CartContextProvider } from "./context/CartContext";



function App() {


  return (
    <CartContextProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/favorite" element={<Favorite/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
      </Routes>
    </Router>
    </CartContextProvider>
  )
}
export default App

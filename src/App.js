import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ShoppingDetails from "./pages/ShoppingDetails";
import AddProduct from "./components/AddProducts";
import CartProduct from "./components/CartProduct";
import WishingList from "./components/WishingList";
import ImageDetails from "./components/Product Details";
import AllProduct from "./components/AllProduct";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
     

      <Router>
        <Routes>
          <Route path="/" element={<ShoppingDetails />} />
          <Route path="/all" element={<AllProduct/>}/>
          <Route path="/add" element={<AddProduct />} />
          <Route path="/cart" element={<CartProduct />} />
          <Route path="/wish" element={<WishingList />} />
          <Route path="/product/:productId" element={<ImageDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

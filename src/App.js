import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import AddProduct from "./components/AddProduct";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import MyAccount from "./Pages/MyAccount";
import Orders from "./Pages/Orders";
import WishList from "./Pages/Wishlist";
import Rewards from "./Pages/Rewards";
import Giftcards from "./Pages/Giftcards";
import Notification from "./Pages/Notification";
import Customer from "./Pages/Customer";
import Advertise from "./Pages/Advertise";
import Download from "./Pages/Download";
import Seller from "./components/Seller";
import Offer from "./sub/Top";
import Mob from "./sub/Mob";
import Beauty from "./sub/Beauty";
import Electro from "./sub/Electro";
import Fashion from "./sub/Fashion";
import Grocery from "./sub/Grocery";
import Home from "./sub/Home";
import Travel from "./sub/Travel";
import Fur from "./sub/Fur";
import Carousel from "./components/Carousel";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/myprofile" element={<MyAccount />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/giftcards" element={<Giftcards />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="/download" element={<Download />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/mobile" element={<Mob />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/fur" element={<Fur />} />
        <Route path="/hp" element={<Home />} />
        <Route path="/gro" element={<Grocery />} />
        <Route path="/toy" element={<Beauty />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/elec" element={<Electro />} />
        <Route path="/carousel" element={<Carousel />} /> 
      </Routes>
    </Router>
  );
}

export default App;

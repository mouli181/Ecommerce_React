import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "../Images/logo.png";
import user from "../Images/user.png";
import account from "../Images/account.png";
//import signup from "../Images/signup.png";
import box from "../Images/box.png";
import order from "../Images/order.png";
import love from "../Images/love.png";
import discount from "../Images/discount.png";
import ne from "../Images/ne.png";
import "./Homepage.css";
import shopping from "../Images/shopping.png";
import seller from "../Images/seller.png";
import bell from "../Images/bell.png";
import download from "../Images/download.png";
import trend from "../Images/trend.png";
import customer from "../Images/customer.png";
import offer from "../Images/offer.png";
import mobile from "../Images/mobile.jpg";
import elec from "../Sub-images/elec.jpeg";
import fashion from "../Sub-images/fashion.jpg";
import fur from "../Sub-images/fur.jpg";
import gro from "../Sub-images/gro.jpg";
import hp from "../Sub-images/hp.png";
import toy from "../Sub-images/toy.jpg";
import travel from "../Sub-images/travel.jpg";
import Carousel from "./Carousel";
import Tel from "../Sub-images/Tel.jpg";
import gamepad from "../Sub-images/gamepad.jpg";
import Airpods from "../Sub-images/Airpods.jpg";
import lamp from "../Sub-images/lamp.jpg";
import Watch from "../Sub-images/Watch.jpg";


function HomePage() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDotsDropdown, setShowDotsDropdown] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to login page
  };

  const handleDotsMouseEnter = () => {
    setShowDotsDropdown(true);
  };

  const handleDotsMouseLeave = () => {
    setShowDotsDropdown(false);
  };

  return (
    <div className="container" style={{ margin: "0", width: "100vw" }}>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="img-container">
            <img src={logo} alt="logo" width="100px" height="auto" />
          </div>
          <div className="search-bar">
            <button className="button-icon">
              <img src={ne} alt="icon" height="auto" width="15px" />
            </button>
            <input type="text" placeholder="search for products..." />
          </div>

          <div
            className="account"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Dropdown Button */}
            <button className="dropbtn" onClick={handleLoginClick}>
              <img
                src={user}
                alt="Login"
                className="img-log"
                width="15px"
                height="auto"
              />
              Login
            </button>

            {/* Dropdown Content */}
            {showDropdown && (
              <div className="dropdown-content">
                <Link to="/signup">
                  <label style={{ paddingRight: "45px" }}>New Customer? </label>
                  <span style={{ color: "blue", fontWeight: "bold" }}>
                    {" "}
                    Sign Up{" "}
                  </span>
                </Link>
                <Link to="/myprofile">
                  <img
                    src={account}
                    alt="My Profile"
                    width="15px"
                    height="auto"
                  />
                  My Profile
                </Link>
                <Link to="/orders">
                  <img src={order} alt="Orders" width="15px" height="auto" />
                  Orders
                </Link>
                <Link to="/wishlist">
                  <img src={love} alt="Wishlist" width="15px" height="auto" />
                  Wishlist
                </Link>
                <Link to="/rewards">
                  <img src={box} alt="Rewards" width="15px" height="auto" />
                  Rewards
                </Link>
                <Link to="/giftcards">
                  <img
                    src={discount}
                    alt="Gift Cards"
                    width="15px"
                    height="auto"
                  />
                  Gift Cards
                </Link>
              </div>
            )}
          </div>

          <div className="your-cart">
            <Link to="/cart" className="cart">
              <img
                src={shopping}
                style={{ marginRight: "5px" }}
                alt="cart logo"
                width="15px"
                height="auto"
              />
              Cart
            </Link>
          </div>
          <div className="seller">
            <Link to="/seller" className="seller-link">
              <img
                src={seller}
                style={{ marginRight: "5px" }}
                alt="cart logo"
                width="15px"
                height="auto"
              />
              Become a Seller
            </Link>
          </div>
          <div
            className="dots-dropdown"
            onMouseEnter={handleDotsMouseEnter}
            onMouseLeave={handleDotsMouseLeave}
          >
            <div className="dots">⋮</div>
            {showDotsDropdown && (
              <div className="dropdown-content">
                <Link to="/notification">
                  <img src={bell} alt="Rewards" width="15px" height="auto" />
                  Notification
                </Link>
                <Link to="/customer">
                  <img
                    src={customer}
                    alt="Rewards"
                    width="15px"
                    height="auto"
                  />
                  Customer Care
                </Link>
                <Link to="/advertise">
                  <img src={trend} alt="Rewards" width="15px" height="auto" />
                  Advertise
                </Link>
                <Link to="/download">
                  <img
                    src={download}
                    alt="Rewards"
                    width="15px"
                    height="auto"
                  />
                  Download
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className="nav-sub">
        <div className="offer">
          <Link to="/offer">
            <img src={offer} alt="Gift Cards" width="70px" height="auto" />
            <p>Top Offers</p>
          </Link>
        </div>
        
        <div className="mobile-nav">
          <Link to="/mobile">
            <img src={mobile} alt="Gift Cards" width="70px" height="auto" />
            <p>Mobiles</p>
          </Link>
        </div>
        <div className="fashion-nav">
          <Link to="/fashion">
            <img src={fashion} alt="Gift Cards" width="70px" height="auto" />
            <p>Fashion</p>
          </Link>
        </div>
        <div className="elec-nav">
          <Link to="/elec">
            <img src={elec} alt="Gift Cards" width="70px" height="auto" />
            <p>Electronics</p>
          </Link>
        </div>
        <div className="fur-nav">
          <Link to="/fur">
            <img src={fur} alt="Gift Cards" width="70px" height="auto" />
            <p>Furniture</p>
          </Link>
        </div>
        <div className="mobile-nav">
          <Link to="/hp">
            <img src={hp} alt="Gift Cards" width="70px" height="auto" />
            <p className="para">Appliances</p>
          </Link>
        </div>
        <div className="gro-nav">
          <Link to="/gro">
            <img src={gro} alt="Gift Cards" width="70px" height="auto" />
            <p>Groceries</p>
          </Link>
        </div>
        <div className="travel-nav">
          <Link to="/travel">
            <img src={travel} alt="Gift Cards" width="70px" height="auto" />
            <p>Flight Bookings</p>
          </Link>
        </div>
        <div className="toy-nav">
          <Link to="/toy">
            <img src={toy} alt="Gift Cards" width="70px" height="auto" />
            <p>Toy</p>
          </Link>
        </div>
      </div>
      <div className="carousel">
        <Carousel />
        </div>
      <div className="pre-side">
        <div className="premium">
            <div className="premium-prod">
              <h3>Premium Products</h3>
              <button> {">"} </button>
            </div>
            <div className="products">
              <div className="prod">
                <img src={Tel} width="150px" height="150px" alt="image" />
              <p>Best of LED</p>
              <h4>7000 off on Exchange</h4>
              </div>
              <div className="prod">
                <img src={Airpods} width="150px" height="150px" alt="image" />
              <p>Airpods</p>
              <h4>1000 off on Exchange</h4>
              </div>
              <div className="prod">
                <img src={Watch} width="150px" height="150px" alt="image" />
              <p>Smart Watches</p>
              <h4>500 off on Exchange</h4>
              </div>
              <div className="prod">
                <img src={gamepad} width="150px" height="150px" alt="image"/>
              <p>GamePad</p>
              <h4>200 off on Exchange</h4>
              </div>
              <div className="prod">
                <img src={lamp} width="150px" height="150px"alt="image" />
              <p>Ceiling Lamps</p>
              <h4>7000 off on Exchange</h4>
              </div>
            </div>
      </div>
      {/* <div className="side"> */}
      <img src={Watch} width="150px" height="300px" alt="image" className="img" />
      {/* </div> */}
      </div>
      <div className="body-div">
        <Link to="/products">Shop Now</Link>
        <Link to="/add-product">Add New Product</Link>
      </div>
    </div>
  );
}

export default HomePage;

 
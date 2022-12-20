import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);

  return (
    <div className="navWrapper">
      <div>
        <Link className="navLink" to="/">
          <img className="cartlogo" src="images/cartlogo.png" alt="mylogo" />
        </Link>
      </div>
      <div className="navbar">
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart Items : {items.length} </span>
      </div>
    </div>
  );
};
export default Navbar;

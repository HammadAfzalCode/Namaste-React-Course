// import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { CART_URL, LOGO_URL } from "../utils/constants";
const Header = () => {
  let btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState("login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-xl mx-auto">
      <div className="logo-container">
        <img src={LOGO_URL} className="w-24 h-auto" />
      </div>
      <div className="nav-items flex items-center">
        <ul className="flex p-4 m-4">
          {/* <li className="px-4">Online Status : {onlineStatus ? "✅" : "❌"}</li> */}
          <li className="px-4 hover:border-b-2 hover:border-red-600">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:border-b-2 hover:border-red-600">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 hover:border-b-2 hover:border-red-600">
            <Link to="/contact">Contact Us</Link>
          </li>
          {/* <li className="px-4 hover:border-b-2 hover:border-red-600">
            <Link to="/grocery">Grocery </Link>
          </li> */}
          <li className="px-4 font-bold">
            <Link to="/cart">
              <div className="flex   ">
                <img className="w-10 h-10 pb-2" src={CART_URL} />
                <span className="text-red-600">({cartItems.length} items)</span>
              </div>
            </Link>
          </li>
          {/* <button
            className="login"
            onClick={() => {
              btnNameReact === "login"
                ? setBtnNameReact("logout")
                : setBtnNameReact("login");
            }}
          >
            {btnNameReact}
          </button> */}
          {/* <li className="px-4 font-bold"> {loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};
export default Header;

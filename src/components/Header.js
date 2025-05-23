import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");

  return (
    <div className="header">
      <div className="logo">
        <img className="img-logo" src={LOGO_URL} alt="App Logo" />
      </div>
      <div className="list">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <button
            className="login-btn"
            onClick={() => {
              buttonName === "Login"
                ? setButtonName("Logout")
                : setButtonName("Login");
            }}
          >
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

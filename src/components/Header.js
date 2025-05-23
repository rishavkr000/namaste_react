import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");

  return (
    <div className="header">
      <div className="logo">
        <img className="img-logo" src={LOGO_URL} alt="App Logo" />
      </div>
      <div className="list">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
          <li>Contact Us</li>
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

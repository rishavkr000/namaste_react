import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-100">
      <div className="w-24">
        <img src={LOGO_URL} alt="App Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex px-4">
          <li className="px-4">Online Status: {onlineStatus === true ? "🟢" : "🔴"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About</Link></li>
          <li className="px-4"><Link to="/cart">Cart</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <button
            className="px-4"
            onClick={() => {
              buttonName === "Login"
                ? setButtonName("Logout")
                : setButtonName("Login");
            }}
          >
            {buttonName}
          </button>
          <li className="px-4">{data?.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

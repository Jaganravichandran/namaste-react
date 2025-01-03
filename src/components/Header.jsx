import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex items-center justify-between bg-pink-100 shadow-lg border border-solid border-rose-400 m-4 rounded-md">
      <div className="logo-container">
        <img className="w-32 mix-blend-multiply" src={LOGO_URL} />
      </div>
      <div>
        <ul className="flex items-center">
          <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="px-4">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-4 font-bold">
            <Link to={"/cart"}>Cart({cartItems.length})</Link>
          </li>
          <button
            className="px-4 mr-4 bg-pink-300 rounded-md py-2"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="pr-3">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

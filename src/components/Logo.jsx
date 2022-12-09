import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="flex items-center">
      <Link
        to="/"
        alt="logo"
        className="transition-colors px-2 py-1 rounded focus:hocus-state cursor-pointer"
      >
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
}

export default Logo;

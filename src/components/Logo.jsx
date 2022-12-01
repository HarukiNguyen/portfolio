import logo from "../assets/images/logo.svg";

function Logo() {
  return (
    <div className="flex items-center">
      <a
        href="/"
        alt="logo"
        className="px-2 py-1 rounded focus:hocus-state cursor-pointer"
      >
        <img src={logo} alt="logo" />
      </a>
    </div>
  );
}

export default Logo;

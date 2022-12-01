import logo from "../assets/images/logo.svg";
import SocialMedias from "../components/SocialMedias";

const navs = ["about", "projects", "contact"];

function Header() {
  const navItems = navs.map((nav) => {
    return (
      <li
        key={nav}
        className="py-1 text-slate-600 hover:font-bold hover:text-slate-800"
      >
        <a
          href={`/${nav}`}
          className="rounded px-2 capitalize focus:hocus-state"
        >
          {nav}
        </a>
      </li>
    );
  });

  return (
    <header className="pt-3">
      <div className="flex justify-between">
        <div className="flex items-center">
          <a
            href="/"
            alt="logo"
            className="px-2 py-1 rounded focus:bg-slate-100 focus:outline-none cursor-pointer"
          >
            <img src={logo} alt="logo" />
          </a>
        </div>
        <SocialMedias />
      </div>
      <ul className="inline-block pt-7">{navItems}</ul>
    </header>
  );
}

export default Header;

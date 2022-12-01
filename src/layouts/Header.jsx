import SocialMedias from "../components/SocialMedias";
import Logo from "../components/Logo";

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
        <Logo />
        <SocialMedias />
      </div>
      <ul className="inline-block pt-7">{navItems}</ul>
    </header>
  );
}

export default Header;

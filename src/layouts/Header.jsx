import SocialMedias from "../components/SocialMedias";
import Logo from "../components/Logo";

const navs = ["about", "knowledge", "projects", "contact"];

function Header() {
  const navItems = navs.map((nav) => {
    return (
      <li key={nav} className="py-2 w-2/4">
        <a
          href={`/#${nav}`}
          className="rounded px-2 text-xl capitalize text-slate-600  transition-color focus:hocus-state hover:hocus-state active:bg-slate-200"
        >
          {nav}
        </a>
      </li>
    );
  });

  return (
    <header>
      <div className="-mx-3 px-3 py-3 bg-slate-200 shadow-md animate-fadeIn">
        <div className="flex justify-between">
          <Logo />
          <SocialMedias />
        </div>
      </div>
      <ul className="flex flex-wrap justify-between pt-3">{navItems}</ul>
    </header>
  );
}

export default Header;

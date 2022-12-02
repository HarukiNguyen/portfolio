import SocialMedias from "../components/SocialMedias";
import Logo from "../components/Logo";

const navs = ["about", "projects", "contact"];

function Header() {
  const navItems = navs.map((nav) => {
    return (
      <li key={nav} className="py-2">
        <a
          href={`/${nav}`}
          className="rounded px-2 text-xl capitalize text-slate-600  transition-color focus:hocus-state hover:font-bold hover:text-slate-800"
        >
          {nav}
        </a>
      </li>
    );
  });

  return (
    <header>
      <div className="-mx-3 px-3 py-3 bg-slate-200 shadow-md">
        <div className="flex justify-between">
          <Logo />
          <SocialMedias />
        </div>
      </div>
      <ul className="inline-block pt-4">{navItems}</ul>
    </header>
  );
}

export default Header;

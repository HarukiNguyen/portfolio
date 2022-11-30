import logo from "../assets/images/logo.svg";
import githubIcon from "../assets/icons/github.png";
import linkedinIcon from "../assets/icons/linkedin.png";
import emailIcon from "../assets/icons/email.png";

const socialMedias = [
  {
    name: "github",
    iconUrl: githubIcon,
    url: "https://github.com/HarukiNguyen",
  },
  {
    name: "linkedin",
    iconUrl: linkedinIcon,
    url: "https://www.linkedin.com/in/haruki-nguyen-799b0a255/",
  },
  {
    name: "email",
    iconUrl: emailIcon,
    url: "mailto:nmd03pvt@gmail.com",
  },
];

const navs = ["about", "projects", "contact"];

function Header() {
  const socialMediaItems = socialMedias.map((socialMedia) => {
    const { name, iconUrl, url } = socialMedia;
    return (
      <li key={name} className="px-3">
        <a href={url} title={name} className="block p-2 rounded-full focus:hocus-state hover:hocus-state cursor-pointer">
          <img src={iconUrl} alt={name} />
        </a>
      </li>
    );
  });

  const navItems = navs.map((nav) => {
    return (
      <li key={nav} className="py-1 text-slate-600 hover:font-bold hover:text-slate-800">
        <a href={`/${nav}`} className="rounded px-2 capitalize focus:hocus-state">
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
        <ul className="flex items-center">{socialMediaItems}</ul>
      </div>
      <ul className="inline-block pt-7">{navItems}</ul>
    </header>
  );
}

export default Header;

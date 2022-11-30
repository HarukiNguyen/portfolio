import logo from "../assets/images/logo.svg";
import githubIcon from "../assets/icons/github.png";
import linkedinIcon from "../assets/icons/linkedin.png";
import emailIcon from "../assets/icons/email.png";

const socialMedias = [
  {
    name: "github",
    iconUrl: githubIcon,
  },
  {
    name: "linkedin",
    iconUrl: linkedinIcon,
  },
  {
    name: "email",
    iconUrl: emailIcon,
  },
];

const navs = ["About", "Projects", "Contact"];

function Header() {
  const socialMediaItems = socialMedias.map((socialMedia) => {
    const { name, iconUrl } = socialMedia;
    return (
      <li key={name}>
        <img src={iconUrl} alt={name} />
      </li>
    );
  });

  const navItems = navs.map((nav) => {
    return <li key={nav}>{nav}</li>;
  });

  return (
    <header className="">
      <img src={logo} alt="logo" className="" />
      <ul className="col-span-2">{socialMediaItems}</ul>
      <ul>{navItems}</ul>
    </header>
  );
}

export default Header;

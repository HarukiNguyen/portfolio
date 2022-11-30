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

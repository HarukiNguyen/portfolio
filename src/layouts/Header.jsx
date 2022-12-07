import Logo from "../components/Logo";
import SocialMedias from "../components/SocialMedias";

function Header() {
  return (
    <header className="flex justify-between -mx-3 px-3 py-3 tablet:py-5 animate-fadeIn opacity-0">
      <Logo />
      <SocialMedias />
    </header>
  );
}

export default Header;

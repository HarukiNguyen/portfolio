import Logo from "../components/Logo";
import SocialMedias from "../components/SocialMedias";

function Header() {
  return (
    <header className="flex justify-between bg-slate-100 shadow-md px-3 py-3 tablet:py-5 animate-fadeIn opacity-0">
      <Logo />
      <SocialMedias />
    </header>
  );
}

export default Header;

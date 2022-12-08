import Logo from "../components/Logo";
import SocialMedias from "../components/SocialMedias";

function Header() {
  return (
    <header className="bg-slate-200 shadow-md animate-fadeIn opacity-0">
      <div className="container flex justify-between px-3 py-3 tablet:py-5 tablet:px-5 ">
        <Logo />
        <SocialMedias />
      </div>
    </header>
  );
}

export default Header;

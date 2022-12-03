import Logo from "../components/Logo";
import SocialMedias from "../components/SocialMedias";

function Header() {
  return (
    <header>
      <div className="-mx-3 px-3 py-3 bg-slate-200 shadow-md animate-fadeIn opacity-0">
        <div className="flex justify-between">
          <Logo />
          <SocialMedias />
        </div>
      </div>
    </header>
  );
}

export default Header;

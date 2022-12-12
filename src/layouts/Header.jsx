import Logo from "../components/Logo";
import SocialMedias from "../components/SocialMedias";

function Header() {
  return (
    <header className="animate-fadeIn opacity-0 layout-container py-3 tablet:py-5 flex flex-wrap justify-between tablet:justify-start">
      <div className="flex items-center max-[339px]:pb-3 tablet:pr-10">
        <Logo />
      </div>
      <div className="tablet:pl-7 relative">
        <span className="min-[340px]:hidden absolute left-[6px] top-2/4 -translate-y-2/4 w-[6px] h-[6px] bg-indigo-600 rounded-full"></span>
        <span className="hidden tablet:block absolute w-[6px] h-[6px] bg-indigo-600 left-0 top-2/4 -translate-y-2/4 rounded-full"></span>
        <div className="max-[339px]:pl-6">
          <SocialMedias />
        </div>
      </div>
      <div className="hidden tablet:flex tablet:grow tablet:items-center tablet:pl-5">
        <span className="h-[2px] w-full rounded bg-indigo-600"></span>
      </div>
    </header>
  );
}

export default Header;

import Logo from '../components/Logo';
import SocialMedias from '../components/SocialMedias';

function Header() {
  return (
    <header className="layout-container flex animate-fadeIn flex-wrap justify-between py-3 opacity-0 tablet:justify-start tablet:py-5">
      <div className="flex items-center max-[339px]:pb-3 tablet:pr-10">
        <Logo />
      </div>
      <div className="relative tablet:pl-7">
        <span className="absolute left-[6px] top-2/4 h-[6px] w-[6px] -translate-y-2/4 rounded-full bg-indigo-600 min-[340px]:hidden"></span>
        <span className="absolute left-0 top-2/4 hidden h-[6px] w-[6px] -translate-y-2/4 rounded-full bg-indigo-600 tablet:block"></span>
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

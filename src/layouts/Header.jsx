import DecorationDash from '../components/DecorationDash';
import Logo from '../components/Logo';
import SocialMedias from '../components/SocialMedias';

function Header() {
  return (
    <header className="layout-container flex animate-fadeIn flex-wrap justify-between py-3 opacity-0 tablet:justify-start tablet:py-5">
      <div className="flex max-[339px]:w-full max-[339px]:items-center tablet:pr-10">
        <Logo />
        <div className="hidden grow pl-3 max-[339px]:block">
          <DecorationDash />
        </div>
      </div>
      <div className="relative max-[339px]:ml-auto max-[339px]:flex tablet:pl-7">
        <span className="absolute left-0 top-2/4 hidden h-[6px] w-[6px] -translate-y-2/4 rounded-full bg-indigo-600 tablet:block"></span>
        <div className="max-[339px]:-mr-5">
          <SocialMedias />
        </div>
      </div>
      <div className="hidden pl-5 tablet:flex tablet:grow laptop:pr-20 desktop:pr-44">
        <DecorationDash />
      </div>
    </header>
  );
}

export default Header;

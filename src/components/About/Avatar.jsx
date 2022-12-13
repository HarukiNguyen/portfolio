import avtTablet from '../../assets/images/avatar/cat-252-tablet.jpg';
import avtLaptop from '../../assets/images/avatar/cat-360-laptop.jpg';
import avtMobile from '../../assets/images/avatar/cat-437-mobile.jpg';

function Avatar() {
  const tabletBP = 768;
  const laptopBP = 1024;

  const avtMobileW = 437;
  const avtTabletW = 252;
  const avtLaptopW = 360;

  return (
    <div className="flex justify-center">
      <div className="relative w-9/12">
        <span className="absolute h-full w-full -translate-x-4 -translate-y-4 bg-indigo-500 desktop:-translate-x-5 desktop:-translate-y-5"></span>
        <img
          srcSet={`${avtTablet} ${avtTabletW}w, ${avtLaptop} ${avtLaptopW}w, ${avtMobile} ${avtMobileW}w`}
          sizes={`(min-width: ${tabletBP}px) and (max-width: ${
            laptopBP - 1
          }px) ${avtTabletW}px, (min-width: ${laptopBP}px) ${avtLaptopW}px, ${avtMobileW}px`}
          src={avtMobile}
          alt="avatar"
          className="translate-x-4 translate-y-4 desktop:translate-x-5 desktop:translate-y-5"
        />
      </div>
    </div>
  );
}

export default Avatar;

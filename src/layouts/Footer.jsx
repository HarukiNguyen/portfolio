import { useEffect, useRef } from "react";
import Logo from "../components/Logo";
import SocialMedias from "../components/SocialMedias";
import visibleAni from "../ultilities/visibleAni";

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    visibleAni(footerRef.current, "animate-fadeIn");
  }, []);

  return (
    <footer className="-mx-3 py-14 px-3 bg-slate-200 opacity-0" ref={footerRef}>
      {/* contact */}
      <section className="text-center" id="contact">
        <h2 className="heading text-3xl">Let's build the world with me</h2>
        <p className="text-slate-700">
          Just contact with me when you need a developer, have some questions,
          or just want to connect
        </p>
        <div className="py-6">
          <a
            href="mailto:nmd03pvt@gmail.com"
            title="Email me"
            className="font-bold underline px-1 rounded focus:hocus-state"
          >
            nmd03pvt@gmail.com
          </a>
        </div>
      </section>

      {/* logo and social media */}
      <section className="pb-0">
        <div className="flex justify-center">
          <Logo />
        </div>
        <div className="flex justify-center pt-6">
          <SocialMedias />
        </div>
      </section>
    </footer>
  );
}

export default Footer;

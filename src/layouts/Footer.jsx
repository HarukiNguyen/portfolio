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
    <footer
      className="-mx-3 py-14 px-3 bg-slate-200 opacity-0"
      ref={footerRef}
    >
      {/* contact */}
      <section className="text-center" id="contact">
        <h2 className="heading text-3xl">Let's build the world with me</h2>
        <p className="py-8 text-slate-700">
          Just contact with me when you need a developer, have some questions,
          or just want to connect
        </p>
        <a
          href="mailto:nmd03pvt@gmail.com"
          title="Email me"
          className="font-bold underline px-1 rounded focus:hocus-state"
        >
          nmd03pvt@gmail.com
        </a>
      </section>

      {/* logo and social media */}
      <section className="">
        <div className="flex justify-center py-10">
          <Logo />
        </div>
        <div className="flex justify-center">
          <SocialMedias />
        </div>
      </section>
    </footer>
  );
}

export default Footer;

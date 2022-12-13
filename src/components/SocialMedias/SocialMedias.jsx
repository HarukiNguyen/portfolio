import { useRef } from 'react';
import { socialMediasData } from './socialMediasData';
import Svg from './Svg';

function SocialMedias() {
  const linkRef = useRef(null);

  const socialMediaItems = socialMediasData.map((socialMedia) => {
    const { name, icon, url } = socialMedia;

    return (
      <li key={name} className="px-3">
        <a
          ref={linkRef}
          href={url}
          title={name}
          className="focus:hocus-state hover:hocus-state block cursor-pointer	rounded-full p-2 transition-colors"
        >
          <Svg svg={icon} />
        </a>
      </li>
    );
  });

  return <ul className="flex items-center">{socialMediaItems}</ul>;
}

export default SocialMedias;

import { socialMediasData } from "./socialMediasData";

function SocialMedias() {
  const socialMediaItems = socialMediasData.map((socialMedia) => {
    const { name, iconUrl, url } = socialMedia;

    return (
      <li key={name} className="px-3">
        <a
          href={url}
          title={name}
          className="block p-2 rounded-full transition-colors	focus:hocus-state hover:hocus-state cursor-pointer"
        >
          <img src={iconUrl} alt={name} className="w-6" />
        </a>
      </li>
    );
  });

  return <ul className="flex items-center">{socialMediaItems}</ul>;
}

export default SocialMedias;

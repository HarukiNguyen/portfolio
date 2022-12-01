import emailIcon from "../assets/icons/email.png";
import githubIcon from "../assets/icons/github.png";
import linkedinIcon from "../assets/icons/linkedin.png";

const socialMediasData = [
  {
    name: "github",
    iconUrl: githubIcon,
    url: "https://github.com/HarukiNguyen",
  },
  {
    name: "linkedin",
    iconUrl: linkedinIcon,
    url: "https://www.linkedin.com/in/haruki-nguyen-799b0a255/",
  },
  {
    name: "email",
    iconUrl: emailIcon,
    url: "mailto:nmd03pvt@gmail.com",
  },
];

function SocialMedias() {
  const socialMediaItems = socialMediasData.map((socialMedia) => {
    const { name, iconUrl, url } = socialMedia;
    return (
      <li key={name} className="px-3">
        <a
          href={url}
          title={name}
          className="block p-2 rounded-full focus:hocus-state hover:hocus-state cursor-pointer"
        >
          <img src={iconUrl} alt={name} />
        </a>
      </li>
    );
  });

  return <ul className="flex items-center">{socialMediaItems}</ul>;
}

export default SocialMedias;

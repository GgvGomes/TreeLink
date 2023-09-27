import { FaInstagram, FaPersonBooth } from 'react-icons/fa';
import { BsTwitter, BsWhatsapp } from 'react-icons/bs';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { TbBrandDiscord, TbCloudComputing } from 'react-icons/tb';
import { FiCodepen, FiCodesandbox, FiGithub } from 'react-icons/fi';

type PropsButon = {
  class: string;
  link: string;
  size: number;
};

export function Button(props: PropsButon) {
  var WriteButton = '';

  function HandlleSwitchButton(param: string) {
    switch (props.class) {
      case 'instagram-btn':
        WriteButton = 'Instagram';
        return <FaInstagram fontSize={props.size} className="icon-button icon-button" />;
        break;

      case 'whatsapp-btn':
        WriteButton = 'Whatsapp';
        return <BsWhatsapp fontSize={props.size} className="icon-button" />;
        break;

      case 'github-btn':
        WriteButton = 'GitHub';
        return <FiGithub fontSize={props.size} className="icon-button" />;
        break;

      case 'linkedin-btn':
        WriteButton = 'Linkedin';
        return <AiOutlineLinkedin fontSize={props.size} className="icon-button" />;
        break;

      case 'discord-btn':
        WriteButton = 'Discord';
        return <TbBrandDiscord fontSize={props.size} className="icon-button" />;
        break;

      case 'twitter-btn':
        WriteButton = 'Twitter';
        return <BsTwitter fontSize={props.size} className="icon-button" />;
        break;

      case 'profile-btn':
        WriteButton = 'My Website';
        return <TbCloudComputing fontSize={props.size} className="icon-button" />;
        break;

      case 'codepen-btn':
        WriteButton = 'CodePen';
        return <FiCodepen fontSize={props.size} className="icon-button" />;
        break;

      default:
        break;
    }
  }

  return (
    <a href={props.link} target="_blank" className={props.class}>
      {HandlleSwitchButton(props.class)}
      {WriteButton}
    </a>
  );
}

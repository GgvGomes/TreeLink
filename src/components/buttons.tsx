import { FaInstagram } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { TbBrandDiscord } from 'react-icons/tb'
import { FiGithub } from 'react-icons/fi'

type PropsButon = {
    class: 'instagram-btn' | 'whatsapp-btn' | 'linkedin-btn' | 'discord-btn' | 'github-btn',
    size: number,
}

export function Button(props: PropsButon){
    
    function HandlleSwitchButton(param: string){
        switch(props.class) {
            case 'instagram-btn':
                return(
                    <FaInstagram fontSize={props.size} className='icon-button' />
                )
                break;
            
            case 'whatsapp-btn':
                return(
                    <BsWhatsapp fontSize={props.size} className='icon-button' />
                )
                break;
        
            case 'linkedin-btn':
                return(
                    <AiOutlineLinkedin fontSize={props.size} className='icon-button' />
                )
            break;

            case 'discord-btn':
                return(
                    <TbBrandDiscord fontSize={props.size} className='icon-button' />
                )
            break;

            case 'github-btn':
                return(
                    <FiGithub fontSize={props.size} className='icon-button' />
                )
            break;

            default:
                break;
        }
    }
    
    function HandlleSwitchString(param: string){
        switch(props.class) {
            case 'instagram-btn':
                return(
                    'Instagram'
                )
                break;
            
            case 'whatsapp-btn':
                return(
                    'Whatsapp'
                )
                break;
        
            case 'linkedin-btn':
                return(
                    'Linkedin'
                )
            break;

            case 'discord-btn':
                return(
                    'Discord'
                )
            break;

            case 'github-btn':
                return(
                    'GitHub'
                )
            break;

            default:
                break;
        }
    }

    return(
        <button className={props.class}>
            {HandlleSwitchButton(props.class)}
            {HandlleSwitchString(props.class)}
        </button>
    )
}
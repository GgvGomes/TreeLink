import { useState } from 'react'
import './App.scss'
import { Logo } from '../Logo'
import { FaInstagram } from 'react-icons/fa'
import { Button } from '../components/buttons'

type Buttons = {
  name: string,
  class:string;
  link:string;
  size:number;
}[]

function App() {
  const [count, setCount] = useState(0)

  const Btns: Buttons = [
    {
      name: 'Instagram',
      class: 'instagram-btn',
      link: 'https://www.instagram.com/gomes_gabriel05/',
      size: 20
    },
    {
      name: 'Whatsapp',
      class: 'whatsapp-btn',
      link: 'https://contate.me/gomesGabriel',
      size: 20
    },
    {
      name: 'Github',
      class: 'github-btn',
      link: 'https://github.com/GgvGomes/',
      size: 20
    },
    {
      name: 'Linkedin',
      class: 'linkedin-btn',
      link: 'https://www.linkedin.com/in/gabriel-gomes-vieira-84a040198/',
      size: 22
    },
    // {
    //   name: 'Discord',
    //   class: 'discord-btn',
    //   link: 'https://www.instagram.com/gomes_gabriel05/',
    //   size: 22
    // }
  ]

  return (
    <div className='box'>
      <div className='grid-avatar'>
        <img
          className='avatar'
          src="https://avatars.githubusercontent.com/u/80273727?v=4"
          alt="avatar"
        />
        <strong>Gabriel Gomes Vieira</strong>
        <small>Web developer</small>

      </div>

      <div className='grid-buttons'>
        {/* <Button class='instagram-btn' size={20} /> */}
        {Btns.map(btn => {
          return(
            <Button 
              key={btn.name}
              class={btn.class}
              size={btn.size}
              link={btn.link}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App

// import { Logo } from '../Logo'

import { Button } from '../components/buttons'
import { Squares } from '../components/squares'

import './App.scss'
import '../styles/_squares.scss'

function App() {
  const ulSquares = document.querySelector("ul.squares")

  for(let i = 0; i < 11; i++){
      const li = document.createElement("li");
  
      const size = Math.floor(Math.random() * (120 - 10) + 10);
      
      li.style.width = `${size}px`;
      li.style.height = `${size}px`;
      li.style.bottom = `-${size}px`;
  
      const position = Math.random() * (99 - 1) + 1
      li.style.left = `${position}%`;
  
      // const delay = Math.random() * (5 - 0.1) + 0.1
      // li.style.animationDelay = `${delay}s`; 
  
      const duration = Math.random() * (24 - 12) + 12
      li.style.animationDuration = `${duration}s`;
      
      // const duration = Math.random() * (24 - 12) + 12
      li.style.animationTimingFunction = `cubic-bezier(${Math.random(), Math.random(), Math.random(), Math.random()})`;	
  
      ulSquares?.appendChild(li)
  }
  

  const Btns = [
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
      name: 'Twitter',
      class: 'twitter-btn',
      link: 'https://twitter.com/Gomes_GZz',
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

  const ListItems = [
    {
      title: 'Dominated Languages',
      items: [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'Java Script' },
        { name: 'Type Script' },
        { name: 'React' },
        { name: 'PHP' },
        { name: 'C#' },
      ]
    }
  ]

  return (
    <>
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

      {/* <div className="grid-list">
        {ListItems.map(item => {
          return(
            <List
              key={item.title}
              title={item.title}
              items={item.items}
            />
          )
        })}
      </div> */}

      <Squares />
    </>
  )
}

export default App

import { useState } from 'react'
import './App.scss'
import { Logo } from '../Logo'
import { FaInstagram } from 'react-icons/fa'
import { Button } from '../components/buttons'

function App() {
  const [count, setCount] = useState(0)

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
        <Button class='instagram-btn' size={20} />
        {/* <button><FaInstagram fontSize={20} className='icon-button'/>Instagram</button> */}
      </div>
    </div>
  )
}

export default App

import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [text, setText] = useState('Default')

  const getText = async () => {
    const data = await fetch('/.netlify/functions/hello')
    const json = await data.json()
    const text = json.message

    setText(text)
  }

  const hanldeClick = () => {
    getText()
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>

        <h2>{text}</h2>
        <button onClick={hanldeClick}>CLIIIIIK</button>
      </header>
    </div>
  )
}

export default App

import { useState } from 'react'
import ThemeSwitcher from './components/ThemeSwitcher'
import Article from './components/Article'
import './App.css'

// только функциональные компоненты и хук useState
function App() {
  const [theme, setTheme] = useState('light')

  return (
    <div className={'page ' + theme}>
      <ThemeSwitcher theme={theme} onChange={setTheme} />
      <Article />
    </div>
  )
}

export default App

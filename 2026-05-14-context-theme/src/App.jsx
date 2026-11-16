import { ThemeProvider, useTheme } from './ThemeContext'
import Counter from './components/Counter'
import ThemeSwitcher from './components/ThemeSwitcher'
import './App.css'

function Page() {
  const { theme } = useTheme()

  return (
    <div className={'page ' + theme}>
      <Counter title="Counter1" />
      <Counter title="Counter2" />
      <ThemeSwitcher />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Page />
    </ThemeProvider>
  )
}

export default App

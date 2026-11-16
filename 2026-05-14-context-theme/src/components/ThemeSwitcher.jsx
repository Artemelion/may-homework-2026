import { useTheme } from '../ThemeContext'

// тему берём и меняем через контекст
function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <label>
        <input type="radio" name="theme" checked={theme === 'light'} onChange={() => setTheme('light')} />
        Light
      </label>
      <label>
        <input type="radio" name="theme" checked={theme === 'dark'} onChange={() => setTheme('dark')} />
        Dark
      </label>
    </div>
  )
}

export default ThemeSwitcher

// переключатель Dark / Light в правом верхнем углу
function ThemeSwitcher({ theme, onChange }) {
  return (
    <div className="switcher">
      <label>
        Dark
        <input type="radio" name="theme" value="dark" checked={theme === 'dark'} onChange={() => onChange('dark')} />
      </label>
      <label>
        Light
        <input type="radio" name="theme" value="light" checked={theme === 'light'} onChange={() => onChange('light')} />
      </label>
    </div>
  )
}

export default ThemeSwitcher

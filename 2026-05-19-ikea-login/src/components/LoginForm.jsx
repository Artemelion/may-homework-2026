import { useState } from 'react'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex = /^\+?\d{10,12}$/

function LoginForm() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

  function validate() {
    const newErrors = {}
    const phone = login.replace(/[\s()-]/g, '')

    if (!login) newErrors.login = 'Введіть електронну пошту або номер телефону'
    else if (!emailRegex.test(login) && !phoneRegex.test(phone)) newErrors.login = 'Невірний формат пошти або номера'

    if (!password) newErrors.password = 'Введіть пароль'
    else if (password.length < 6) newErrors.password = 'Пароль має бути не менше 6 символів'

    return newErrors
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setMessage(`Вхід виконано: ${login}${remember ? ' (дані збережено)' : ''}`)
    } else {
      setMessage('')
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="login">Електронна пошта або мобільний номер</label>
      <input
        id="login"
        type="text"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        className={errors.login ? 'invalid' : ''}
      />
      {errors.login && <p className="error">{errors.login}</p>}
      <p className="hint">
        By entering your mobile number and one-time code sign-in option, you agree to receive a one-time verification
        code via SMS from IKEA. Message and data rates may apply.
      </p>
      <a href="#" className="small-link">
        More info about Privacy Policy
      </a>

      <label htmlFor="password" className="mt">
        Пароль
      </label>
      <div className="password">
        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={errors.password ? 'invalid' : ''}
        />
        <button type="button" className="eye" onClick={() => setShowPassword(!showPassword)} title="Показати пароль">
          {showPassword ? '🙈' : '👁'}
        </button>
      </div>
      {errors.password && <p className="error">{errors.password}</p>}
      <a href="#" className="forgot">
        Забули свій пароль?
      </a>

      <div className="remember">
        <label>
          <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
          Зберегти інформацію
        </label>
        <span className="info" title="Ми запам'ятаємо вас на цьому пристрої">
          i
        </span>
      </div>

      <button type="submit" className="btn-black">
        ПРОДОВЖИТИ
      </button>
      {message && <p className="success">{message}</p>}

      <p className="no-account">У вас ще немає облікового запису? Створіть його:</p>
      <button type="button" className="btn-outline">
        СТВОРИТИ АККАУНТ
      </button>
    </form>
  )
}

export default LoginForm

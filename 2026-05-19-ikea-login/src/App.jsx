import LoginForm from './components/LoginForm'
import './App.css'

function App() {
  return (
    <div className="page">
      <div className="left">
        <button className="back" aria-label="Назад">◀</button>
        <h1>ЗАПОВНІТЬ ВХІД ДО ОБЛІКОВОГО ЗАПИСУ</h1>
      </div>
      <div className="right">
        <LoginForm />
      </div>
    </div>
  )
}

export default App

import { useEffect, useRef, useState } from 'react'
import questions from './questions'
import './App.css'

const letters = ['А', 'Б', 'В', 'Г']

function App() {
  const [index, setIndex] = useState(Number(localStorage.getItem('testIndex')) || 0)
  const [result, setResult] = useState('')
  const [showAnswer, setShowAnswer] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)

  // refs: чекбоксы с вариантами и блок с пояснением
  const answerRefs = useRef([])
  const explanationRef = useRef(null)

  const question = questions[index]
  const finished = index >= questions.length

  // при переходе на новый вопрос - снимаем отметки и ставим фокус на первый вариант
  useEffect(() => {
    answerRefs.current.forEach((box) => box && (box.checked = false))
    answerRefs.current[0]?.focus()
  }, [index])

  // когда открыли пояснение - прокручиваем к нему
  useEffect(() => {
    if (showExplanation) explanationRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [showExplanation])

  // можно отметить только один вариант
  function selectOnly(i) {
    answerRefs.current.forEach((box, j) => {
      if (box && j !== i) box.checked = false
    })
  }

  function goNext() {
    setResult('')
    setShowAnswer(false)
    setShowExplanation(false)
    setIndex(index + 1)
  }

  function checkAnswer() {
    const chosen = answerRefs.current.findIndex((box) => box?.checked)
    if (chosen === -1) {
      setResult('Оберіть відповідь')
      return
    }
    if (chosen === question.answer) {
      setScore(score + 1)
      setResult('Правильно!')
    } else {
      setResult('Неправильно')
    }
    setShowAnswer(true)
  }

  function continueLater() {
    localStorage.setItem('testIndex', index)
    setResult('Прогрес збережено, можна повернутися пізніше')
  }

  function restart() {
    localStorage.removeItem('testIndex')
    setScore(0)
    setIndex(0)
  }

  if (finished) {
    return (
      <div className="card">
        <h2>Тест завершено</h2>
        <p>
          Правильних відповідей: {score} з {questions.length}
        </p>
        <button className="green" onClick={restart}>
          Пройти ще раз
        </button>
      </div>
    )
  }

  return (
    <div className="card">
      <div className="counter">
        Завдання {index + 1} з {questions.length}
      </div>

      <div className="block">{question.text}</div>

      <div className="block">
        {question.options.map((option, i) => (
          <div key={i} className={'option' + (showAnswer && i === question.answer ? ' correct' : '')}>
            <span className="letter">{letters[i]}</span> {option}
          </div>
        ))}
      </div>

      <div className="block">
        <p>Позначте відповіді:</p>
        <div className="grid">
          {letters.map((letter, i) => (
            <label key={letter}>
              {letter}
              <input type="checkbox" ref={(el) => (answerRefs.current[i] = el)} onChange={() => selectOnly(i)} />
            </label>
          ))}
        </div>
      </div>

      <div className="buttons">
        <div>
          <button className="green" onClick={checkAnswer}>
            Відповісти
          </button>
          <button className="green" onClick={goNext}>
            {showAnswer ? 'Далі' : 'Пропустити'}
          </button>
          <button className="green" onClick={() => setShowAnswer(true)}>
            Показати відповідь
          </button>
          <button className="gray" onClick={() => setShowExplanation(true)}>
            Читати пояснення
          </button>
        </div>
        <button className="red" onClick={continueLater}>
          Продовжити пізніше
        </button>
      </div>

      {result && <p className="result">{result}</p>}

      {showExplanation && (
        <div className="explanation" ref={explanationRef}>
          <b>Пояснення:</b> {question.explanation}
        </div>
      )}
    </div>
  )
}

export default App

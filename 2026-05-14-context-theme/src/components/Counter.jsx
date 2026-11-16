import { useState } from 'react'
import { useTheme } from '../ThemeContext'

function Counter({ title }) {
  const [count, setCount] = useState(5)
  const { theme } = useTheme()

  return (
    <div>
      <h1>
        {title}: {count}
      </h1>
      <button className={theme} onClick={() => setCount(count + 1)}>+</button>
      <button className={theme} onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default Counter

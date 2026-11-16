import { useState } from 'react'

// текст + счётчик прочтений, тоже на useState
function Article() {
  const [likes, setLikes] = useState(0)

  return (
    <article>
      <p>
        Объект state описывает внутреннее состояние компонента, он похож на props за тем исключением, что состояние
        определяется внутри компонента и доступно только из компонента. Если props представляет входные данные, которые
        передаются в компонент извне, то состояние хранит такие объекты, которые создаются в компоненте и полностью
        зависят от компонента.
      </p>
      <button onClick={() => setLikes(likes + 1)}>Полезно: {likes}</button>
    </article>
  )
}

export default Article

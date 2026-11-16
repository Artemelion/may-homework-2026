import { Link, useLoaderData, useParams } from 'react-router'
import NotReady from './NotReady'
import Chapter from './Chapter'

// один компонент и для всего раздела, и для отдельной главы
function Section() {
  const data = useLoaderData()
  const { section, chapterId } = useParams()

  if (!data) return <NotReady />

  const chapters = chapterId ? data.chapters.filter((ch) => ch.id === chapterId) : data.chapters

  if (chapters.length === 0) {
    return (
      <p>
        Такой главы нет. <Link to={'/' + section}>Вернуться к руководству</Link>
      </p>
    )
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p className="updated">Последнее обновление: {data.updated}</p>
      {chapters.map((ch) => (
        <Chapter key={ch.id} chapter={ch} />
      ))}
    </div>
  )
}

export default Section

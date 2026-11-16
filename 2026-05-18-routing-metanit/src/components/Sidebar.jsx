import { NavLink, useParams, useMatches } from 'react-router'

// слева список глав текущего раздела
function Sidebar() {
  const { section } = useParams()
  const matches = useMatches()
  const data = matches.find((m) => m.data)?.data

  if (!data) return <aside />

  return (
    <aside>
      {data.chapters.map((ch) => (
        <NavLink key={ch.id} to={`/${section}/${ch.id}`} className="chapter-link">
          📁 {ch.title}
        </NavLink>
      ))}
    </aside>
  )
}

export default Sidebar

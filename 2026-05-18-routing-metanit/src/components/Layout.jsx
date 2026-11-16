import { NavLink, Outlet } from 'react-router'
import Sidebar from './Sidebar'

const sections = [
  { path: 'csharp', title: 'C#' },
  { path: 'java', title: 'JAVA' },
  { path: 'web', title: 'WEB' },
  { path: 'python', title: 'PYTHON' },
  { path: 'c', title: 'C' },
  { path: 'cpp', title: 'C++' },
  { path: 'sql', title: 'SQL' },
  { path: 'react', title: 'REACT' },
]

function Layout() {
  return (
    <div className="site">
      <header>
        <NavLink to="/" className="logo">
          METANIT.COM
        </NavLink>
        <div className="subtitle">Сайт о программировании</div>
        <nav className="top-menu">
          {sections.map((s) => (
            <NavLink key={s.path} to={'/' + s.path}>
              {s.title}
            </NavLink>
          ))}
        </nav>
      </header>

      <div className="content">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout

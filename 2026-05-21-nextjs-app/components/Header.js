import Link from 'next/link'

const links = [
  { href: '/', title: 'Главная' },
  { href: '/about', title: 'О нас' },
  { href: '/blog', title: 'Блог' },
  { href: '/contacts', title: 'Контакты' },
]

export default function Header() {
  return (
    <header className="header">
      <span className="logo">Next.js</span>
      <nav>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="nav-link">
            {link.title}
          </Link>
        ))}
      </nav>
    </header>
  )
}

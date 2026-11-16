import Header from '../components/Header'
import './globals.css'

export const metadata = {
  title: 'Next.js - домашнее задание',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  )
}

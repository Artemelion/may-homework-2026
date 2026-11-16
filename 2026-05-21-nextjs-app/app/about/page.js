import Link from 'next/link'
import InfoBlock from '../../components/InfoBlock'

export default function About() {
  return (
    <div>
      <h1>О нас</h1>
      <InfoBlock title="Кто мы" text="Мы студенты, которые учатся делать сайты на React и Next.js." color="#e8f5e9" />
      <p>
        Вложенная страница: <Link href="/about/team">наша команда</Link>
      </p>
    </div>
  )
}

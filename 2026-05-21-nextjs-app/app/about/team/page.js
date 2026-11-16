import Link from 'next/link'

const team = ['Артем - frontend', 'Анна - дизайн', 'Максим - backend']

// вложенная страница /about/team
export default function Team() {
  return (
    <div>
      <h1>Команда</h1>
      <ul>
        {team.map((member) => (
          <li key={member}>{member}</li>
        ))}
      </ul>
      <Link href="/about">Назад к странице О нас</Link>
    </div>
  )
}

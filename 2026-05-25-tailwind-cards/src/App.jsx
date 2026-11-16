import UserCard from './components/UserCard'

const users = [
  {
    name: 'Анна Коваленко',
    role: 'Frontend разработчик',
    description: 'Делает интерфейсы на React и любит, когда всё аккуратно выровнено до пикселя.',
    photo: 'https://picsum.photos/id/64/400/400',
  },
  {
    name: 'Максим Шевченко',
    role: 'Backend разработчик',
    description: 'Пишет API на Node.js, проектирует базы данных и отвечает за то, чтобы сервер не падал.',
    photo: 'https://picsum.photos/id/91/400/400',
  },
  {
    name: 'Олена Мельник',
    role: 'UI/UX дизайнер',
    description: 'Рисует макеты в Figma и следит, чтобы сайтом было удобно пользоваться с телефона.',
    photo: 'https://picsum.photos/id/65/400/400',
  },
  {
    name: 'Игорь Бондаренко',
    role: 'QA инженер',
    description: 'Находит баги раньше пользователей и пишет автотесты.',
    photo: 'https://picsum.photos/id/1005/400/400',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Наша команда</h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {users.map((user) => (
          <UserCard key={user.name} user={user} />
        ))}
      </div>
    </div>
  )
}

export default App

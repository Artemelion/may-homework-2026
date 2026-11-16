import ClubInfo from './components/ClubInfo'
import Achievements from './components/Achievements'
import Squad from './components/Squad'
import Coach from './components/Coach'

// наборы стилей, каждый раз при загрузке берём случайный
const themes = [
  { background: '#0d47a1', color: '#ffffff', accent: '#ffd600', font: 'Arial' },
  { background: '#b71c1c', color: '#ffffff', accent: '#ffffff', font: 'Verdana' },
  { background: '#1b5e20', color: '#f1f8e9', accent: '#ffeb3b', font: 'Georgia' },
  { background: '#212121', color: '#eeeeee', accent: '#ff9800', font: 'Tahoma' },
  { background: '#f5f5f5', color: '#212121', accent: '#d32f2f', font: 'Trebuchet MS' },
]

const theme = themes[Math.floor(Math.random() * themes.length)]

const club = {
  name: 'Динамо Киев',
  city: 'Киев',
  founded: 1927,
  stadium: 'НСК Олимпийский',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/FC_Dynamo_Kyiv_logo.svg/240px-FC_Dynamo_Kyiv_logo.svg.png',
}

const achievements = [
  { title: 'Чемпион Украины', count: 17 },
  { title: 'Кубок Украины', count: 13 },
  { title: 'Чемпион СССР', count: 13 },
  { title: 'Кубок обладателей кубков УЕФА', count: 2 },
  { title: 'Суперкубок УЕФА', count: 1 },
]

const players = [
  { number: 1, name: 'Георгий Бущан', position: 'Вратарь' },
  { number: 2, name: 'Александр Тымчик', position: 'Защитник' },
  { number: 4, name: 'Денис Попов', position: 'Защитник' },
  { number: 6, name: 'Тарас Михавко', position: 'Защитник' },
  { number: 10, name: 'Николай Шапаренко', position: 'Полузащитник' },
  { number: 29, name: 'Виталий Буяльский', position: 'Полузащитник' },
  { number: 11, name: 'Андрей Ярмоленко', position: 'Нападающий' },
  { number: 9, name: 'Владислав Ванат', position: 'Нападающий' },
]

function App() {
  const pageStyle = {
    background: theme.background,
    color: theme.color,
    fontFamily: theme.font,
    minHeight: '100vh',
    padding: '20px',
  }

  return (
    <div style={pageStyle}>
      <ClubInfo club={club} accent={theme.accent} />
      <Achievements items={achievements} accent={theme.accent} />
      <Squad players={players} accent={theme.accent} />
      <Coach name="Александр Шовковский" since={2024} accent={theme.accent} />
      <p style={{ opacity: 0.6 }}>Обновите страницу - стиль поменяется случайно</p>
    </div>
  )
}

export default App

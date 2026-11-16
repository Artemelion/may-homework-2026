import InfoBlock from '../components/InfoBlock'

// главная страница
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <InfoBlock
        title="Добро пожаловать"
        text="Это учебное приложение на Next.js. Сверху меню со ссылками, по ним можно перейти на вложенные страницы и в блог, где используются вложенные динамические маршруты."
      />
      <InfoBlock
        title="Что внутри"
        text="Главная страница, вложенные страницы (О нас -> Команда), блог с маршрутами /blog/[category]/[slug] и компоненты, которые получают данные через props."
        color="#fff3e0"
      />
    </div>
  )
}

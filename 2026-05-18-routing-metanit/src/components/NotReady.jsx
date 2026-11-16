import { Link } from 'react-router'

function NotReady() {
  return (
    <div>
      <h2>Раздел пока в разработке</h2>
      <p>
        Сейчас готов только раздел <Link to="/react">React</Link>.
      </p>
    </div>
  )
}

export default NotReady

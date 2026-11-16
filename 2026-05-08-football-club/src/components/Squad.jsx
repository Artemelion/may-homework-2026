import Player from './Player'

// текущий состав команды
function Squad({ players, accent }) {
  return (
    <section>
      <h2 style={{ color: accent }}>Состав команды</h2>
      <table style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>№</th>
            <th>Игрок</th>
            <th>Позиция</th>
          </tr>
        </thead>
        <tbody>
          {players.map((p) => (
            <Player key={p.number} number={p.number} name={p.name} position={p.position} />
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Squad

// достижения клуба
function Achievements({ items, accent }) {
  const total = items.reduce((sum, item) => sum + item.count, 0)

  return (
    <section>
      <h2 style={{ color: accent }}>Достижения</h2>
      <ul>
        {items.map((item) => (
          <li key={item.title}>
            {item.title}: <b>{item.count}</b>
          </li>
        ))}
      </ul>
      <p>Всего трофеев: {total}</p>
    </section>
  )
}

export default Achievements

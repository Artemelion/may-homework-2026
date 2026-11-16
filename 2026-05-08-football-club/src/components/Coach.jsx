// главный тренер
function Coach({ name, since, accent }) {
  return (
    <section>
      <h2 style={{ color: accent }}>Главный тренер</h2>
      <p>
        {name}, тренирует команду с {since} года
      </p>
    </section>
  )
}

export default Coach

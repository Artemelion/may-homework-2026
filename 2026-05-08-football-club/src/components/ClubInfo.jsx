// краткая информация о клубе
function ClubInfo({ club, accent }) {
  return (
    <section style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <img src={club.logo} alt={club.name} width="110" />
      <div>
        <h1 style={{ color: accent, margin: 0 }}>{club.name}</h1>
        <p>Город: {club.city}</p>
        <p>Год основания: {club.founded}</p>
        <p>Стадион: {club.stadium}</p>
      </div>
    </section>
  )
}

export default ClubInfo

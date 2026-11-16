// одна строка таблицы с игроком
function Player({ number, name, position }) {
  const cell = { padding: '4px 14px', borderBottom: '1px solid rgba(128,128,128,0.4)' }

  return (
    <tr>
      <td style={cell}>{number}</td>
      <td style={cell}>{name}</td>
      <td style={cell}>{position}</td>
    </tr>
  )
}

export default Player

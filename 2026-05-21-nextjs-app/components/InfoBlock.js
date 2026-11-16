// блок с картинкой и текстом, всё приходит через props
export default function InfoBlock({ title, text, color = '#e3f2fd' }) {
  return (
    <div className="info-block">
      <div className="picture" style={{ background: color }}>
        {title[0]}
      </div>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}

function Chapter({ chapter }) {
  return (
    <div className="chapter">
      <h3>{chapter.title}</h3>
      <ul>
        {chapter.topics.map((topic) => (
          <li key={topic}>
            <a href="#">{topic}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Chapter

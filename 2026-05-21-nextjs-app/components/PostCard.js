import Link from 'next/link'

// карточка статьи для списка
export default function PostCard({ post }) {
  return (
    <Link href={`/blog/${post.category}/${post.slug}`} className="post-card">
      <h3>{post.title}</h3>
      <p>{post.text}</p>
    </Link>
  )
}

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { categories, getCategory, posts } from '../../../lib/posts'
import PostCard from '../../../components/PostCard'

// динамический маршрут /blog/[category]
export default async function CategoryPage({ params }) {
  const { category } = await params
  const current = getCategory(category)

  if (!current) notFound()

  const list = posts.filter((p) => p.category === category)

  return (
    <div>
      <Link href="/blog">← Все статьи</Link>
      <h1>Категория: {current.title}</h1>
      <div className="posts">
        {list.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }))
}

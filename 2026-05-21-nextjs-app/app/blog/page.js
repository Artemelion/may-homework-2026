import Link from 'next/link'
import { categories, posts } from '../../lib/posts'
import PostCard from '../../components/PostCard'

// список всех статей и категорий
export default function Blog() {
  return (
    <div>
      <h1>Блог</h1>
      <p>
        Категории:{' '}
        {categories.map((c) => (
          <Link key={c.slug} href={`/blog/${c.slug}`} className="tag">
            {c.title}
          </Link>
        ))}
      </p>
      <div className="posts">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}

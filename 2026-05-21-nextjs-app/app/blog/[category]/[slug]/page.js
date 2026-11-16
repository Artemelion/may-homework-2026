import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCategory, getPost, posts } from '../../../../lib/posts'

// вложенный динамический маршрут /blog/[category]/[slug]
export default async function PostPage({ params }) {
  const { category, slug } = await params
  const post = getPost(category, slug)

  if (!post) notFound()

  return (
    <article>
      <Link href={`/blog/${category}`}>← {getCategory(category).title}</Link>
      <h1>{post.title}</h1>
      <p>{post.text}</p>
      <p className="path">
        Адрес страницы: /blog/{category}/{slug}
      </p>
    </article>
  )
}

export function generateStaticParams() {
  return posts.map((p) => ({ category: p.category, slug: p.slug }))
}

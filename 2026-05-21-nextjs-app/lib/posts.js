// данные для блога: категории и статьи
export const categories = [
  { slug: 'react', title: 'React' },
  { slug: 'nextjs', title: 'Next.js' },
  { slug: 'css', title: 'CSS' },
]

export const posts = [
  {
    category: 'react',
    slug: 'components',
    title: 'Компоненты и props',
    text: 'Компонент - это функция, которая возвращает разметку. Через props компонент получает данные от родителя.',
  },
  {
    category: 'react',
    slug: 'hooks',
    title: 'Хуки useState и useEffect',
    text: 'useState хранит состояние компонента, а useEffect выполняет действия после отрисовки.',
  },
  {
    category: 'nextjs',
    slug: 'routing',
    title: 'Маршрутизация в Next.js',
    text: 'Каждая папка в app - это часть адреса, а файл page.js - сама страница.',
  },
  {
    category: 'nextjs',
    slug: 'dynamic-routes',
    title: 'Динамические маршруты',
    text: 'Папка в квадратных скобках, например [slug], принимает любое значение из адреса.',
  },
  {
    category: 'css',
    slug: 'flexbox',
    title: 'Flexbox за 5 минут',
    text: 'display: flex выстраивает элементы в ряд, а justify-content и align-items их выравнивают.',
  },
]

export function getPost(category, slug) {
  return posts.find((p) => p.category === category && p.slug === slug)
}

export function getCategory(slug) {
  return categories.find((c) => c.slug === slug)
}

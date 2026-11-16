import { createBrowserRouter, RouterProvider, Navigate } from 'react-router'
import Layout from './components/Layout'
import Section from './components/Section'
import NotReady from './components/NotReady'
import './App.css'

// loader: по параметру :section загружаем json с данными раздела
async function sectionLoader({ params }) {
  const response = await fetch(`${import.meta.env.BASE_URL}data/${params.section}.json`)
  const type = response.headers.get('content-type') || ''
  if (!response.ok || !type.includes('json')) {
    return null
  }
  return response.json()
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="/react" replace /> },
      {
        path: ':section',
        loader: sectionLoader,
        element: <Section />,
        errorElement: <NotReady />,
      },
      {
        // тот же компонент Section, только показывает одну главу
        path: ':section/:chapterId',
        loader: sectionLoader,
        element: <Section />,
        errorElement: <NotReady />,
      },
    ],
  },
], { basename: import.meta.env.BASE_URL })

function App() {
  return <RouterProvider router={router} />
}

export default App

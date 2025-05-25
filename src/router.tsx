import MainLayout from '@/Layout'
import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'

const HomePage = lazy(() => import('@/pages/HomePage/HomePage'))
const PopularMovieListPage = lazy(() => import('@/pages/PopularMovieListPage/PopularMovieListPage'))

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'popular',
        element: <PopularMovieListPage />,
      },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}

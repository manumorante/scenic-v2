import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '@/Layout'

const HomePage = lazy(() => import('@/pages/HomePage/HomePage'))
const PopularMovieListPage = lazy(
  () => import('@/pages/TrendingMovieListPage/TrendingMovieListPage'),
)

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/movies/trending',
        element: <PopularMovieListPage />,
      },
      {
        path: '/movies/top-rated',
        element: <PopularMovieListPage />,
      },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}

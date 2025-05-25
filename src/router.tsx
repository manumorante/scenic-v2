import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '@/Layout'

const HomePage = lazy(() => import('@/pages/HomePage/HomePage'))
const TrendingMoviesPage = lazy(() => import('@/pages/TrendingMoviesPage/TrendingMoviesPage'))
const TopRatedMoviesPage = lazy(() => import('@/pages/TopRatedMoviesPage/TopRatedMoviesPage'))

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
        element: <TrendingMoviesPage />,
      },
      {
        path: '/movies/top-rated',
        element: <TopRatedMoviesPage />,
      },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}

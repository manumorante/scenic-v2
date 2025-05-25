import { Outlet, ScrollRestoration } from 'react-router'

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col gap-8">
      <header>Header</header>

      <main className="main-container flex flex-grow flex-col">
        <Outlet />
      </main>

      <footer>Footer</footer>
      <ScrollRestoration />
    </div>
  )
}

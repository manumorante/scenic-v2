import { Outlet, ScrollRestoration } from 'react-router'
import { Footer, Header } from '@/components/ui'

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col gap-8">
      <Header />

      <main className="main-container flex flex-grow flex-col">
        <Outlet />
      </main>

      <Footer />
      <ScrollRestoration />
    </div>
  )
}

import { Link } from 'react-router'
import { Logo, Navigation, Search } from '@/components/ui'
import { cn } from '@/lib/utils'

export default function Header() {
  return (
    <div className={cn('Header', 'sticky top-0', 'w-full min-h-16 flex items-center')}>
      <div className="main-container flex gap-5 items-center">
        <Link to="/">
          <Logo />
        </Link>

        <div className="flex gap-5 items-center">
          <Navigation />
          <Search />
        </div>
      </div>
    </div>
  )
}

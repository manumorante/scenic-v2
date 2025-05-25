import { NavLink } from 'react-router'
import { cn } from '@/lib/utils'

export default function Navigation() {
  const linkCn = cn('')

  return (
    <nav className="Navigation flex gap-3 w-full">
      <NavLink
        className={({ isActive }) => cn(linkCn, { 'font-bold text-white': isActive })}
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) => cn(linkCn, { 'font-bold text-white': isActive })}
        to="/movies/trending"
      >
        Trending
      </NavLink>

      <NavLink
        className={({ isActive }) => cn(linkCn, { 'font-bold text-white': isActive })}
        to="/movies/top-rated"
      >
        Top Rated
      </NavLink>
    </nav>
  )
}

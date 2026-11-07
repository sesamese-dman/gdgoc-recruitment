import { Link, NavLink } from 'react-router-dom'
import Container from './Container'
import { useFetch } from '../hooks/useFetch'

const API_URL = 'https://gdgoc-ugm-api.vercel.app/api/navigation'

const fallbackLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Overview', href: '/overview' },
  { label: 'Contact', href: '/contact' },
]

function Navbar() {
  const { data } = useFetch(API_URL)
  const links = data?.data?.length > 0 ? data.data : fallbackLinks

  return (
    <header className="border-b border-line bg-white">
      <Container>
        <nav className="flex items-center justify-between py-5">
          <Link to="/">
            <img
              src="/gdgoc-logo.svg"
              alt="Google Developer Groups on Campus, Universitas Gadjah Mada"
              className="h-10"
            />
          </Link>

          <ul className="hidden items-center gap-2 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  end={link.href === '/'}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 ${
                      isActive
                        ? 'bg-brand-tint font-medium text-brand'
                        : 'text-muted hover:text-ink'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link
            to="/overview"
            className="rounded-lg bg-accent px-5 py-3 font-medium text-white hover:opacity-90"
          >
            Find your track →
          </Link>
        </nav>
      </Container>
    </header>
  )
}

export default Navbar
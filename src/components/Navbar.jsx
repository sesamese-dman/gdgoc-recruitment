import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Container from './Container'
import { useNavigation } from '../hooks/useNavigation'

function Navbar() {
  const links = useNavigation()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="border-b border-line bg-white">
      <Container>
        <nav className="flex items-center justify-between py-5">
          <Link to="/" onClick={closeMenu}>
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
            className="hidden rounded-lg bg-accent px-5 py-3 font-medium text-white hover:opacity-90 md:inline-block"
          >
            Find your track →
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="rounded-lg p-2 text-ink hover:bg-surface md:hidden"
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>

        {menuOpen && (
          <div id="mobile-menu" className="pb-5 md:hidden">
            <ul className="space-y-1">
              {links.map((link) => (
                <li key={link.href}>
                  <NavLink
                    to={link.href}
                    end={link.href === '/'}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block rounded-lg px-4 py-3 ${
                        isActive
                          ? 'bg-brand-tint font-medium text-brand'
                          : 'text-muted hover:bg-surface hover:text-ink'
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
              onClick={closeMenu}
              className="mt-4 block rounded-lg bg-accent px-5 py-3 text-center font-medium text-white hover:opacity-90"
            >
              Find your track →
            </Link>
          </div>
        )}
      </Container>
    </header>
  )
}

export default Navbar
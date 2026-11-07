const links = ['Home', 'About', 'Overview', 'Contact']

function Navbar() {
  return (
    <header className="border-b border-line bg-white">
      <nav className="mx-auto flex max-w-[90rem] items-center justify-between px-6 py-5 lg:px-24">
        <img
          src="/gdgoc-logo.svg"
          alt="Google Developer Groups on Campus, Universitas Gadjah Mada"
          className="h-10"
        />

        <ul className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className={`rounded-full px-4 py-2 ${
                  link === 'About'
                    ? 'bg-brand-tint font-medium text-brand'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a href="#" className="rounded-lg bg-brand px-5 py-3 font-medium text-white hover:opacity-90">
          Find your track →
        </a>
      </nav>
    </header>
  )
}

export default Navbar
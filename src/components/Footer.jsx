import { Link } from 'react-router-dom'
import { LuGithub, LuInstagram, LuLinkedin } from 'react-icons/lu'
import Container from './Container'
import { useFetch } from '../hooks/useFetch'
import { useNavigation } from '../hooks/useNavigation'

const STATS_URL = 'https://gdgoc-ugm-api.vercel.app/api/stats'

const socialLinks = {
  instagram: {
    label: 'Instagram',
    Icon: LuInstagram,
    getUrl: (handle) => `https://www.instagram.com/${handle.replace('@', '')}/`,
  },
  linkedin: {
    label: 'LinkedIn',
    Icon: LuLinkedin,
    getUrl: (handle) => `https://www.linkedin.com/company/${handle}`,
  },
  github: {
    label: 'GitHub',
    Icon: LuGithub,
    getUrl: (handle) => `https://github.com/${handle}`,
  },
}

function Footer() {
  const links = useNavigation()
  const { data } = useFetch(STATS_URL)
  const stats = data?.data

  const social = stats?.social ?? { instagram: '@gdgoc.ugm' }
  const instagramHandle = social.instagram ?? '@gdgoc.ugm'
  const tagline = stats?.tagline ?? 'Learn together. Build together.'
  const university = stats?.university ?? 'Universitas Gadjah Mada'
  const socialIcons = Object.entries(social).filter(([network]) => network in socialLinks)

  return (
    <footer className="bg-surface">
      <Container className="pb-8 pt-12 lg:pt-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_16rem_16rem] lg:gap-16">
          <div>
            <Link to="/">
              <img
                src="/gdgoc-logo.svg"
                alt="Google Developer Groups on Campus, Universitas Gadjah Mada"
                className="h-11"
              />
            </Link>
            <p className="mt-5 max-w-[28rem] text-lg text-muted">
              A student community for curious minds, shared learning, and technology with
              purpose.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-lg font-semibold text-ink">Explore</h2>
            <ul className="mt-3 space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-muted hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-lg font-semibold text-ink">Keep in the loop</h2>
            <a
              href={socialLinks.instagram.getUrl(instagramHandle)}
              target="_blank"
              rel="noreferrer"
              className="mt-3 block text-xl font-medium text-brand hover:underline"
            >
              {instagramHandle}
            </a>
            <ul className="mt-4 flex gap-4 text-ink">
              {socialIcons.map(([network, handle]) => {
                const { label, Icon, getUrl } = socialLinks[network]
                return (
                  <li key={network}>
                    <a href={getUrl(handle)} target="_blank" rel="noreferrer" aria-label={label}>
                      <Icon className="size-6" aria-hidden="true" />
                    </a>
                  </li>
                )
              })}
            </ul>
            <p className="mt-4 text-sm text-muted">{tagline}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-ink pt-10 text-[0.8125rem] text-muted sm:flex-row sm:justify-between">
          <p>© GDGoC {university} • 2026/2027</p>
          <p>Made for the campus. Open to possibilities.</p>
        </div>

        <div className="mt-10 flex" aria-hidden="true">
          <span className="h-1 w-10 bg-accent" />
          <span className="h-1 w-10 bg-google-red" />
          <span className="h-1 w-10 bg-google-yellow" />
          <span className="h-1 w-10 bg-google-green" />
        </div>
      </Container>
    </footer>
  )
}

export default Footer
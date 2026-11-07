import { BookOpen, Code, Heart, Users } from 'lucide-react'
import Container from './Container'
import Eyebrow from './Eyebrow'
import { useFetch } from '../hooks/useFetch'

const API_URL = 'https://gdgoc-ugm-api.vercel.app/api/values'

const icons = {
  'stay-curious': BookOpen,
  'make-room': Users,
  'learn-by-building': Code,
  'give-something-back': Heart,
}

function ValueCard({ value }) {
  const Icon = icons[value.id]

  return (
    <li className="rounded-[1.25rem] border border-line bg-white p-6">
      <div
        className="h-[3px] w-9 rounded-full"
        style={{ backgroundColor: value.color }}
      />
      <div className="mt-6 text-brand">
        {Icon ? (
          <Icon className="size-6" aria-hidden="true" />
        ) : (
          <span aria-hidden="true">{value.icon}</span>
        )}
      </div>
      <h3 className="mt-4 text-2xl font-medium text-ink">{value.title}</h3>
      <p className="mt-3 text-base text-muted">{value.description}</p>
    </li>
  )
}

function ValuesSkeleton() {
  return (
    <ul
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      aria-busy="true"
      aria-label="Loading community values"
    >
      {[0, 1, 2, 3].map((item) => (
        <li
          key={item}
          className="h-60 animate-pulse rounded-[1.25rem] border border-line bg-surface"
        />
      ))}
    </ul>
  )
}

function ValuesSection() {
  const { data, loading, error } = useFetch(API_URL)
  const values = data?.data ?? []

  return (
    <section className="bg-white">
      <Container className="py-12 lg:py-[5.5rem]">
        <Eyebrow>What guides us</Eyebrow>
        <h2 className="mt-4 max-w-[52rem] text-4xl font-bold leading-[1.125] text-ink lg:text-5xl">
          Good technology starts with good company.
        </h2>

        <div className="mt-10">
          {loading && <ValuesSkeleton />}

          {error && (
            <p role="alert" className="rounded-[1.25rem] border border-line bg-surface p-6 text-muted">
              We couldn’t load the community values right now. Please try again later.
            </p>
          )}

          {!loading && !error && values.length === 0 && (
            <p className="rounded-[1.25rem] border border-line bg-surface p-6 text-muted">
              There are no community values to show yet.
            </p>
          )}

          {!loading && !error && values.length > 0 && (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <ValueCard key={value.id} value={value} />
              ))}
            </ul>
          )}
        </div>
      </Container>
    </section>
  )
}

export default ValuesSection
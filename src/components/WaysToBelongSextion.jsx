import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from './Container'
import Eyebrow from './Eyebrow'
import StatusMessage from './StatusMessage'
import { useFetch } from '../hooks/useFetch'

const API_URL = 'https://gdgoc-ugm-api.vercel.app/api/roles'

function RolesSkeleton() {
  return (
    <ul aria-busy="true" aria-label="Loading ways to belong">
      {[0, 1, 2].map((item) => (
        <li key={item} className="border-b border-line py-6 first:pt-0">
          <div className="h-8 w-2/3 animate-pulse rounded bg-surface" />
          <div className="mt-3 h-5 w-full animate-pulse rounded bg-surface" />
        </li>
      ))}
    </ul>
  )
}

function WaysToBelongSection() {
  const { data, loading, error } = useFetch(API_URL)
  const roles = data?.data ?? []

  return (
    <section className="bg-white">
      <Container className="grid gap-12 pb-12 lg:grid-cols-[25rem_1fr] lg:gap-24 lg:pb-[5.5rem]">
        <div>
          <Eyebrow>People, not labels</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold leading-[1.125] text-ink lg:text-5xl">
            There’s more than one way to contribute.
          </h2>
          <p className="mt-6 text-lg text-muted">
            You can be learning one day and helping someone else the next. A community
            grows through both.
          </p>
        </div>

        <div>
          {loading && <RolesSkeleton />}

          {error && (
            <StatusMessage role="alert">
              We couldn’t load the ways to belong right now. Please try again later.
            </StatusMessage>
          )}

          {!loading && !error && roles.length === 0 && (
            <StatusMessage>There are no ways to belong to show yet.</StatusMessage>
          )}

          {!loading && !error && roles.length > 0 && (
            <ul>
              {roles.map((role) => (
                <li key={role.id} className="border-b border-line py-6 first:pt-0">
                  <h3 className="text-[1.75rem] font-medium leading-tight text-ink">
                    {role.title}
                  </h3>
                  <p className="mt-3 text-base text-muted">{role.description}</p>
                </li>
              ))}
            </ul>
          )}

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 font-medium text-brand hover:underline"
          >
            Let’s talk about getting involved
            <ArrowRight className="size-5" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default WaysToBelongSection
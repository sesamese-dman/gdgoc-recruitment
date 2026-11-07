import { useState } from 'react'
import CategoryPicker from './CategoryPicker'
import CommunityUpdatesCard from './CommunityUpdatesCard'
import Container from './Container'
import { useFetch } from '../hooks/useFetch'

const API_URL = 'https://gdgoc-ugm-api.vercel.app/api/inquiry-categories'

function ContactWorkspace() {
  const { data, loading, error } = useFetch(API_URL)
  const categories = data?.data ?? []

  const [chosenId, setChosenId] = useState(null)
  const selectedId = chosenId ?? categories[0]?.id ?? null

  return (
    <section className="bg-white">
      <Container className="grid gap-10 pb-16 lg:grid-cols-[28.5rem_1fr] lg:gap-16 lg:pb-20">
        <div className="space-y-8">
          <CategoryPicker
            categories={categories}
            loading={loading}
            error={error}
            selectedId={selectedId}
            onSelect={setChosenId}
          />
          <CommunityUpdatesCard />
        </div>

        <div className="rounded-[1.25rem] bg-surface p-8">
          <p className="text-muted">The message form goes here. We’ll build it next.</p>
        </div>
      </Container>
    </section>
  )
}

export default ContactWorkspace
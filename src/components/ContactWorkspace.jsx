import { useState } from 'react'
import CategoryPicker from './CategoryPicker'
import CommunityUpdatesCard from './CommunityUpdatesCard'
import Container from './Container'
import { useFetch } from '../hooks/useFetch'
import ContactForm from './ContactForm'
import { useLocalStorage } from '../hooks/useLocalStorage'

const API_URL = 'https://gdgoc-ugm-api.vercel.app/api/inquiry-categories'

function ContactWorkspace() {
  const { data, loading, error } = useFetch(API_URL)
  const categories = data?.data ?? []

  const [chosenId, setChosenId] = useLocalStorage('gdgoc-contact-category', null)

  const chosenExists = categories.some((category) => category.id === chosenId)
  const selectedId = chosenExists ? chosenId : categories[0]?.id ?? null

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

        <ContactForm
            categories={categories}
            loading={loading}
            selectedId={selectedId}
            onSelect={setChosenId}
        />
      </Container>
    </section>
  )
}

export default ContactWorkspace
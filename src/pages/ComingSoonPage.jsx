import Container from '../components/Container'

function ComingSoonPage({ name }) {
  return (
    <main>
      <Container className="py-24">
        <h1 className="text-4xl font-bold text-ink">{name}</h1>
        <p className="mt-4 text-lg text-muted">This page isn’t part of this project yet.</p>
      </Container>
    </main>
  )
}

export default ComingSoonPage
import Container from './Container'

function CommitmentBanner() {
  return (
    <section className="bg-sun-tint">
      <Container className="flex flex-col items-start gap-6 py-10 lg:flex-row lg:items-center lg:gap-16 lg:py-14">
        <img src="/star.svg" alt="" className="size-[4.5rem] shrink-0" />
        <div>
          <h2 className="text-2xl font-medium text-ink lg:text-[1.75rem]">
            A space to learn. A responsibility to care.
          </h2>
          <p className="mt-3 text-lg text-muted">
            We want every conversation and learning experience to be respectful, inclusive,
            and constructive. Be kind, give credit, and make room for people who are just
            getting started.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default CommitmentBanner
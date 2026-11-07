import Container from './Container'
import Eyebrow from './Eyebrow'

function ContactIntro() {
  return (
    <section className="bg-white">
      <Container className="pb-10 pt-12 lg:pb-16 lg:pt-20">
        <Eyebrow>Contact • Let’s connect</Eyebrow>
        <h1 className="mt-6 text-5xl font-bold leading-tight text-ink lg:text-6xl">
          Good things start with <span className="text-brand">hello.</span>
        </h1>
        <p className="mt-6 max-w-[46rem] text-lg text-muted">
          A question, a collaboration, or an idea for the community? Tell us what’s on your
          mind.
        </p>
      </Container>
    </section>
  )
}

export default ContactIntro
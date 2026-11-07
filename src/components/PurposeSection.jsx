import Container from './Container'
import Eyebrow from './Eyebrow'

function PurposeSection() {
  return (
    <section className="bg-surface">
      <Container className="grid gap-12 py-12 lg:grid-cols-[25rem_1fr] lg:gap-24 lg:py-20">
        <div>
          <Eyebrow>Why we come together</Eyebrow>
          <h2 className="mt-6 text-4xl font-bold leading-[1.125] text-ink lg:text-5xl">
            A bridge from <span className="whitespace-nowrap text-brand">“I wonder”</span> to{' '}
            <span className="whitespace-nowrap text-accent">“I made this.”</span>
          </h2>
        </div>

        <div>
          <p className="text-xl text-ink lg:text-2xl">
            Learning feels different when there’s someone to exchange ideas with, a problem
            you care about, and the space to give it a try.
          </p>
          <p className="mt-6 text-lg text-muted">
            That’s the spirit of Google Developer Groups on Campus at UGM. We create room
            for students to explore technology, develop practical skills, and learn from
            one another.
          </p>
          <p className="mt-6 text-lg text-muted">
            Our campus is the starting point. The questions we ask and the things we build
            can reach beyond it.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default PurposeSection
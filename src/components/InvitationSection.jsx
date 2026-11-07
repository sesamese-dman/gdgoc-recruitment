import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from './Container'
import Eyebrow from './Eyebrow'

function InvitationSection() {
  return (
    <section className="bg-white">
      <Container className="py-12 lg:py-16">
        <div className="flex flex-col gap-8 rounded-[2rem] bg-brand-tint p-8 lg:flex-row lg:items-center lg:justify-between lg:p-12">
          <div>
            <Eyebrow>Your next chapter</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-[1.2] text-ink lg:text-[2.5rem]">
              Bring your curiosity.
              <br />
              We’ll build from there.
            </h2>
            <p className="mt-4 text-lg text-muted">
              Find a learning track, meet a collaborator, or start a conversation.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 lg:w-64 lg:shrink-0">
            <Link
              to="/overview"
              className="inline-flex items-center gap-3 rounded-lg bg-accent px-6 py-3.5 font-medium text-white hover:opacity-90"
            >
              Explore the overview
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-medium text-brand hover:underline"
            >
              Talk to the community
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default InvitationSection
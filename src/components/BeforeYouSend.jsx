import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from './Container'
import Eyebrow from './Eyebrow'

const tips = [
  {
    title: 'For learning questions',
    text: 'Tell us which topic interests you and where you are in your learning journey.',
  },
  {
    title: 'For collaborations',
    text: 'Share the idea, who it’s for, and how you imagine working with the community.',
  },
  {
    title: 'Not sure which category fits?',
    text: 'Choose General inquiry. A clear question is always a good starting point.',
  },
]

function BeforeYouSend() {
  return (
    <section className="border-t border-line bg-white">
      <Container className="grid gap-10 py-16 lg:grid-cols-[25rem_1fr] lg:gap-24 lg:py-24">
        <div>
          <Eyebrow>A little guidance</Eyebrow>
          <h2 className="mt-4 text-4xl font-medium leading-tight text-ink">
            Help us understand your idea.
          </h2>
          <Link
            to="/overview"
            className="mt-4 inline-flex items-center gap-2 font-medium text-brand hover:underline"
          >
            Explore the programs first
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <ul>
          {tips.map((tip) => (
            <li key={tip.title} className="border-b border-line pb-4 pt-6 first:pt-0">
              <h3 className="text-xl font-medium text-ink">{tip.title}</h3>
              <p className="mt-2 text-muted">{tip.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default BeforeYouSend
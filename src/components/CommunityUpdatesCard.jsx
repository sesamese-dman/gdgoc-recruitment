import { ArrowRight } from 'lucide-react'
import Eyebrow from './Eyebrow'

function CommunityUpdatesCard() {
  return (
    <aside className="rounded-2xl bg-sun-tint p-6">
      <Eyebrow>Stay curious, stay connected</Eyebrow>
      <h3 className="mt-3 text-[1.375rem] font-bold leading-tight text-ink">
        Looking for community updates?
      </h3>
      <p className="mt-3 text-sm text-muted">
        Follow <strong className="font-medium text-ink">@gdgoc.ugm</strong> for learning
        opportunities and what’s happening in the community.
      </p>
      <a
        href="https://www.instagram.com/gdgoc.ugm/"
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
      >
        Find @gdgoc.ugm
        <ArrowRight className="size-4" aria-hidden="true" />
      </a>
    </aside>
  )
}

export default CommunityUpdatesCard
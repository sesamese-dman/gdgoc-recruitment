function AboutHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-[90rem] flex-col items-center gap-12 px-6 py-12 lg:flex-row lg:gap-16 lg:px-24 lg:py-20">
        <div className="flex-1">
          <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            About GDGoC UGM
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-ink lg:text-6xl">
            Built by students.
            <span className="block text-brand">For what’s next.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted">
            We’re a community of learners and makers at Universitas Gadjah Mada,
            connected by curiosity and the belief that technology can do good.
          </p>

          <p className="mt-6 text-xs uppercase tracking-wide text-muted">
            Universitas Gadjah Mada • 2026/2027
          </p>
        </div>

        <img
          src="/about-artwork.png"
          alt="GDGoC community mark"
          className="w-full max-w-md rounded-[2.5rem] lg:w-[29rem] lg:max-w-none lg:shrink-0"
        />
      </div>
    </section>
  )
}

export default AboutHero
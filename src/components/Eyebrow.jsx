function Eyebrow({ children }) {
  return (
    <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </p>
  )
}

export default Eyebrow
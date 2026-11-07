function StatusMessage({ children, role }) {
  return (
    <p role={role} className="rounded-[1.25rem] border border-line bg-surface p-6 text-muted">
      {children}
    </p>
  )
}

export default StatusMessage
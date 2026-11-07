function Container({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-[90rem] px-6 lg:px-24 ${className}`}>
      {children}
    </div>
  )
}

export default Container
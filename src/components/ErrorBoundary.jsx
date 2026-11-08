import { Component } from 'react'
import Container from './Container'

class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('Something crashed while rendering:', error, info.componentStack)
  }

  handleRetry = () => {
    this.setState({ hasError: false })
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container className="py-24">
          <div role="alert" className="rounded-[1.25rem] border border-line bg-surface p-8">
            <h1 className="text-3xl font-bold text-ink">Something went wrong.</h1>
            <p className="mt-3 text-muted">
              This page hit an unexpected problem. You can try again or head back home.
            </p>
            <button
              type="button"
              onClick={this.handleRetry}
              className="mt-6 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              Try again
            </button>
          </div>
        </Container>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
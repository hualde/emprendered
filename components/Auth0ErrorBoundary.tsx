import React, { ErrorInfo, ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class Auth0ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Auth0 error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Lo sentimos, ha ocurrido un error en la autenticación.</h1>
    }

    return this.props.children
  }
}

export default Auth0ErrorBoundary
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    }
  }
  componentDidCatch(error, errorInfo) {
    // Display fallback UI
    // this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.log('Logging Error', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      console.log('../in error Handling..')
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}

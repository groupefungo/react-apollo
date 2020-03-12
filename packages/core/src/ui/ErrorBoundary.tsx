import React from 'react';
import DevError from "./DevError";
import Error from './Error';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: {},
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
      error: error,
    };
  }

  render() {
    if (this.state.hasError) {
      const {error} = this.state;
      // You can render any custom fallback UI
      return (
        <>
          <h1>Something went wrong.</h1>
          {
            ('development' === process.env.NODE_ENV && (
              <DevError error={error}/>
            ))
            ||
            ('production' === process.env.NODE_ENV && (
              <Error error="error: call tech. suppoprt"/>
            ))
          }
        </>
      );
    }
    return this.props.children;
  }
}

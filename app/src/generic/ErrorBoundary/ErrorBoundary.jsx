import React, { PureComponent } from "react";

class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getStateError(err) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(errorInfo);
  }
  render() {
    return this.state.hasError ? <p>Hubo un error</p> : this.props.children;
  }
}

export default ErrorBoundary;

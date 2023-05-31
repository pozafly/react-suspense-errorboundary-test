import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError', error);
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch', error, info);
  }

  render() {
    console.log(this.state);
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

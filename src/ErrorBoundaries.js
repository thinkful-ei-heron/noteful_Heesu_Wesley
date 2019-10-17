import React, { Component } from 'react'

export class ErrorBoundaries extends Component {
  state = {error: null};

  static getDerivedStateFromError(error) {
      console.error(error);
      return {error};
  }
  render(){
     // If there was an error, show an error page
     if (this.state.error) {
      return (
          <main className="error-page">
              <h1>Something seems to have gone wrong</h1>
              <p>Try refreshing the page</p>
          </main>
      );
  }
    return this.props.children;
  }
}

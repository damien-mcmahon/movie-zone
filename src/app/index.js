import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    const { movies, getData } = props;

    if (!movies) {
      getData();
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Movies</h1>
      </div>
    );
  }
}

export default App;

import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="app">
        <div className="nav_bar">
          <h1 className="title">HCA Nurse Analytics</h1>
        </div>
        <div className="content" />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from './components/Header';
import Card from './components/common/Card.js';

class App extends Component {
  render() {
    return (
      <div>
        {' '}
        <div>
          <Header />{' '}
        </div>
        <div className="cardStyle">
          <Card />
        </div>
      </div>
    );
  }
}

export default App;

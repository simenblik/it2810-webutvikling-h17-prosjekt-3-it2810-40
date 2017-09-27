import React, { Component } from 'react';
import Header from './components/Header';
import Card from './components/common/Card.js';
import ButtonList from './components/common/ButtonList.js';

class App extends Component {
  render() {
    return (
      <div>
        {' '}
        <div>
          <Header />{' '}
        </div>
        <div className="cardStyle">
          <Card>
            <ButtonList />
          </Card>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from './components/Header';
import {Card, ButtonList} from './components/common/index.js';

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

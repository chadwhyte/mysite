import React from 'react';
import './app.css';
import Card from '../card/card';
import { Cards } from '../card/cards';
import Bio from '../bio/bio';

function App() {
  return (
    <div className="app">
        <div className="app-summary">
          <Bio />
        </div>
        <div className="app-content">
          {Cards.map((card) => {
            return <Card {...card} />
          })}
        </div>
    </div>
  );
}

export default App;

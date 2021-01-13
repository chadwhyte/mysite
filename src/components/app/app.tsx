import React from 'react';
import './app.css';
import Card from '../card/card';
import { Cards } from '../card/cards';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        {Cards.map((card) => {
          return <Card {...card} />
        })}
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Scorecard from './Scorecard';
import ScorecardList from './ScorecardList'

const App = () => {
  return (
      <div className="App">
        <Scorecard name="Aaron"></Scorecard>
        <Scorecard name="Jane"></Scorecard>
        <ScorecardList></ScorecardList>
      </div>
  );
};

export default App;
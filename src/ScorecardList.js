import React, { Component } from 'react';
import './ScorecardList.css';
import Scorecard from './Scorecard';
import AddGreeter from './AddGreeter';

class ScorecardList extends Component {
  render() {
    return (
      <div className="ScorecardList">
        <AddGreeter addGreeting={this.addGreeting} />
        {this.renderGreetings()}}
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { greetings: ['Tim', 'Sue', 'Rachael', 'Ben'] };
    this.addGreeting = this.addGreeting.bind(this);
  }

  renderGreetings() {
    return this.state.greetings.map(name => (
      <Scorecard key={name} name={name}/>
    ));
  }

  addGreeting(newName) {
    this.setState({ greetings: [...this.state.greetings, newName] });
  }
}



export default ScorecardList;
import React, { Component } from 'react';
import './ScorecardList.css';
import Scorecard from './Scorecard';
import AddGreeter from './AddGreeter';

class ScorecardList extends Component {
  render() {
    return (
      <div className="ScorecardList">
        <AddGreeter addGreeting={this.addGreeting} />
        {this.renderGreetings()}
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { names: ['a', 'b'] };
    this.addGreeting = this.addGreeting.bind(this);
  }

  async componentDidMount() {
    const url = "https://tgsc-api.azurewebsites.net/api/values";  // https://topgunapi.azurewebsites.net/api/course/6, https://randomuser.me/api/?results=2
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);


  }


  renderGreetings() {
    return this.state.names.map(name => (
      <Scorecard key={name} name={name}/>
    ));
  }

  addGreeting(newName) {
    this.setState({ greetings: [...this.state.names, newName] });
  }
}



export default ScorecardList;
import React, { Component } from 'react';
import './Scorecard.css';

class Scorecard extends Component {
  render() {
    return (
      <div className="Scorecard">
        {this.state.greeting} {this.props.name}!
        <br/>
        <button onClick={this.infrench}>Now, in French</button>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello' };
    this.infrench = this.infrench.bind(this);
  }

  infrench() {
    this.setState({ greeting: 'Bonjour' });
  }
  
}



export default Scorecard;


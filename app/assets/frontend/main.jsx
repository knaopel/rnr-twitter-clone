import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Index from './components/index';
import Follow from './components/follow';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

let documentReady = () => {
  const reactNode = document.getElementById('react');
  if (reactNode) {
    ReactDOM.render(
      <Router>
        <Route path='/' exact component={Index} />
        <Route path='/follow/' component={Follow} />
      </Router>,
      reactNode
    );
  }

};

$(documentReady);

import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import SideNav from './SideNav';

import Navbar from "./src/components/layout/Navbar";
export { default as Toggle } from './Toggle';
export { default as Nav } from './Nav';
export { default as NavItem } from './NavItem';
export { default as NavIcon } from './NavIcon';
export { default as NavText } from './NavText';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

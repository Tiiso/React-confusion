import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap'
import { DISHES } from './shared/dishes';
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante con fusion</NavbarBrand>
        </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
      
    );
  }
}


export default App;

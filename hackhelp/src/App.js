import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Jobs from './Jobs.js'
import Profile from './Profile.js'
import Login from "./Login.js";
import Home from "./Home.js"
import Signup from "./Signup"
import { Navbar, Button, Form, FormControl, Nav } from 'react-bootstrap';

class App extends Component{
  state = {
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
          <Navbar bg="light" variant="light">
              <Navbar.Brand href="#home">HelpMe</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/Profile">MyProfile</Nav.Link>
                <Nav.Link as={Link} to="/Login">Login</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
              </Form>
          </Navbar>
          </div>
          <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/Profile' component={Profile} />
            <Route exact path='/Signup' component={Signup} />

            <Route render={function () {
              return <p>Not found</p>
            }} />
            </Switch>
          </div>
          </header>
          <br></br>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
      </div>
    );
  }
}

export default App;

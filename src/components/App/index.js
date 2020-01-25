import React, { Component } from 'react';

import { BrowserRouter as Router} from 'react-router-dom';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Navigation from '../Navigation';
import SignUpPage from '../SignUp/SignUp.js';
import HomePage from '../Home';
import Profile from '../Profile/Profile.js'
import Login from '../Login/Login.js'
import OrgProfile from '../OrgProfile/OrgProfile.js'
import EditProfile from '../EditProfile/EditProfile.js'
import UploadJobs from '../UploadJobs/UploadJobs.js'
import UserPoints from '../UserPoints/UserPoints.js'
import UsersPage from '../Users/Users.js'
import './index.css';
import * as ROUTES from '../../constants/routes';
import { Navbar, Button, Form, FormControl, Nav } from 'react-bootstrap';
import { withFirebase } from '../Firebase'
import { AuthUserContext } from '../Session';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  componentWillUnmount() {
      this.listener();
    }
  render() {
    return (
      <AuthUserContext.Provider value={this.state.authUser}>
      <div className="App">
        <header className="App-header">
        <div>
            <Navigation />
        </div>
        <div>
          <Switch>
            <Route exact path='/' render={(props) => <HomePage {...props} authUser={this.state.authUser} />} />
            <Route exact path='/Login' component={Login} />
            <Route exact path='/Profile' component={EditProfile} />
            <Route exact path='/Signup' component={SignUpPage} />
            <Route exact path='/UploadJobs' component={UploadJobs} />
            <Route exact path='/UserPoints' component={UserPoints} />
            <Route exact path= '/OrgProfile' component={OrgProfile} />

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
      </AuthUserContext.Provider>
    );
  }
}
export default withFirebase(App);

import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import Jobs from '../Jobs/Jobs.js'
import Profile from '../Profile/Profile.js'

class Home extends Component{
  constructor(props) {
  super(props);

  }

  render(){
    console.log(this.props.authUser);
    return(
      <div>
      <Profile  authUser = {this.props.authUser}/>
      <Jobs />
      </div>
    );
  }
}

export default Home;

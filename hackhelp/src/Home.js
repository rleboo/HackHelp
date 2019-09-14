import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import Jobs from './Jobs'
import Profile from './Profile'

class Home extends Component{
  render(){
    return(
      <>
      <Profile />
      <Jobs />
      </>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import './Profile.css';
import { Button, Card } from 'react-bootstrap';


class Profile extends Component{

  render(){

    return(

      <div className="Profile">
        <Card border="primary" style={{width: 'auto', height: '100%'}}>
          <Card.Body>
            <Card.Title> Ray Leebo </Card.Title>
            <Card.Subtitle className="mb-2 text-muted"> Ninja</Card.Subtitle>
            <Card.Text>
              blah blah blah
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Profile;

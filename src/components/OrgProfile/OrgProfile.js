import React, { Component } from 'react';
import './OrgProfile.css';
import { Button, Card } from 'react-bootstrap';


class OrgProfile extends Component{
  render(){
    return(
      <div className="Profile">
        <Card border="primary" style={{width: 'auto', height: '100%'}}>
          <Card.Body>
            <Card.Title> Company Title </Card.Title>
            <Card.Subtitle className="mb-2 text-muted"> Ninja</Card.Subtitle>
            <Card.Text>
              location:
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default OrgProfile;

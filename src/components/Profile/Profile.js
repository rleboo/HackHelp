
import React, { Component } from 'react';
import './Profile.css';
import { Button, Card } from 'react-bootstrap';
import ray from "./ray.jpg"

class Profile extends Component{
  render(){
    var renderData = (<div></div>)
    if(this.props.authUser != null){
      renderData = (
        <div className="Profile">
          <Card border="primary" style={{width: 'auto', height: '100%'}}>
          <div class="image-cropper">
            <Card.Img src={ray} class="profile-pic"/>
          </div>
          <Card.Body>
            <Card.Title> {this.props.authUser.email} </Card.Title>
            <Card.Subtitle className="mb-2 text-muted"> Ninja (420 points) </Card.Subtitle>
            <Card.Subtitle > Date Joined: Sep. 2019 </Card.Subtitle>
            <Card.Text>
              Upcoming Jobs: ...

            </Card.Text>
          </Card.Body>
          </Card>
        </div>
      )
    }
    else{
      renderData =  (
        <div></div>
      )

    }
    console.log(this.props.authUser)
    return(
      renderData
    );
  }
}

export default Profile;

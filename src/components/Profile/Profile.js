
import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

import './Profile.css';
import { Button, Card } from 'react-bootstrap';
import ray from "./ray.jpg"

class Profile extends Component{

  constructor(props)  {

    super(props);
    this.state = {
      loading: false,
      userinfo: {},
    };
  }

  //Once all html components have been rendered correctly
  componentDidMount() {
    this.setState({loading: true});
    this.props.firebase.auth.onAuthStateChanged(function(user) {
      // Or use arrows
      // You need to add a check here for condition: https://stackoverflow.com/questions/37883981/cant-get-currentuser-on-load
      if (user) {
        // user is signed in
        console.log(user.uid);
        console.log("Fuck");
      
        this.props.firebase.user(user.uid).once('value', snapshot => {
          //on is a continious listener that checks for any changes
          const usersObject = snapshot.val();
          //retrieves an array of all objects and maps it according to the usersList 
          console.log(usersObject);
          this.setState({
              userinfo: usersObject,
              //Extracts a JavaScript value from a DataSnapshot.
              loading: false,
            });
      });
    }
    }.bind(this));
  }

  render(){
    console.log(this.state);
    var renderData = (<div></div>)
    if(this.props.authUser != null){
      renderData = (
        <div className="Profile">
          <Card border="primary" style={{width: 'auto', height: '100%'}}>
          <div class="image-cropper">
            <Card.Img src={ray} class="profile-pic"/>
          </div>
          <Card.Body>
            <Card.Title> {this.state.userinfo.username} </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{this.state.userinfo.points} points</Card.Subtitle>
            <Card.Subtitle > Joined {this.state.userinfo.date_joined }</Card.Subtitle>
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

export default withFirebase(Profile);

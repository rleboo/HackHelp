import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Card } from "react-bootstrap";
import * as ROUTES from '../../constants/routes';

import { Switch, Link , withRouter} from 'react-router-dom';
import { withFirebase } from '../Firebase';
import './EditProfile.css';

const INITIAL_STATE = {
  description: '',
  gender: '',
  mobile: '',
  error: null,
};

//TODO: Add error handling to form. Don't override database
//TODO: Add dynamic text box.  
//TODO: Figure out redirect

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { description, gender, mobile } = this.state;

    // Get the userid information 
    this.props.firebase.auth.onAuthStateChanged(function(user) {
      if (user) {
        //Get the logged-in user
        //TODO: Only update valid items 
        return this.props.firebase.user(user.uid).update({
          description, 
          gender, 
          mobile
        }).then(() => {
          this.setState({ ...INITIAL_STATE });
          //Reset the intial state
          this.props.history.push('/');
        }).catch(error => {
          this.setState({ error });
        });
      
      }
    }.bind(this));
    // Bind "this" to this function 


  }; 

  onChange = event => {
    console.log("Submit this chief");
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {

    const {
      description, 
      gender, 
      mobile
    } = this.state;

    // Add Invalid function/const here

    /*
    <div class="form-group">
      <label for="profileimg">Profile Image:</label>
      <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
    </div>
    */

    return (
      <span className = "EditProfile">
      <Card border="primary">
      <form onSubmit={this.onSubmit} action={'/'}>
        
      <FormGroup controlId="description" bsSize="large">
        <FormLabel>Description:</FormLabel>
          <FormControl
          autoFocus
          as = "textarea"
          rows = "3"
          name="description"
          value={description}
          onChange={this.onChange}
          type="text"
          placeholder="Profile Description..."
          />
      </FormGroup>
      <FormGroup controlId="mobile" bsSize="large">
        <FormLabel>Mobile:</FormLabel>
          <FormControl
          autoFocus
          name="mobile"
          value={mobile}
          onChange={this.onChange}
          type="text"
          placeholder="xxx-xxxx-xxxx"
          />
      </FormGroup>
      <FormGroup controlId="gender">
        <FormLabel>Example select</FormLabel>
          <FormControl as="select" //value = {setValue}
          name ="gender"
          value = {gender}
          onChange={this.onChange}
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
            <option>N/A</option>
          </FormControl>
      </FormGroup>
      <Button
        block
        bsSize="small"
        type="submit"
        >
        Submit
      </Button>
      <br></br>
    </form>
    </Card>
    </span>
    );
  }
}

export default withRouter(withFirebase(EditProfile));

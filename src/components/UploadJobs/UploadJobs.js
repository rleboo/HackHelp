import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Card } from "react-bootstrap";
import { Switch, Link , withRouter} from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import './UploadJobs.css';

const INITIAL_STATE = {
  title: '',
  description: '',
  location: '',
};

class UploadJobs extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { title, description, location } = this.state;

    this.props.firebase.auth.onAuthStateChanged(function(user) {
      if (user) {
        // Check if its a company or a user
        return this.props.firebase.jobs().push({
          title, 
          description, 
          location
        }).then(() => {
          this.setState({ ...INITIAL_STATE });
          //Reset the intial state
          this.props.history.push(ROUTES.HOME);
        }).catch(error => {
          this.setState({ error });
        });
      }
    }.bind(this));

  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {

    const {
      title,
      description,
      location,
    } = this.state;

    const isInvalid =
      title === '' ||
      description === '' ||
      location === '';

    return (
      <div className = "UploadJobs">
      <Card border="primary">
      <form onSubmit={this.onSubmit}>
      <FormGroup controlId="title" bsSize="large">
        <FormLabel>Title:</FormLabel>
          <FormControl
          autoFocus
          name="title"
          value={title}
          onChange={this.onChange}
          type="text"
          placeholder="Project Title..."
          />
      </FormGroup>
      <FormGroup controlId="description" bsSize="large">
        <FormLabel>Description:</FormLabel>
          <FormControl
          autoFocus
          name="description"
          value={description}
          onChange={this.onChange}
          type="text"
          placeholder="Project Description..."
          />
      </FormGroup>
      <FormGroup controlId="location" bsSize="large">
        <FormLabel>Location:</FormLabel>
          <FormControl
          autoFocus
          name="location"
          value={location}
          onChange={this.onChange}
          type="text"
          placeholder="Project Location..."
          />
      </FormGroup>
      <Button
        disabled={isInvalid}
        bsSize="small"
        type="submit"
        block
      >
        Submit
      </Button>
      <br></br>
    </form>
    </Card>
    </div>
    );
  }
}

export default withFirebase(UploadJobs);

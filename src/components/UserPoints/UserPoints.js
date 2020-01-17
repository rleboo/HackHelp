import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Card, Form } from "react-bootstrap";
import { Switch, Link , withRouter} from 'react-router-dom';
//import { withFirebase } from '../Firebase';
import './UserPoints.css';


class UserPoints extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "UploadJobs">
      <Card border="primary">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address:</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          </input>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput1">Points:</label>
          <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter points" name="quantity" min="1" max="5" >
          </input>
        </div>

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
    </div>
    );
  }
}

export default UserPoints;

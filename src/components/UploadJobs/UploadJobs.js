import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Card } from "react-bootstrap";
import { Switch, Link , withRouter} from 'react-router-dom';
//import { withFirebase } from '../Firebase';
import './UploadJobs.css';


class UploadJobs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "UploadJobs">
      <Card border="primary">
      <form>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Title:</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Description:</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Location</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Organization</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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

export default UploadJobs;

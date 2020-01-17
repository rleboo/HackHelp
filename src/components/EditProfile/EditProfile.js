import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Card } from "react-bootstrap";
import { Switch, Link , withRouter} from 'react-router-dom';
//import { withFirebase } from '../Firebase';
import './EditProfile.css';


class EditProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "EditProfile">
      <Card border="primary">
      <form>
      <div class="form-group">
        <label for="profileimg">Profile Image:</label>
        <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Description:</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Mobile:</label>
        <input type="tel" class="form-control" id="exampleFormControlInput1" placeholder="xxx-xxxx-xxxx" />
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Gender:</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>N/A</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
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

export default EditProfile;

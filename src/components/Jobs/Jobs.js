
import React, { Component } from 'react';
import './Jobs.css';
import { Button, Card } from 'react-bootstrap';
import data from './data.json'
import { withFirebase } from '../Firebase';

class Jobs extends Component{
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      jobs: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.jobs().on('value', snapshot => {

      const jobObject = snapshot.val();
      console.log(jobObject);

      const jobsList = Object.keys(jobObject).map(key => ({
        ...jobObject[key],
        uid: key,
      }));

      this.setState({
        jobs: jobsList,
        //Extracts a JavaScript value from a DataSnapshot.
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
    // Stop listening once we leave the page?/ Component is about to be destroyed
  }

  render(){
    const { jobs, loading } = this.state;

    return(
      <div>
        <div className="Jobs">
          {loading &&<div> Loading...</div>}
          <JobList jobs={jobs} />
        </div>
      </div>

    );
  }
}

const JobList = ({ jobs }) => (
  <div>
    {jobs.map(d => 
      <Card border="primary">
        <Card.Body>
          <Card.Title> {d.title} </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{d.orgName}</Card.Subtitle>
          <Card.Text>
            {d.description}
          </Card.Text>
          <Card.Link href="#">Website</Card.Link>
        </Card.Body>
      </Card>
      )}
  </div>
);


export default withFirebase(Jobs);

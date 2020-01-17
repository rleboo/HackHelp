
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
    filter: data,
    users: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();
      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }));
      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
}

  render(){
    const { users, loading } = this.state;
    return(
      <div>
      <div className="Jobs">
      {this.state.filter.map((d) =>
        <div className = "Job" key={Math.random()}>
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
        </div>
      )}

      </div>
    </div>

    );
  }
}



export default withFirebase(Jobs);

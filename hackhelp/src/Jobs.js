import React, { Component } from 'react';
import './Jobs.css';
import { Button, Card } from 'react-bootstrap';
import data from './data.json'

class Jobs extends Component{
  state = {
    filter: data
  }

  // zipFilter() {
  //   for(let i = 0; i < data.length(); i++){
  //     if(data.zip == '')
  //   }
  //   this.setState((state, props) => {
  //     return {filter: state.counter + props.step};
  // });
  // }
  //
  // dateFilter() {
  //   this.setState((state, props) => {
  //     return {filter: state.counter + props.step};
  //   });
  // }

  render(){

    return(

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
    );
  }
}

export default Jobs;

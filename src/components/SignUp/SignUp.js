import { Link, withRouter } from 'react-router-dom';
import React, { Component }  from 'react';


import {
  Button,
  Alert,
  FormGroup,
  FormControl,
  FormLabel
} from "react-bootstrap";

import "./SignUp.css";

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const SignUpPage = () => (
  <div>
    <SignUpForm/>
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };

  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;

    var now = new Date();
    now.toLocaleDateString('en-US');
    console.log(now);

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        return this.props.firebase
          .user(authUser.user.uid)
          .update({
            username,
            email,
            points: 0,
            img: '',
            date_joined: now,
            description: '',
            gender: '',
            phonenumber: null,
            previous_jobs: [],
            current_jobs: [],
          });
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <span className="signup">
      <form onSubmit={this.onSubmit}>
        <FormGroup controlId="username" bsSize="large">
        <FormLabel>Username</FormLabel>
          <FormControl
          autoFocus
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
          />
        </FormGroup>

        <FormGroup controlId="email" bsSize="large">
        <FormLabel>Email</FormLabel>
          <FormControl
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
          />
          </FormGroup>

        <FormGroup controlId="passwordOne" bsSize="large">
        <FormLabel>Password</FormLabel>
            <FormControl
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
          />
          </FormGroup>

        <FormGroup controlId="passwordTwo" bsSize="large">
          <FormLabel>Confirm Password</FormLabel>
            <FormControl
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm Password"
            />
        </FormGroup>

        <Button disabled={isInvalid}
        bsSize="large"
        type="submit"
        block>
          Sign Up!
        </Button>

        {error && <p>{error.message}</p>}
      </form>
      </span>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);
const SignUpForm = withRouter(withFirebase(SignUpFormBase));
export default SignUpPage;
export { SignUpForm, SignUpLink };

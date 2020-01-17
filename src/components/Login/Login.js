
import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import { Switch, Link , withRouter} from 'react-router-dom';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import SignUpLink from '../SignUp/SignUp.js'

const LoginPage = () => (
  <div>
    <LoginForm/>
  </div>
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class LoginFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = {...INITIAL_STATE};
  }

  onChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  onSubmit = event => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.PROFILE);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  }

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';
    return (
      <span className="Login">
      <div className="Login">
        <form onSubmit={this.onSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.onChange}
              type="password"
            />
          </FormGroup>
          <Button disabled={isInvalid}
            block
            bsSize="large"
            type="submit"
          >
            Login
          </Button>
        </form>
        <div>
          <br />
          <p>New to HelpMe? Register below</p>
          <Link to={'/signup'}> Signup </Link>
        </div>
      </div>
      </span>
    );
  }
}

const LoginForm = withRouter(withFirebase(LoginFormBase));

export default LoginPage;
export {LoginForm};

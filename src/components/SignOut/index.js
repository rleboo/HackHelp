import React from 'react';
//import { withFirebase } from '../Firebase';

import * as ROUTES from '../../constants/routes';

import { Nav } from 'react-bootstrap';

import { Link } from 'react-router-dom';
const SignOutButton = ({ firebase }) => (
  <Nav.Link as={Link} to={ROUTES.HOME} onClick={firebase.doSignOut}>
    Sign Out
  </Nav.Link>
);
export default SignOutButton;
//export default withFirebase(SignOutButton);

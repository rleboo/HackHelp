import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { Navbar, Button, Form, FormControl, Nav } from 'react-bootstrap';
import { AuthUserContext } from '../Session';

//import { withFirebase } from '../Firebase';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
)
const NavigationNonAuth = () => (
  <Navbar bg="light" variant="light">
    <Navbar.Brand as={Link} to={ROUTES.HOME}>HelpMe</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to={ROUTES.HOME}>Home</Nav.Link>
          <Nav.Link as={Link} to={ROUTES.SIGN_IN}>Login</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
    </Navbar>
)

const NavigationAuth = () => (
  <Navbar bg="light" variant="light">
    <Navbar.Brand as={Link} to={ROUTES.HOME}>HelpMe</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to={ROUTES.HOME}>Home</Nav.Link>
          <Nav.Link as={Link} to={ROUTES.PROFILE}>Profile</Nav.Link>
          <SignOutButton/>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
    </Navbar>
)
export default Navigation;

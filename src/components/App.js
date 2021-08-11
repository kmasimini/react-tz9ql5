import React from 'react';
import Signup from './Signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from './Signin';
import PrivateRoute from './PrivateRoute'


export default function App() {
  return (
    <div>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh' }}
      >
        <div className="w-100" style={{ maxwidth: '200px' }}>
          <Router>
            <AuthProvider>
              <Switch>
              <PrivateRoute exact path="/" component={TodoList} />
              <Route path="/signup" component={Signup} />
              <Route path="/signin" component={Signin} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </div>
  );
}

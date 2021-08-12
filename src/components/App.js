import React from "react";
import Signup from './Signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Wheather from './Wheather';
import Login from './Login'



export default function App() {
  return (
    <Container
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: '100vh' }}
  >
     <div className="w-100" style={{ maxwidth: '200px' }}>
    <Router>
      <AuthProvider>
        <Switch>
        <Route exact path="/" component={Wheather} />
         <Route path="/signup" component={Signup} />
         <Route path="/login" component={Login} />
        </Switch>
      </AuthProvider>
    </Router>
  </div>
  </Container>
  
  )
}

import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from './AuthContext';
import { Link, useHistory } from 'react-router-dom';
import './weather.css';


export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory()

  async function handleSubmit(e){
   try{
        setError("")
        setLoading(true)
       await login(emailRef.current.value, passwordRef.current.value)
       history.push("/")
   }catch {
       setError('Failed to log in')
   }

    setLoading(false)
   
 }
 

  return (
    <>
      
    <div className="form-container">
     <div className="form-content-left"> 
      </div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          {error &&<Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Login
            </Button >
            <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup">Sign Up</Link>
      </div>
          </Form>
        </Card.Body>
      </Card>
      </div>
     
    </>
  );
}

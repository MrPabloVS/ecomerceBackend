import { Form, Button } from "react-bootstrap";
import axios from "axios";
import React, {useState} from "react";


function Register() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

    function register(e) {
      e.preventDefault()
      console.log({email, password})
      axios.post("http://localhost:8000/api/user/register", {email: email, name: name, password: password})
        .catch(err => console.log(err))
      setEmail("")
      setPassword("")
      setName("")
    }

    return (
       
        
            <Form onSubmit={register} >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter Name" value={name} onChange={e => setName(e.target.value)}/>
              </Form.Group>

              
        
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
              </Form.Group>
              
              <Button variant="primary" type="submit">
                Submit
              </Button>
                <a href="/login">
                  <Form.Text className="text-muted">
                  Already registered? sign in
                  </Form.Text>
                </a>
              
            </Form>
          );
           
  }

  export default Register
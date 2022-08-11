import { Form, Button } from "react-bootstrap";
import React, {useState} from "react";
import axios from "axios";
import {ReactSession} from "react-client-session"
import {useCartContext} from "../../Context/CartContext"

function Login() {
    const {IsLogged, getSession, setUserToken, User} = useCartContext()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function login(e) {
      e.preventDefault()
      console.log({email, password})
      axios.post("http://localhost:8000/api/user/login", {email: email, password: password})
        .then((res) => {
          console.log(res.data)
          setUserToken(res.data)
          //ReactSession.set("token", res.data)
          //console.log(User)
        }).catch(err => console.log(err))
      //getSession()
      setEmail("")
      setPassword("")
    }

    return (
       
        
            <Form onSubmit={login} >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
        
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
              </Form.Group>
              
              <Button variant="primary" type="submit"  >
                Submit
              </Button>
                <a href="/register">
                  <Form.Text className="text-muted"> 
                  you dont have an account yet? Register
                  </Form.Text>
                </a>
              <Button variant="primary" onClick={getSession}>
                prueba
              </Button>
            </Form>
          );
           
  }

  export default Login

  //href="javascript:setTimeout(()=>{window. location = 'http://localhost:3001' },5000);"
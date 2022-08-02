import { Form, Button } from "react-bootstrap";

function Login() {
    return (
       
        
            <Form onSubmit={"/"} action={"http://localhost:3000/api/user/login"} method="POST">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email"/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
        
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" />
              </Form.Group>
              
              <Button variant="primary" type="submit">
                Submit
              </Button>
                <a href="/register">
                  <Form.Text className="text-muted"> 
                  you dont have an account yet? Register
                  </Form.Text>
                </a>
              
            </Form>
          );
           
  }

  export default Login
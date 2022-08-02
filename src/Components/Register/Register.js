import { Form, Button } from "react-bootstrap";

function Register() {
    return (
       
        
            <Form onSubmit={"/"} action={"http://localhost:3000/api/user/register"} method={"POST"}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Enter Name" />
              </Form.Group>

              
        
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" />
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
import { Form, Button } from "react-bootstrap";

function Login() {
    return (
       
        
            <Form onSubmit={"/"} action={"/api/user"} method={"POST"}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAdress">
                <Form.Label>Adress</Form.Label>
                <Form.Control type="text" placeholder="Enter Adress" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAge">
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="Enter Age" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicTel">
                <Form.Label>Telephone</Form.Label>
                <Form.Control type="number" placeholder="Enter Telephone" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAvatar">
                <Form.Label>Avatar</Form.Label>
                <Form.Control type="file" placeholder="Enter Avatar file" />
              </Form.Group>
        
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
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

  export default Login
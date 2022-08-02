
import CartWidget from "../CartWidget/CartWidget";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'
import { useCartContext } from '../../Context/CartContext';



function Navegacion() {
  const [seeCart, setSeeCart] = useState(false)
  const [Categorias] = useState(["electronics", "jewellery","masculine","feminine"])
  const {cartList} = useCartContext()

  useEffect(() => {
    if (cartList.length > 0) {
      setSeeCart(true)
    } else{
      setSeeCart(false)
    }
  }, [cartList])

    

    return (
      <Navbar bg="light" expand="lg">
        <Container>
          {seeCart ? <CartWidget/> : <></>}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link to="/"><Nav.Link href="#home">Home</Nav.Link></Link>
              <Link to="/cart"><Nav.Link href="#link">Cart</Nav.Link></Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                {Categorias && Categorias.map(c => <Link to={`/categories/${c}`}><NavDropdown.Item href={`/categories/${c}`}>{c}</NavDropdown.Item></Link>)}
              </NavDropdown>
              <Link to="/login"><Nav.Link href="#link">login</Nav.Link></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Navegacion;
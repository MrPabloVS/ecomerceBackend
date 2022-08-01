import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../../Context/CartContext';
import {  Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CartWidget() {
    const {cartList} = useCartContext()
    return(
        <Link to="/cart" >
            <Navbar.Brand href="/cart"><p >{cartList.length}</p ></Navbar.Brand>
            <Navbar.Brand href="/cart"><FontAwesomeIcon icon={faCartPlus} /></Navbar.Brand>
        
        </Link>
    );
}


export default CartWidget
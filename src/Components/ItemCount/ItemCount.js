import {ButtonGroup, Button, Row, Col} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext'

function ItemCount({stockProp, totalOnCart, item}) {

    const [stock] = useState(stockProp - totalOnCart)
    const [addNumber, setAddNumber] = useState(1)
    const {addItem} = useCartContext()
    const [seClickeo, setSeClickeo] = useState(false)
    
    
    

    function alClick() {
        setSeClickeo(true)
        addItem(item ,addNumber)
    }
    
    
    function decidirBoton() {
        if (seClickeo === false) {
            return(
                <div className="container-fluid">
            <Row>
                <Col>
                    <ButtonGroup aria-label="Basic example" className="align-items-center">
                        <Button variant="primary" onClick={()=>minusNumber()}>-</Button>
                        <Button variant="secondary"> {addNumber} </Button>
                        <Button variant="primary" onClick={()=>plusNumber()}>+</Button>
                    </ButtonGroup> <br />
                </Col>
                <Col>
                    <div className="d-grid gap-2">
                        <Button onClick ={()=>alClick()} variant="outline-success" size="lg">Agregar al Carrito</Button>
                    </div>
                </Col>
            </Row>
            
        </div>
            )
        } else if(seClickeo === true) {
            return(<div><Link to="/cart"><Button>Terminar mi compra</Button></Link>
            <Link to="/"><Button>Seguir Comprando</Button></Link></div>)  
        }}

        useEffect(() => {
            setSeClickeo(false)
        }, [])
    
    function plusNumber() {
        if (addNumber<stock) {
            setAddNumber(addNumber + 1)
        }
    }
    function minusNumber() {
        if (addNumber>1) {
            setAddNumber(addNumber - 1)
        }
    }

    return(
        <div className="container-fluid">
            
            {decidirBoton()}
            
        </div>
    );
}

export default ItemCount
import ItemCount from '../ItemCount/ItemCount';
import {Card,Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useState } from 'react';



function ItemDetail({itemId,itemImg, itemName, itemPrice, stockProp, item }) {
    const {seClickeo} = ItemCount
    const [totalOnCart] = useState(item.amount)

    
    function decidirBoton() {
        if (seClickeo === false) {
            return(
                <ItemCount stockProp={stockProp} totalOnCart={totalOnCart} itemId={itemId}/>
            )
        } else if(seClickeo === true) {
            return(<div><Link to="/cart"><Button>Terminar mi compra</Button></Link>
            <Link to="/"><Button>Seguir Comprando</Button></Link></div>)  
        }}
    

    return(
            <>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={itemImg} />
                <Card.Body>
                    <Card.Title>{itemName}</Card.Title>
                    <Card.Text>
                    {itemPrice}
                    </Card.Text>
                    <ItemCount item={item} stockProp={stockProp} totalOnCart={totalOnCart} itemId={itemId} itemName={itemName} itemPrice={itemPrice}/>
                    {decidirBoton()}
                </Card.Body>
                </Card>
            </>
    )

}

export default ItemDetail
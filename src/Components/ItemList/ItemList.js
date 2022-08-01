import Item from "../Item/Item";
import {Row} from 'react-bootstrap'



function ItemList({lista}) {
    
    
    
    return(
        <div>   
            <Row xs={1} md={4} className="g-4">
                {lista && lista.map(u=> <Item key={u.id}  itemName={u.title} itemPrice={"$" + u.price} itemImg={u.img} stockProp={5} itemId={u.id} />) }
            </Row>
        </div>
    );
}

export default ItemList
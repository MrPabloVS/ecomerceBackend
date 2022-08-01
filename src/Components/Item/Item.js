
import {Card, Col, Row, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'



function Item({itemImg, itemName, itemPrice, itemId}) {
    return(
        <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={itemImg} />
            <Card.Body>
                <Row>
                    <Col>

                        <Card.Title>{itemName}</Card.Title>
                        <Card.Text>{itemPrice}</Card.Text>

                    </Col>
                    <Col>
                        <Link to={`/info/${itemId}`}><Button>+info</Button></Link>
                    </Col>
                </Row>

                

            </Card.Body>
        </Card>
        </Col>
    );
}

export default Item
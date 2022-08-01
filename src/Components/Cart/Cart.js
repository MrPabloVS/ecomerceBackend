

import { useCartContext } from "../../Context/CartContext";
import {Card,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {useState} from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { getFirestore } from '../../sevices/getFirebase'


function Cart() {
    const {cartList, clearSingleItem, precioTotal, clearCart} = useCartContext()
    const [formData, setFormData] = useState({
        name:  'defaultName',
        phone: 'defaultPhone',
        email: 'defaultEmail',
        cardN: 'defaultCardN'
    })
    const [orderId, setOrderId] = useState("")
    const [seCompro, setSeCompro] = useState(false)
    

    const generarOrden = () =>{
       
    // armar la orden y su estructura
     let orden = {}
     orden.date = firebase.firestore.Timestamp.fromDate(new Date());    
     orden.buyer = formData
     orden.totalPrice = precioTotal();
     orden.items = cartList.map(cartItem => {
         const id = cartItem.item.id;
         const nombre = cartItem.item.title;
         const precio = cartItem.item.price * cartItem.amount;
         
         return {id, nombre, precio}   
     })
     
     // agregar la orden a firebase
     const dataBase = getFirestore();
     const ordersCol = dataBase.collection('Orders');
     ordersCol.add(orden)
     .then((document)=>{
         setOrderId(document.id)
     })
     .catch( err => {
         console.log(err);
     })
     //Limpiar formulario
     .finally(()=>{
         clearCart()
         setFormData({
             name:  '',
             phone: '',
             email: '',
             cardN: ''
         })
     })
 
 
 
     //Actualizar stock
     const itemsToUpdate = dataBase.collection('Items').where(
         firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i=> i.item.id)
     )
 
     const batch = dataBase.batch();
 
     itemsToUpdate.get()
     .then( collection=>{
         collection.docs.forEach(docSnapshot => {
             batch.update(docSnapshot.ref, {
                 stock: docSnapshot.data().stock - cartList.find(item => item.item.id === docSnapshot.id).amount
             })
         })
 
         batch.commit()
            
     })
 
     setSeCompro(true)
 }
 
 

    function renderCondicionalCart() {
        if (cartList.length > 0 ) {
            return(
                cartList.map(item => 
                <Card key={item.item.id} className="text-center">
                    <Card.Body>
                        <Card.Title>{item.amount} x {item.item.title}</Card.Title>
                        <Card.Text>{item.item.price}</Card.Text>
                        <Link to={`/info/${item.item.id}`}><Button variant="primary"> +info </Button></Link>
                    </Card.Body>
                    <Card.Footer className="text-muted text-danger" ><Button onClick={()=> clearSingleItem(item)} variant="outline-danger">Eliminar del Carro</Button></Card.Footer>
                </Card>)

                
            )

        } else  {
            return(
                <h2>No hay Productos en el carrito</h2>
            )  
        }}
    
    

    return(
        <div>


        {renderCondicionalCart()}
        <h3>Precio Total: ${ precioTotal()} </h3>

        <button onClick={()=>generarOrden()}>Terminar Compra</button>

        {seCompro ? 
        <h3>Haz el seguimiento de tu compra con el siguiente codigo: {orderId} </h3>
        :<></>}

        </div>
    )
}

export default Cart         
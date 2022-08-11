import {useState, createContext, useContext } from "react";
import axios from "axios";
import {ReactSession} from "react-client-session"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext) 

function CartContextProvider({children}) {
    //States
    const [cartList, setCartList] = useState([])
    const [IsLogged, setIsLogged] = useState(false)
    const [User, setUser] = useState({})

    // getSession
    const getSession = () => {
        console.log(User)
        axios.get("http://localhost:8000/session", {token: ReactSession.get("token")})
            .then((res)=>{
                console.log(res.data)
                setUser([res.data])})
            }
    

    // Set User Token
    const setUserToken = async (token) => {
        axios.get("http://localhost:8000/session", {token: token})
            .then((res)=>{
                console.log(res.data)
                setUser({user: res.data})})
        console.log(token)
         setUser()
        console.log(User)
    }

    

    //Funcion addItem
    const addItem = (item, amount) => {

        const index = cartList.findIndex(i => i.item.id === item.id)
    
          if (index > -1) {
            const cantidadEnCart = cartList[index].amount
    
            cartList.splice(index, 1)
            setCartList([...cartList, { item, amount: amount + cantidadEnCart}])
          }
          else {
            setCartList([...cartList, {item, amount}])
          }
      }
    


    //Funcion para borrar un solo Item
    const clearSingleItem = (item) =>{
        
        const deleteProduct = cartList.filter((prod) => prod.item.id !== item.item.id);
        setCartList([...deleteProduct])
    }

    //Funcion para vaciar carrito
    const clearCart =()=>{
        setCartList([])
    }

    //Funcion para sacar el precio total de la compra
    const precioTotal = () =>{
       
        
        return cartList.reduce((acum, valor)=>(acum + (valor.amount * valor.item.price)), 0)

    }

    

    return(
        <CartContext.Provider value={{
            IsLogged,
            cartList,
            addItem,
            clearCart,
            clearSingleItem,
            precioTotal,
            getSession,
            setUserToken,

        }}>
            {children}
        </CartContext.Provider> 

    )
}

export default CartContextProvider
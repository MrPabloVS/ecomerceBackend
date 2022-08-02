//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './Components/Navegacion/Navegacion';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { createContext } from 'react';
import  CartContextProvider  from './Context/CartContext';
import UserContextProvider, {UserContext} from './Context/UsersContext';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register'



export const AppContext = createContext()
library.add(fas,)

function App() {

  

  return (
    <AppContext.Provider>
      <UserContext.Provider> 
        <CartContextProvider>
          <BrowserRouter>
            <Navegacion/>
            <Switch>
              <Route exact path="/">
                  <ItemListContainer/>
              </Route>
              
              <Route exact path="/categories/:categoryId"> 
                  <ItemListContainer/>
              </Route>
              <Route exact path="/info/:id">
                  <ItemDetailContainer/>
              </Route>
              <Route exact path="/cart">
                  <Cart/>
              </Route>
              <Route exact path="/login">
                  <Login/>
              </Route>
              <Route exact path="/register">
                  <Register/>
              </Route>
              <Route exact path="*">
                  <h1>Pagina no encontrada</h1>
              </Route> 
            </Switch>
          </BrowserRouter>
        </CartContextProvider>
      </UserContext.Provider>
    </AppContext.Provider>
  );
}

export default App;

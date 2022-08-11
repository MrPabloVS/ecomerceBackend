import {useState, createContext, useContext } from "react";
import React from 'react';
import axios from "axios";
import {ReactSession} from "react-client-session" 

export const UserContext = React.createContext()

//const UsersContext = createContext([])

export const useUserContext = () => useContext(UserContext)

function UserContextProvider({children}) {

const [IsLogged, setIsLogged] = useState(false)
const [User, setUser] = useState({})

axios.get("http://localhost:8000/session", {token: ReactSession.get("token")})
       .then((res)=>{
        console.log(res.data)
        setUser(res.data)})
    

    return(
        <UserContextProvider.Provider value={{
            
            IsLogged,
            User

        }}>
            {children}
        </UserContextProvider.Provider>

    )

}

export default UserContextProvider
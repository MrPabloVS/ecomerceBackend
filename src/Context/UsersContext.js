import {useState, createContext, useContext } from "react";
import axios from "axios";




const UsersContext = createContext([])

export const useUsersContext = () => useContext(UsersContext)

function UsersContextProvider({children}) {

const [IsLogged, setIsLogged] = useState(false)
const [User, setUser] = useState({})

    // Registrar usuario
    const registerUser = (user) => {
      
        axios.post("localhost/3000/api/user/register", {
            Admin: user.admin,
            MailAdress: user.mail,
            Password: user.pass,
            Username: user.name,
            TimeStamp: new Date.now()
        })
        .then( response => {
            setIsLogged(true)
            setUser(response)
        })
        .catch( err => {
            setIsLogged(false)
            console.log(err);
        })

    }

    // Login

    const loginUser = (user) => {
        axios.get("localhost/3000/api/user/register", {
            MailAdress: user.mail,
            Password: user.pass
        })
        .then( response => {
            if (response.boolean === true) {
                setUser(response.user)
                setIsLogged(true)
            }else {
                setUser(response.user)
                setIsLogged(true)
            }
        })
        .catch( err => {
            setIsLogged(false)
            console.log(err);
        })
    }

    return(
        <UsersContextProvider.Provider value={{
            registerUser,
            loginUser,
            IsLogged,
            User

        }}>
            {children}
        </UsersContextProvider.Provider>

    )

}

export default UsersContextProvider
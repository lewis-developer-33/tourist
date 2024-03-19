'use client'
import {createContext,useState,useContext} from 'react'

export const UserContext = createContext()

const UserProvider = ({children}) => {
    const [userValue,setUserValue] = useState({
        name:'Lewis',
        email:'shadowvictor33@gmail.com',
        token:''
    })
    const value = {userValue,setUserValue}
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider

export const useUserContext = () => {
 const context = useContext(UserContext)   
 if (!context){
    throw new Error("useUserContext must be within Provider")
 }
 return context
}
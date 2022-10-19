
import React, {useContext} from 'react'
import { UserContext } from './UserContext'

export const User = () => {
    const userContext = useContext(UserContext)
    const handleLogin = () => {
        // if(userContext){
        //     userContext.setUser({
        //         name: 'abc',
        //         email: "abc@gmail.com"
        //     })
        // }

        userContext.setUser({
            name: 'abc',
            email: "abc@gmail.com"
        })
    }

    const handleLogout = () => {
        // if(userContext){
        //     userContext.setUser(null)
        // }
        // We can remove if check due to type assertion
        userContext.setUser(null)
    }
  return (
    <div>
        <button onClick={handleLogin} >Login</button>
        <button onClick={handleLogout} >Logout</button>
        <div>User name is: {userContext?.user?.name} </div>
        <div>User email is: {userContext?.user?.email}</div>
    </div>
  )
}
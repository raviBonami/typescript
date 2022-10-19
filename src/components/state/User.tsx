
import React,{useState} from 'react'

type AuthUser = {
    name: string,
    email: string
}

export const User = () => {

    const [user, setUser] = useState<AuthUser | null>(null)
    // User will be either of type AuthUser or null

    // const [user, setUser] = useState<AuthUser>({} as AuthUser)
    // Doing useState assertion by force, what this does is that
    // it tells TS that our user will be of type AuthUser and 
    // initial value of user is an empty object of type AuthUser

    const handleLogin = () => {
        setUser({
            name:'ABC',
            email: 'example@gmail.com'
        })
    }

    const handleLogout = () => {
        setUser(null)
    }
  return (
    <div>
        <button onClick={handleLogin} >Login</button>
        <button onClick={handleLogout} >Logout</button>
        <div>
            <h3>User name is {user?.name}</h3>
            <h3>User email is {user?.email} </h3>
        </div>
    </div>
  )
}

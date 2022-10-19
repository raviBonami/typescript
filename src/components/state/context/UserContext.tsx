
import React,{createContext, useState} from 'react'

export type AuthUser = {
    name: string,
    email: string
}

// export const UserContext = createContext<UserContextType | null>(null)
// while above line would work, better would be type assertion shown below
export const UserContext = createContext({} as UserContextType)
// We can then remove if checks from where we are using in User component


type UserContextProviderProps = {
    children: React.ReactNode
}

type UserContextType = {
    user: AuthUser | null,
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null >>
}

export const UserContextProvider = ({children}: UserContextProviderProps) => {
    const[user, setUser] = useState<AuthUser | null>(null)
    return (
        <UserContext.Provider value={{user, setUser}} >
            {children}
        </UserContext.Provider>
    )
    
}
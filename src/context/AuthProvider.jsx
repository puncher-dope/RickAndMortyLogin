import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null)

export function useAuth(){
    return useContext(AuthContext)
}


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(() => localStorage.getItem('user') || null)

    const signIn = (newUser, callBack) => {
        setUser(newUser)
        localStorage.setItem('user', newUser)
        callBack()
    }
    const signOut = ( callBack) => {
        setUser(null)
        localStorage.removeItem('user')
        callBack()
    }

    const value = {
        user,
        signIn,
        signOut
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}


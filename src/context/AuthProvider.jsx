import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null)

export function useAuth(){
    return useContext(AuthContext)
}


export const AuthProvider = ({ children }) => {
const [user, setUser] = useState(() => {
  const storedUser = localStorage.getItem('user');
  return storedUser ? String(storedUser) : null; // Явное преобразование в строку
});

const signIn = (newUser, callBack) => {
  if (!newUser) {
    console.error("Username is required");
    return;
  }
  const userString = String(newUser);
  setUser(userString);
  localStorage.setItem('user', userString);
  callBack();
};

  const signOut = (callBack) => {
    setUser(null);
    localStorage.removeItem('user');
    callBack();
  };

  const value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};


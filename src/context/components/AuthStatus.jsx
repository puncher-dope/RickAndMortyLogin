import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider";

export const AuthStatus = () => {

    const auth = useAuth()
    const navigate = useNavigate()

    if(auth.user === null){
        return <p>U are not logIn</p>
    }

    const handleSignOut = () => {
        auth.signOut(() => {
            navigate('/')
        })
    }

return (
       <p>
         Welcome user {auth.user}
         <button onClick={handleSignOut}>Sign Out</button>
       </p>
  );
};

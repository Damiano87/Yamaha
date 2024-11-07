import { createContext, useState } from "react";


// dropdown context
type AuthContextProviderProps = {
  children: React.ReactNode;
};


// type Auth = {
//     username: string | null,
//     email: string | null,
//     roles: string[] | null,
//     accesToken: string | null
// }


// type AuthContextType = {
//     auth: Auth | null,
//     setAuth: React.Dispatch<React.SetStateAction<Auth | null>>
// }

const AuthContext = createContext({});

export const AuthProvider = ({ children }: AuthContextProviderProps) => {
    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
import useRefreshToken from "@/hooks/useRefreshToken";
import { createContext, useEffect, useState } from "react";

// dropdown context
type AuthContextProviderProps = {
  children: React.ReactNode;
};


type AuthContextType = {
    token: string | null,
    setToken: React.Dispatch<React.SetStateAction<string | null>>
}

const AuthContext = createContext<AuthContextType>({
    token: '',
    setToken: () => {},
});

export const AuthProvider = ({ children }: AuthContextProviderProps) => {
    const [token, setToken] = useState<string | null>(null);
    const refresh = useRefreshToken();


    useEffect(() => {

        const getToken = async () => {
            await refresh();
        }

            getToken();
            console.log("To jest log z authContext", token);
        

    }, [token, refresh])
    return (
        <AuthContext.Provider value={{ token, setToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
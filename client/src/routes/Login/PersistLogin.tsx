import useRefreshToken from "@/hooks/useRefreshToken";
import { useToken } from "@/hooks/useToken";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";



const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { token } = useToken();

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                await refresh()
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false);
            }
        }

        if (!token) {
            verifyRefreshToken();
        } else {
            setIsLoading(false);
        }

    })

    useEffect(() => {
        console.log(`isLoading: ${isLoading}`);
        console.log(`token: ${JSON.stringify(token)}`);
    }, [isLoading, token])


  return (
     <>
        {isLoading
            ? <p>Loading...</p>
            : <Outlet />
        }
     </>
  )
}

export default PersistLogin





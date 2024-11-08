import apiRequest from "@/api/apiRequest";
import { useToken } from "./useToken";




const useLogout = () => {
  const { setToken } = useToken();


  const logout = async () => {
        setToken(null);

        try {
            const response = await apiRequest.post('/auth/logout', {
                withCredentials: true
            });
            console.log(response)
        } catch (err) {
            console.error(err);
        }
    }

    return logout
}


export default useLogout
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useToken } from "../hooks/useToken";
import {jwtDecode, JwtPayload} from "jwt-decode";



interface MyJwtPayload extends JwtPayload {
  UserInfo: {
    roles: string[];
  };
}



const RequireAuth = ({ allowedRoles }: {allowedRoles: string[]}) => {
    const { token } = useToken();
    const location = useLocation();

    
    console.log("To jest log z requireAuth", token)

    if (!token) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }


    const { roles } = jwtDecode<MyJwtPayload>(token).UserInfo;


    return (
        roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : <Navigate to="/unauthorized" state={{ from: location }} replace />
    );
}

export default RequireAuth;
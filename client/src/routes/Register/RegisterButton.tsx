import { FaUser } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { FaPencil } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import useLogout from "@/hooks/useLogout";



const RegisterButton = () => {
    const {username} = useAuth();
    const logout = useLogout();
    const navigate = useNavigate();

  if (username) {
    return <div className=" relative group">
        <div className="w-14 aspect-square rounded-full bg-orange-800 hover:bg-orange-900 cursor-pointer flex items-center justify-center">
            <span className="text-white text-[1.4rem]">{username.charAt(0).toUpperCase()}</span>
        </div>
        <div className="absolute hidden group-hover:block right-0 bg-white px-1 py-1 rounded-md shadow-md">
            <button 
                className="flex items-center justify-between gap-4 px-3 py-1 hover:bg-slate-100"
                onClick={() => {
                    logout();
                    navigate('/', { replace: true })
                }}
                >
                <span className="text-nowrap">Wyloguj się</span>
                <CiLogin size={25}/>
            </button>
        </div>
    </div>
  }


  return (
    <div className="relative group">
        <div className="p-2 rounded-full hover:bg-slate-300 cursor-pointer">
            <FaUser size={20}/>
        </div>
        <div className="absolute hidden group-hover:block right-0 bg-white px-1 py-1 rounded-md shadow-md">
            <Link to={'/login'} className="flex items-center justify-between gap-4 px-3 py-1 hover:bg-slate-100">
                <span className="text-nowrap">Zaloguj się</span>
                <CiLogin size={25}/>
            </Link>

            <Link to={'/register'} className="flex items-center justify-between gap-4 px-3 py-1 hover:bg-slate-100">
                <span className="text-nowrap">Zarejestruj się</span>
                <FaPencil size={17}/>
            </Link>
        </div>
    </div>
  )
}
export default RegisterButton
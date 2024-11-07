import { FaUser } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom";



const RegisterButton = () => {
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
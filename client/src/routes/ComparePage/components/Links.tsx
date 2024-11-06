import { IoMdArrowForward } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { Motorcycle, Atv } from "@/utils/types";


type Props = {
    products: Array<Motorcycle | Atv>
}

const Links = ({products}: Props) => {
  return (
    <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-4 lg:grid-cols-5 gap-4 grow px-5">
            <div className="hidden lg:block invisible" />
            {products[0] && <LinkToVehicle vehicle={products[0]} />}
            {products[1] && <LinkToVehicle vehicle={products[1]} />}
            {products[2] && <LinkToVehicle vehicle={products[2]} />}
            {products[3] && <LinkToVehicle vehicle={products[3]} />}
        </div>
    </div>
  )
}
export default Links



const LinkToVehicle = ({vehicle}: {vehicle: Motorcycle | Atv}) => {
    const location = useLocation();
    const path = location.pathname.split('/').filter(Boolean)[0]
    
  return (
    <Link 
        to={`/${path}/${vehicle.id}?${new URLSearchParams({
              color: vehicle.colorNames[0].name,
            })}`}
        className=" text-white sm:text-[.475rem] lg:text-[.7rem] flex items-center justify-center gap-3 px-4 py-3 bg-black hover:bg-red-500 duration-300 rounded-3xl uppercase font-semibold">
        <span>Dowiedz się więcej</span>
        <IoMdArrowForward className="sm:text-[12px] lg:text-[10px] xl:text-[17px]"/>
    </Link>
  )
}

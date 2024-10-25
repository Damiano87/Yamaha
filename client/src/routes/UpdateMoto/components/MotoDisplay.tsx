import { formatCurrencyPLN } from "@/utils/functions"
import { type Motorcycle } from "@/utils/types"

type AtvDisplayProps = {
    moto: Motorcycle
}


const AtvDisplay = ({moto}: AtvDisplayProps) => {
    // const { name, price, image, description } = atv;

  return (
    <div className="text-white my-8 md:flex justify-around">
        <div>
            <h1 className="text-[1.5rem] md:text-[3rem] uppercase mb-4 font-medium tracking-wide">{moto?.name}</h1>
            <span className="text-[1.4rem]">{formatCurrencyPLN(moto?.price)}</span>
        </div>
        <img src={moto?.images[1]} alt={moto?.name} className="w-[17rem] mx-auto mt-4 object-cover rounded-md"/>
    </div>
  )
}
export default AtvDisplay
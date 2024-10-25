import { formatCurrencyPLN } from "@/utils/functions"
import { type Atv } from "@/utils/types"

type AtvDisplayProps = {
    atv: Atv
}


const AtvDisplay = ({atv}: AtvDisplayProps) => {
  return (
    <div className="text-white my-8 md:flex justify-around">
        <div>
            <h1 className="text-[1.5rem] md:text-[3rem] uppercase mb-4 font-medium tracking-wide">{atv?.name}</h1>
            <span className="text-[1.4rem]">{formatCurrencyPLN(atv?.price)}</span>
        </div>
        <img src={atv?.images[1]} alt={atv?.name} className="w-[17rem] mx-auto mt-4 object-cover rounded-md"/>
    </div>
  )
}
export default AtvDisplay
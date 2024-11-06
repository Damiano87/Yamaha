import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { Silnik, SilnikMoto, Podwozie, PodwozieMoto, Wymiary, WymiaryMoto, obciazenieMaksymalne, InformacjeDodatkowe } from "@/utils/types";

type EngineProps = {
  data: Array<Silnik | SilnikMoto | Podwozie | PodwozieMoto | Wymiary | WymiaryMoto | obciazenieMaksymalne | InformacjeDodatkowe | undefined>,
  names: string[],
  name: string,
  open?: boolean,
  border?: boolean
}


const Data = ({data, names, name, open, border }: EngineProps) => {
    const [isOpen, setIsOpen] = useState(open);
    const [compareEngines, setEngines] = useState<string[][]>([])

    // set new valuse to compare
    useEffect(() => {
      const values = data.map((engine) => {
      if (!engine) {
        return ["N/A", "N/A", "N/A", "N/A",]
      }

      return Object.values(engine).map(value => value ? value.desc : "N/A")
    });

    const array: string[][] = names.map((_, index) => values.map((value) => value[index])).map((innerArray, index) => [names[index], ...innerArray])
    setEngines(array)
    }, [data, names])
    
  return (
    <div className={`${(isOpen && border) && "pb-8" } ${border && "border-b-2"} border-t-2`}>
        <button 
            type="button" 
            className="flex items-center justify-between w-full py-3 text-left"
            onClick={(() => setIsOpen(!isOpen))}
            >
            <h2 className="text-2xl font-semibold">{name}</h2>
            <FaPlus className={`${isOpen && "rotate-45"} transition-all duration-300`}/>
        </button>
        <table className={`${!isOpen && "hidden"} table-fixed w-full`}>
           <tbody>
              {compareEngines?.map((row, index) => {
                return <tr key={index} className={`${index % 2 === 0 && "bg-slate-300/50"}`}>
                <th className="text-left align-top p-3">{row[0]}</th>
                <td className="align-top p-3">{row[1]}</td>
                <td className="align-top p-3">{row[2]}</td>
                <td className="align-top p-3">{row[3]}</td>
                <td className="align-top p-3">{row[4]}</td>
            </tr>
              })}
           </tbody>
        </table>
    </div>
  )
}
export default Data
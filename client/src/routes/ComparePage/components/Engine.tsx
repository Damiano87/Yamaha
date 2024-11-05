import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { Silnik, SilnikMoto } from "@/utils/types";

type EngineProps = {
  engines: Array<Silnik | SilnikMoto | undefined>
}


const engineNames = [
  "Typ silnika",
  "Pojemność",
  "Średnica x skoku tłoka",
  "Stopień sprężania",
  "Układ smarowania",
  "Układ rozrusznika",
  "Układ paliwowy",
  "Układ zapłonu",
  "Skrzynia biegów",
  "Napęd",
  "Napęd końcowy"
];



const Engine = ({engines}: EngineProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [compareEngines, setEngines] = useState<string[][]>([])

    // set new valuse to compare
    useEffect(() => {
      const engineValues = engines.map((engine) => {
      if (!engine) return [];

      return Object.values(engine).map(value => value ? value.desc : "N/A")
    });

    const array: string[][] = engineNames.map((_, index) => engineValues.map((value) => value[index])).map((innerArray, index) => [engineNames[index], ...innerArray])
    setEngines(array)
    console.log(array)
    }, [engines])
    
  return (
    <div className="border-y-2">
        <button 
            type="button" 
            className="flex items-center justify-between w-full py-3 text-left"
            onClick={(() => setIsOpen(!isOpen))}
            >
            <h2 className="text-2xl font-semibold">Silnik</h2>
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
export default Engine
























{/* <tbody>
              <tr className="bg-slate-300/50">
                <th className="text-left align-top p-3">Typ silnika</th>
                <td className="align-top p-3">{engines[0]?.typSilnika?.desc}</td>
                <td className="align-top p-3">{engines[1]?.typSilnika?.desc}</td>
                <td className="align-top p-3">{engines[2]?.typSilnika?.desc}</td>
                <td className="align-top p-3">{engines[3]?.typSilnika?.desc}</td>
            </tr>
            <tr>
                <th className="text-left align-top p-3">Pojemność</th>
                <td className="align-top p-3">{engines[0]?.pojemnosc?.desc}</td>
                <td className="align-top p-3">{engines[1]?.pojemnosc?.desc}</td>
                <td className="align-top p-3">{engines[2]?.pojemnosc?.desc}</td>
                <td className="align-top p-3">{engines[3]?.pojemnosc?.desc}</td>
            </tr>
            <tr className="bg-slate-300/50">
                <th className="text-left align-top p-3">Średnica x skoku tłoka</th>
                <td className="align-top p-3">{engines[0]?.srednicaXskokTloka?.desc}</td>
                <td className="align-top p-3">{engines[1]?.srednicaXskokTloka?.desc}</td>
                <td className="align-top p-3">{engines[2]?.srednicaXskokTloka?.desc}</td>
                <td className="align-top p-3">{engines[3]?.srednicaXskokTloka?.desc}</td>
            </tr>
            <tr>
                <th className="text-left align-top p-3">Stopień sprężania</th>
                <td className="align-top p-3">{engines[0]?.stopienSprezania?.desc}</td>
                <td className="align-top p-3">{engines[1]?.stopienSprezania?.desc}</td>
                <td className="align-top p-3">{engines[2]?.stopienSprezania?.desc}</td>
                <td className="align-top p-3">{engines[3]?.stopienSprezania?.desc}</td>
            </tr>
            <tr className="bg-slate-300/50">
                <th className="text-left align-top p-3">Układ smarowania</th>
                <td className="align-top p-3">{engines[0]?.ukladSmarowania?.desc}</td>
                <td className="align-top p-3">{engines[1]?.ukladSmarowania?.desc}</td>
                <td className="align-top p-3">{engines[2]?.ukladSmarowania?.desc}</td>
                <td className="align-top p-3">{engines[3]?.ukladSmarowania?.desc}</td>
            </tr>
            <tr>
                <th className="text-left align-top p-3">Układ rozrusznika</th>
                <td className="align-top p-3">{engines[0]?.ukladRozrusznika?.desc}</td>
                <td className="align-top p-3">{engines[1]?.ukladRozrusznika?.desc}</td>
                <td className="align-top p-3">{engines[2]?.ukladRozrusznika?.desc}</td>
                <td className="align-top p-3">{engines[3]?.ukladRozrusznika?.desc}</td>
            </tr>
            <tr className="bg-slate-300/50">
                <th className="text-left align-top p-3">Układ paliwowy</th>
                <td className="align-top p-3">{engines[0]?.ukladPaliwowy?.desc}</td>
                <td className="align-top p-3">{engines[1]?.ukladPaliwowy?.desc}</td>
                <td className="align-top p-3">{engines[2]?.ukladPaliwowy?.desc}</td>
                <td className="align-top p-3">{engines[3]?.ukladPaliwowy?.desc}</td>
            </tr>
            <tr>
                <th className="text-left align-top p-3">Układ zapłonu</th>
                <td className="align-top p-3">{engines[0]?.ukladZaplonu?.desc || engines[0] && "N/A"}</td>
                <td className="align-top p-3">{engines[1]?.ukladZaplonu?.desc || engines[1] && "N/A"}</td>
                <td className="align-top p-3">{engines[2]?.ukladZaplonu?.desc || engines[2] && "N/A"}</td>
                <td className="align-top p-3">{engines[3]?.ukladZaplonu?.desc || engines[3] && "N/A"}</td>
            </tr>
            <tr className="bg-slate-300/50">
                <th className="text-left align-top p-3">Skrzynia biegów</th>
                <td className="align-top p-3">{engines[0]?.skrzyniaBiegow?.desc}</td>
                <td className="align-top p-3">{engines[1]?.skrzyniaBiegow?.desc}</td>
                <td className="align-top p-3">{engines[2]?.skrzyniaBiegow?.desc}</td>
                <td className="align-top p-3">{engines[3]?.skrzyniaBiegow?.desc}</td>
            </tr>
            <tr>
                <th className="text-left align-top p-3">Napęd</th>
                <td className="align-top p-3">{engines[0]?.naped?.desc}</td>
                <td className="align-top p-3">{engines[1]?.naped?.desc}</td>
                <td className="align-top p-3">{engines[2]?.naped?.desc}</td>
                <td className="align-top p-3">{engines[3]?.naped?.desc}</td>
            </tr>
            <tr className="bg-slate-300/50">
                <th className="text-left align-top p-3">Napęd końcowy</th>
                <td className="align-top p-3">{engines[0]?.napedKoncowy?.desc}</td>
                <td className="align-top p-3">{engines[1]?.napedKoncowy?.desc}</td>
                <td className="align-top p-3">{engines[2]?.napedKoncowy?.desc}</td>
                <td className="align-top p-3">{engines[3]?.napedKoncowy?.desc}</td>
            </tr>
           </tbody> */}
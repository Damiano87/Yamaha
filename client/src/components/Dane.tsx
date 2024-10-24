import { daneTech, TechMoto } from "@/utils/types";
import { DaneTechniczneKeys } from "@/utils/types"
import { useEffect, useState } from "react";

type daneProps = {
  daneTechniczne: daneTech | TechMoto | undefined;
  clickedButton: DaneTechniczneKeys;
  page: number
};

type daneTechProps = {
  daneTechniczne: daneTech;
};


const Dane = ({
  daneTechniczne,
  page
}: daneProps) => {
  const [data, setData] = useState<string[][]>([]);
  
  useEffect(() => {
  const entries = Object.entries(daneTechniczne as daneTechProps);
  
      // create array of values from filtered object

      const filtered = entries.filter((item) => item[1] !== null)
      
      const values = filtered.map((item) => item[1])
      

      const arr = values.map((obj) => Object.entries(obj))
      
      const finalArray = []
      for (let i = 0; i < arr.length; i++) {
      finalArray.push(arr[i].map((item) => item[1]).filter(Boolean))
      }
      setData(finalArray)
  }, [page, daneTechniczne])
    
  return (
    <div className="mt-4">
      <table className="min-w-full table-fixed">
        <tbody>
          {data[page]?.map((obj, index) => {
            return (
              <tr
                key={index}
                className={`${index % 2 === 0 && "bg-slate-100"}`}
              >
                <td className="w-1/2 lg:w-1/4 p-3">
                  <p className="font-semibold">{obj?.title as string}</p>
                </td>
                <td className="p-3">{obj?.desc as string}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Dane;
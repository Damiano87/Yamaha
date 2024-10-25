import { IoFilter } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";


const SortAtvs = () => {
    const [currentValue, setCurrentValue] = useState("zalecane");
    const [searchParams, setSearchParams] = useSearchParams();


    const setValue = (value: string) => {
        setCurrentValue(value);
        
        const newParams = new URLSearchParams(searchParams);
        
        if (value === "zalecane") {
            newParams.delete("sort");
        } else {
            newParams.set("sort", value);
        }
        
        setSearchParams(newParams);
    }


  return (
    <Select value={currentValue} onValueChange={setValue}>
            <SelectTrigger className="relative w-[17rem] border border-slate-300 text-[1rem] pl-9 pr-3 py-2 rounded-none">
              <SelectValue placeholder={currentValue} />
              <IoFilter className="absolute left-3"/>
              <IoMdArrowDropdown size={22} className="absolute right-3"/>
            </SelectTrigger>
            
            <SelectContent>
               <SelectItem value="zalecane">Zalecane</SelectItem>
               <SelectItem value="newest">Od najnowszych do najstarszych</SelectItem>
               <SelectItem value="oldest">Od najstarszych do najnowszych</SelectItem>
               <SelectItem value="lowest">Cena (od najniższej do najwyższej)</SelectItem>
               <SelectItem value="highest">Cena (od najwyższej do najniższej)</SelectItem>
            </SelectContent>
          </Select>
  )
}
export default SortAtvs
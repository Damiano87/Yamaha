import { GoPlus } from "react-icons/go";
import { cn } from "@/lib/utils";


export type AddModelProps = {
    onOpen?: () => void,
    text: string,
    className?: string
}



const AddModel = ({onOpen, text, className}: AddModelProps) => {

    return (
        <button 
            type="button"
            className={cn("hidden w-full border-2 border-dashed group lg:flex items-center text-slate-700 justify-center rounded-md gap-3", className)}
            onClick={onOpen}
            >
            <span>{text}</span>
            <GoPlus size={20} className="group-hover:text-black"/>
        </button>
    )
}

export default AddModel
import { GoPlus } from "react-icons/go";

const CompareAtvs = () => {
  return (
    <div className="fixed transform flex items-center left-0 bottom-0 w-full h-[120px] bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="w-full max-w-7xl mx-auto flex gap-8">
            <div className="grid grid-cols-4 gap-4 grow">
                <AddModel />
                <AddModel />
                <AddModel />
                <AddModel />
            </div>
            <CompareButtons />
        </div>
        
    </div>
  )
}
export default CompareAtvs


const AddModel = () => {
    return (
        <button className="border-2 border-dashed group flex items-center text-slate-700 justify-center rounded-md gap-3  py-6">
            <span>Dodaj model</span>
            <GoPlus size={20} className="group-hover:text-black"/>
        </button>
    )
}


const CompareButtons = () => {
    return (
        <div className="flex items-center gap-6">
            <button className="hover:bg-slate-200 px-4 py-2 rounded-3xl uppercase text-[.9rem] tracking-wider font-semibold">
                <span>wyczyść wszystko</span>
            </button>
            <button className="bg-gray-400 text-white px-4 py-2 rounded-3xl uppercase text-[.9rem] tracking-wider font-semibold">
                <span>porównaj (1)</span>
            </button>
        </div>
    )
}
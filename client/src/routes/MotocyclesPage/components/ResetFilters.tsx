import { IoIosClose } from "react-icons/io";
import { useSearchParams } from "react-router-dom";

const ResetFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = Array.from(searchParams.keys())


  return (
    <>
        {params?.length ? <button 
        type="button"
        className="flex items-center border-2 border-gray-300 rounded-md pr-4 pl-2 py-1 hover:bg-gray-100"
        onClick={() => setSearchParams(new URLSearchParams())}
        >
        <IoIosClose size={30}/>
        <span className="mb-[3px]">Wyczyść filtry</span>
    </button> : null}
    </>
  )
}
export default ResetFilters
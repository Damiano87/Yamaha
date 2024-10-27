import { useSearchParams, useNavigate } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";



const Search = ({label}: {label: boolean}) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();


  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const term = e.currentTarget.value;
    if (e.key === "Enter") {
      e.preventDefault();
      const params = new URLSearchParams(searchParams);
      if (term) {
        params.set("search", term);
      } else {
        params.delete("search");
      }
      navigate(`?${params.toString()}`);
    }
  };
  

  return (
        <div>
        {label && <label htmlFor="search" className="font-semibold">Nazwa produktu</label>}
        <div className={`relative ${label && "mt-2"}`}>
          <FaMagnifyingGlass size={20} className="absolute top-1/2 left-2 -translate-y-1/2" />
            <input
            id="search"
            type="text"
            className="placeholder:text-slate-400 rounded-md text-[1rem] px-9 py-2 border-2 w-full md:w-[17rem] border-slate-300"
            placeholder="Wyszukaj według nazwy"
            value={searchValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          </div>
        </div>
        
  );
};

export default Search;



import { useSearchParams, useNavigate } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";

const Search = () => {
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
    <div className="flex justify-end px-5 my-14">
      <form className="w-[17rem]">
        <div className="inline-flex items-center border-2 relative">
          <FaMagnifyingGlass size={20} className="absolute ml-2" />
          <input
            type="text"
            className="placeholder:text-slate-400 text-[1rem] px-9 py-2"
            placeholder="Wyszukaj według nazwy"
            value={searchValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
            onKeyDown={handleKeyDown}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Search;



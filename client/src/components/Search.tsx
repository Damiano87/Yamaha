
// import { Pathname, useRoutes, useSearchParams } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Search = () => {
//   const searchParams = useSearchParams();
//   const { replace } = useRouter();
//   const pathname = usePathname();

//   const handleKeyDown = (event) => {
//     const term = event.target.value;
//     if (event.key === "Enter") {
//       event.preventDefault();
//       const params = new URLSearchParams(searchParams);
//       if (term) {
//         params.set("search", term);
//       } else {
//         params.delete("search");
//       }
//       replace(`${pathname}?${params.toString()}`, { scroll: false });
//     }
//   };

  return (
    <div className="flex justify-end px-5 my-14">
      <form className="w-fit">
        <div className="inline-flex items-center border-2 relative">
          <FaMagnifyingGlass size={20} className="absolute ml-2" />
          <input
            type="text"
            className="text-[1rem] px-9 py-2 placeholder:text-black rounded-md"
            placeholder="Wyszukaj według nazwy"
            //   onChange={(e) => handleSearch(e.target.value)}
            // onKeyDown={(event) => handleKeyDown(event)}
            // defaultValue={searchParams.get("search")?.toString()}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Search;

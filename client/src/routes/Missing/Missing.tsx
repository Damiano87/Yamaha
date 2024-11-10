import { Link } from "react-router-dom"
import { CiFaceMeh } from "react-icons/ci";

const Missing = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-300">
            <article className="bg-black text-white w-full max-w-lg flex flex-col items-center py-10">
            <CiFaceMeh size={200}/>
            <h1>Oops!</h1>
            <p>Strona nie istnieje</p>
            
                <Link to="/" className="mt-10 bg-lime-500 text-black font-semibold px-7 py-1 hover:bg-lime-600">Idź do strony głównej</Link>
            
        </article>
        </div>
    )
}

export default Missing
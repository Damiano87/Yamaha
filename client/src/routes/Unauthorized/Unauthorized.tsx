import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom"

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-300">
            <Helmet>
                <title>Unauthorized</title>
                <meta 
                    name="description" 
                    content="You do not have access to the requested page."
                />
            </Helmet>
            <section className="bg-black text-white p-8 space-y-5">
            <h1 className="bg-white text-red-700 w-fit px-4 font-bold tracking-wider">Unauthorized</h1>
            
            <p>You do not have access to the requested page.</p>
            
            <button onClick={goBack} className="bg-white text-black w-fit px-4 font-semibold">Go Back</button>
            
        </section>
        </div>
    )
}

export default Unauthorized
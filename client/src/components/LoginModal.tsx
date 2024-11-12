import { IoIosClose } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";



type LoginModalProps = {
    isOpenLoginModal: boolean,
    setIsOpenLoginModal: React.Dispatch<React.SetStateAction<boolean>>
}


const LoginModal = ({isOpenLoginModal, setIsOpenLoginModal}: LoginModalProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    
    // Go to login page
    const goToLogin = () => {
        setIsOpenLoginModal(false);
        navigate('/login', { 
        state: { from: location }
    });
    }

    // Close modal
    const handlecloseModal = () => {
        setIsOpenLoginModal(false);
    }

  return <div className={`z-30 fixed inset-0 bg-black/50 flex items-center justify-center
        transition-opacity duration-300 ${isOpenLoginModal ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={handlecloseModal}
        >      
            {/* modal */}
            <div className={`bg-white py-4 rounded-md w-full max-w-[30rem] 
                transition-all duration-300 transform
                ${isOpenLoginModal ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                onClick={e => e.stopPropagation()}
                >
                    <div className="flex items-center justify-between border-b-2 px-5 pb-4">                  
                        <h2 className="text-[1.2rem] font-semibold">Dodaj do listy życzeń</h2>
                        <button 
                            onClick={handlecloseModal}
                            >
                            <IoIosClose size={35}/>
                        </button>
                    </div>
                        <div className="flex flex-col gap-6 border-t-2 pt-4 px-5">
                            <div className="p-3 bg-orange-500 w-fit rounded-full mx-auto border-[10px] border-black">
                                <FaHeart size={20} color="white"/>
                            </div>
                            <p className="text-center text-slate-600 font-medium">
                                Aby dodać przedmioty do listy życzeń, musisz być zalogowany.
                                Proszę użyć przycisku poniżej, aby się zalogować lub zarejestrować.
                            </p>
                            <button 
                                className="flex justify-center items-center bg-black text-white hover:bg-red-600 font-medium w-full py-2 rounded-3xl duration-300"
                                onClick={goToLogin}
                                >
                                    Zaloguj się
                            </button>
                        </div>  
            </div>
        </div>
}
export default LoginModal




            
        
        
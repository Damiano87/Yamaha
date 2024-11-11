import { FaHeart } from "react-icons/fa";




const AddToWishlist = () => {


    const handleWishlist = () => {
    console.log('Dodano do wishlisty!');
  };


  return (
    <div 
        className="group cursor-pointer absolute bottom-0 right-6"
        onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleWishlist();
      }}
        >
        <button className="hover:text-red-600">
            <FaHeart size={25} />
        </button>
        <div className="tooltip z-20 w-48 bg-black text-white px-5 py-2 rounded-md bottom-10 left-1/2 -translate-x-1/2 hidden group-hover:block absolute">
            <span>Dodaj do listy życzeń</span>
        </div>
    </div>
  )
}
export default AddToWishlist
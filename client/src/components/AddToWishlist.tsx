import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { AxiosError } from "axios";
import { useEffect  } from "react";
import { FaHeart } from "react-icons/fa";
import {useWishList} from '../hooks/useWishList';
import { WishlistItem } from "@/context/wishListContext";

type WishlistProps = {
  vehicleId: string,
  vehicleType: string,
  setIsOpenLoginModal: React.Dispatch<React.SetStateAction<boolean>>
}


const AddToWishlist = ({vehicleId, vehicleType, setIsOpenLoginModal}: WishlistProps) => {
    const {wishList, setWishList} = useWishList();
    const axiosPrivate =  useAxiosPrivate();

  // get all items from wish list
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axiosPrivate.get('/wishlist')
        setWishList(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchWishlist();
  }, [axiosPrivate, setWishList])



    // remove item from wish list
    const removeItemFromWishList = async () => {
      try {
            await axiosPrivate.delete(`/wishlist`, {
            data: {
                vehicleId,
                vehicleType
            }
        })

          setWishList(prevWishList => prevWishList.filter((item): item is WishlistItem => item.vehicleId !== vehicleId));
        } catch (error) {
          console.log(error)
        }
    }

    // add item to wish list
    const addItemToWishList = async () => {
      try {
          const response = await axiosPrivate.post('/wishlist', {vehicleId, vehicleType})

          setWishList(prevWishList => [...prevWishList, response.data.data])
      } catch (error) {
          if (error instanceof AxiosError) {
            console.log(error?.response?.data?.message);
            if (error?.response?.data?.message === "Forbidden") {
              setIsOpenLoginModal(true);
            }
        } else {
            console.log("Unexpected error:", error);
        }

          }
    }


    // add or delete item from wish list depending on if it is already in the wish list or not
    const handleWishlist = async () => {  
      const isInWishList = wishList.some(item => item.vehicleId === vehicleId);

      if (isInWishList) {
          removeItemFromWishList();
      } else {
        addItemToWishList();
      }
  };

  const isInWishList = wishList.some(item => item.vehicleId === vehicleId);

  return (
    <button 
        className={`${isInWishList ? "text-red-600" : "text-black"} group cursor-pointer absolute bottom-0 right-6 hover:text-red-600 active:scale-95 active:text-red-800`}
        onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        handleWishlist();
      }}
        >
        <FaHeart size={22} />
        <div className="tooltip z-20 w-48 bg-black text-white px-5 py-2 rounded-md bottom-10 left-1/2 -translate-x-1/2 hidden group-hover:block absolute">
            {isInWishList ? <span>Usuń z listy życzeń</span> : <span>Dodaj do listy życzeń</span>}
        </div>
    </button>
  )
}
export default AddToWishlist
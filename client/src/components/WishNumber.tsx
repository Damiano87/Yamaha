import { useWishList } from "@/hooks/useWishList";
import { useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import useAxiosPrivate from "../hooks/useAxiosPrivate";


const WishNumber = () => {
  const {wishList, setWishList} = useWishList();
  const axiosPrivate = useAxiosPrivate();

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

      fetchWishlist()
    
  }, [axiosPrivate, setWishList])


  if (!wishList?.length) return null

  
  return (
    <div className="relative hover:bg-slate-200 p-2 rounded-full cursor-pointer">
      <FaHeart size={20}/>
      <div className="badge absolute -top-0 -right-0 bg-red-500 text-white rounded-3xl w-[1.1rem] h-[1.1rem] flex items-center justify-center text-xs">
        <span className="font-semibold">{wishList?.length}</span>
      </div>
    </div>
  )
}

export default WishNumber
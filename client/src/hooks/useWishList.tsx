import { useContext } from "react";
import WishListContext from "@/context/wishListContext";

export const useWishList = () => {
    const context = useContext(WishListContext);
  if (!context) {
    throw new Error(
      "useWishListContext must be used within a WishListContextProvider"
    );
  }
  return context;
}


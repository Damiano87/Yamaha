import { createContext, useState } from "react";
import { Vehicle } from "@/routes/Dashboard/components/DashboardWishList";
import { Motorcycle, Atv } from "@/utils/types";

// dropdown context
type WishListContextProviderProps = {
  children: React.ReactNode;
};


export type WishlistItem = {
  userId: string,
  vehicleId: string,
  vehicleType: string,
  id: string,
  name: string,
  price: number,
  atv: Atv | null,
  images: string[],
  moto: Motorcycle | null,
  addedAt: Date
}


type WishListContextType = {
    wishList: WishlistItem[] | Vehicle[],
    setWishList: React.Dispatch<React.SetStateAction<WishlistItem[] | Vehicle[]>>
}


const WishListContext = createContext<WishListContextType>({
    wishList: [],
    setWishList: () => {},
});

export const WishListProvider = ({ children }: WishListContextProviderProps) => {
    const [wishList, setWishList] = useState<WishlistItem[] | Vehicle[]>([]);

    return (
        <WishListContext.Provider value={{ wishList, setWishList }}>
            {children}
        </WishListContext.Provider>
    )
}

export default WishListContext;
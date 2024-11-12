import { createContext, useState } from "react";

// dropdown context
type WishListContextProviderProps = {
  children: React.ReactNode;
};


type WishlistItem = {
  userId: string,
  vehicleId: string,
  vehicleType: string,
  id: string,
  atv: string | null,
  moto: string | null,
  addedAt: Date
}


type WishListContextType = {
    wishList: WishlistItem[],
    setWishList: React.Dispatch<React.SetStateAction<WishlistItem[]>>
}


const WishListContext = createContext<WishListContextType>({
    wishList: [],
    setWishList: () => {},
});

export const WishListProvider = ({ children }: WishListContextProviderProps) => {
    const [wishList, setWishList] = useState<WishlistItem[]>([]);

    return (
        <WishListContext.Provider value={{ wishList, setWishList }}>
            {children}
        </WishListContext.Provider>
    )
}

export default WishListContext;
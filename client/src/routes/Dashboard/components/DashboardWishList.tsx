import { useEffect, useState } from 'react';
import { useWishList } from '../../../hooks/useWishList';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { WishlistItem } from '@/context/wishListContext';
import { formatCurrencyPLN } from '@/utils/functions';
import WishListSkeleton from './WishListSkeleton';
import { IoIosClose } from "react-icons/io";
import { Atv, Motorcycle } from '@/utils/types';


export type Vehicle = Motorcycle | Atv;



const DashboardWishList = () => {
    const { wishList, setWishList } = useWishList();
    const axiosPrivate = useAxiosPrivate();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    // fetch all wishlist items
    useEffect(() => {
        let isMounted = true;

        const fetchWishlist = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const response = await axiosPrivate.get<WishlistItem[]>('/wishlist');
                const data = response.data;
                
                if (isMounted) {

                    const motos: Motorcycle[] = data
                        .filter(item => item.moto !== null)
                        .map(item => ({
                        ...item.moto!,
                        vehicleType: 'moto'
                        }));

                    const atvs: Atv[] = data
                        .filter(item => item.atv !== null)
                        .map(item => ({
                        ...item.atv!,
                        vehicleType: 'atv'
                        }));
                            
                    
                        
                        
                    const mergedArray: Vehicle[] = [...motos, ...atvs];
                    setWishList(mergedArray);
                }
            } catch (error) {
                if (isMounted) {
                    console.error('Error fetching wishlist:', error);
                    setError('Failed to load wishlist');
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        fetchWishlist();

        return () => {
            isMounted = false;
        };
    }, [axiosPrivate, setWishList]);



    // remove from wish list
    const removeItemFromWishList = async (vehicleId: string, vehicleType: string) => {
      try {
            await axiosPrivate.delete(`/wishlist`, {
            data: {
                vehicleId,
                vehicleType
            }
        })

          setWishList(prevWishList => prevWishList.filter((item): item is WishlistItem  => item.id !== vehicleId));
        } catch (error) {
          console.log(error)
        }
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    if (isLoading) {
        return <WishListSkeleton />;
    }

    console.log(wishList)
    return (
        <div>
            <h2 className='text-[2rem] font-semibold mb-3'>Lista życzeń</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {wishList?.map((item) => (
                <div 
                    key={item.id} 
                    className="relative rounded"
                >
                  <div className='border'>
                    <img src={item?.images[0]} alt={item?.name} className="w-full h-60 md:h-80 object-cover" />
                  </div>
                    <h3 className="font-bold uppercase mt-3">{item?.name}</h3>
                    <h3>{formatCurrencyPLN(item?.price)}</h3>
                    <button 
                        className='absolute grid place-content-center top-1 right-1 w-10 h-10 hover:bg-slate-100 rounded-full' title='Usuń z listy życzeń'
                        onClick={() => removeItemFromWishList(item.id, item.vehicleType)}
                        >
                        <IoIosClose size={30}/>
                    </button>
                </div>
            ))}
        </div>
        {!wishList?.length ?
            <div className='flex items-center justify-center mt-10'>
                <p className=' text-center text-[1.8rem] font-semibold'>Brak pozycji na liście życzeń</p>
            </div> 
            : null
        }
        </div>

    );
};

export default DashboardWishList;
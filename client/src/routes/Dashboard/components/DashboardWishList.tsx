import { useEffect, useState } from 'react';
import { useWishList } from '../../../hooks/useWishList';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { Motorcycle, Atv } from '@/utils/types';
import { WishlistItem } from '@/context/wishListContext';
import { formatCurrencyPLN } from '@/utils/functions';

export type Vehicle = Motorcycle | Atv;



const DashboardWishList = () => {
    const { wishList, setWishList } = useWishList();
    const axiosPrivate = useAxiosPrivate();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        const fetchWishlist = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const response = await axiosPrivate.get<WishlistItem[]>('/wishlist');
                const data = response.data;
                
                if (isMounted) {
                    const motos = data
                        .map(item => item.moto)
                        .filter((moto): moto is Motorcycle => moto !== null);
                        
                    const atvs = data
                        .map(item => item.atv)
                        .filter((atv): atv is Atv => atv !== null);
                        
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






    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid lg:grid-cols-3 gap-4">
            {wishList?.map((item) => (
                <div 
                    key={item.id} 
                    className="rounded"
                >
                  <div className='border'>
                    <img src={item?.images[0]} alt={item?.name} className="w-full h-80 object-cover" />
                  </div>
                    <h3 className="font-bold uppercase mt-3">{item?.name}</h3>
                    <h3>{formatCurrencyPLN(item?.price)}</h3>
                </div>
            ))}
        </div>
    );
};

export default DashboardWishList;
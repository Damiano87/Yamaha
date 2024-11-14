// import { defer } from 'react-router-dom';
// import { axiosPrivate } from '../api/axios'; // załóżmy, że tak importujesz axiosa
// import { Motorcycle, Atv } from '@/utils/types';


// interface WishListItem {
//   id: string,
//   userId: string,
//   vehicleId: string,
//   moto: Motorcycle | null,
//   atv: Atv | null,

// }

// type Vehicle = Motorcycle | Atv;


// export const wishlistLoader = async () => {
//   const getWishlistItems = async () => {
//     const response = await axiosPrivate.get<WishListItem[]>('/wishlist');
//     const data = response.data;
    
//     const motos = data
//       .map(item => item.moto)
//       .filter((moto): moto is Motorcycle => moto !== null);
      
//     const atvs = data
//       .map(item => item.atv)
//       .filter((atv): atv is Atv => atv !== null);
      
//     return [...motos, ...atvs] as Vehicle[];
//   };

//   return defer({
//     wishlistData: getWishlistItems()
//   });
// };
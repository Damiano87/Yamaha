import axios from '../api/apiRequest';
import { LoaderFunctionArgs } from 'react-router-dom';

export const getAllMotosLoader = async ({request}: LoaderFunctionArgs) => {
    const url = new URL(request.url);
    const params = new URLSearchParams(url.search);
    const search = params.get('search');
    const sort = params.get('sort');
    const LimitedPowerVersion = params.get('LimitedPowerVersion');
    const motorcyclePower = params.get('motorcyclePower');

    const firstParam = motorcyclePower?.split(' to ')[0]
    const secondParam = motorcyclePower?.split(' to ')[1]
    
    try {
        const response = await axios('/vehicles/moto', 
            {params: {
                 search: search || undefined, 
                 sort: sort || undefined,
                 LimitedPowerVersion: LimitedPowerVersion || undefined,
                 firstParam: firstParam || undefined,
                 secondParam: secondParam || undefined
                }}
        )
        return response.data.data
    } catch (error) {
        console.log(error)
    }
}



export const getSingleMotoLoader = async ({params}: LoaderFunctionArgs) => {
    try {
        const {id} = params;

        if (!id) {
            throw new Error("ID is missing");
        }

        const response = await axios(`/vehicles/moto/${id}`);
        return response.data.data
    } catch (error) {
        console.log(error)
    }
}
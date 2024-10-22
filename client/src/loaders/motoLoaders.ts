import axios from '../api/apiRequest';
import { LoaderFunctionArgs } from 'react-router-dom';

export const getAllMotosLoader = async () => {
    try {
        const response = await axios('/vehicles/moto')
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
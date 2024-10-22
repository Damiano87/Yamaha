import axios from '../api/apiRequest';
import { LoaderFunctionArgs } from 'react-router-dom';

export const getAllAtvsLoader = async () => {
    try {
        const response = await axios('/vehicles/atv')
        return response.data.data
    } catch (error) {
        console.log(error)
    }

}


export const getSingleAtvLoader = async ({params}: LoaderFunctionArgs) => {
    try {
        const {id} = params;

        if (!id) {
            throw new Error("ID is missing");
        }

        const response = await axios(`/vehicles/atv/${id}`);
        return response.data.data
    } catch (error) {
        console.log(error)
    }
}
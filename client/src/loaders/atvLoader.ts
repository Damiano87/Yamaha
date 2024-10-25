import apiRequest from '../api/apiRequest';
import { LoaderFunctionArgs } from 'react-router-dom';

export const getAllAtvsLoader = async ({ request }: LoaderFunctionArgs) => {
    const url = new URL(request.url);
    const params = new URLSearchParams(url.search);
    const search = params.get('search');
    const sort = params.get('sort');

    try {
        const response = await apiRequest('/vehicles/atv', {
            params: {
                 search: search || undefined, 
                 sort: sort || undefined
                }
})
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

        const response = await apiRequest(`/vehicles/atv/${id}`);
        return response.data.data
    } catch (error) {
        console.log(error)
    }
}
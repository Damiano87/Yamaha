import { useState, useEffect } from "react";
import { Motorcycle, Atv } from "@/utils/types";
import { AxiosError, AxiosResponse } from "axios";
import apiRequest from "@/api/apiRequest";


export const useFetchMultiple = (param: string | null, pathname: string) => {
  const [products, setProducts] = useState<Motorcycle[] | Atv[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  

  useEffect(() => {
        const fetchProducts = async () => {
          const productIds = param?.split(' ');
          const pathName = pathname.split('/').filter(Boolean)[0]
          const path = pathName === 'motocycles' ? 'moto' : pathName;

           if (!productIds) return;
           
            try {
                setIsLoading(true);
                setError(null);
                
                // Axios version - równoległe pobieranie danych
                const productPromises = productIds?.map((id: string) => 
                    apiRequest.get<Motorcycle[] | Atv[]>(`/vehicles/${path}/${id}`)
                );

                const responses = await Promise.all(productPromises);
                // Wyciągamy dane z odpowiedzi axios (są w .data)
                const productsData = responses.map((response: AxiosResponse) => response.data.data);
                
                setProducts(productsData);
                
            } catch (err) {
                const error = err as AxiosError<{ message: string }>;
                const errorMessage = error?.response?.data?.message || 'Wystąpił błąd podczas pobierania danych';
                setError(errorMessage);
            } finally {
                setIsLoading(false);
            }
        };

        
            fetchProducts();
        
    }, [pathname, param]);
  
  return {products, isLoading, error}
}

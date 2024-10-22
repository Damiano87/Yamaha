import { vehicleName } from "@/utils/functions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiRequest from '../api/apiRequest';
import {PropagateLoader} from "react-spinners";
import axios, { AxiosError } from "axios";

type Vehicle = {
  id: number;
  name: string;
  images: string[];
  colorNames: { name: string, color: string }[];
};

interface ApiResponse {
  data: Vehicle[];
  message?: string;
}

interface DropdownMotosProps {
  closeMenu: () => void;
  endpoint: string;
  vehicle: string;
}

const DropdownVehicles = ({closeMenu, endpoint, vehicle}: DropdownMotosProps) => {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      
       const controller = new AbortController();
       


      const fetchMotocycles = async () => {
        setLoading(true);
        setError(null);
          try {
              const response = await apiRequest.get<ApiResponse>(endpoint, { signal: controller.signal })
              console.log(response.data);
              setVehicles(response.data.data)
          } catch (error) {
            if (axios.isCancel(error)) {
               console.log('Request canceled', error)
            } else {
              const axiosError = error as AxiosError<ApiResponse>;
              console.log(axiosError.response?.data?.message)
              setError("Coś poszło nie tak");
            }
          } finally {
              setLoading(false)
          }
      }


      fetchMotocycles()


      return () => {
        controller.abort();
  };
    }, [endpoint])


  if (loading) return <PropagateLoader />

  if (error) return <p>{error}</p>


  return (
    <div className="grid grid-cols-3 gap-2 bg-slate-50 p-4">
          {vehicles.map((item) => {
            const { id, name, images, colorNames } = item;
            return (
              <Link
                to={`/${vehicle}/${id}?${new URLSearchParams({
                  color: colorNames[0].name,
                })}`}
                key={id}
                onClick={closeMenu}
              >
                <article className="shadow-md hover:shadow-lg w-44 grid justify-center bg-white text-center p-8">
                  <img src={images[0]} width={110} height={110} alt={name} />
                  <p className="text-[0.875rem]">{vehicleName(name)}</p>
                </article>
              </Link>
            );
          })}
        </div>
  )
}
export default DropdownVehicles
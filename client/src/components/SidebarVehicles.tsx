import apiRequest from "@/api/apiRequest";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios, { AxiosError } from "axios";
import {PropagateLoader} from "react-spinners";

type Vehicle = {
  id: number;
  name: string;
  images: string[];
  colorNames: { name: string, color: string }[];
  license: string
};

interface ApiResponse {
  data: Vehicle[];
  message?: string;
}

type VehicleProps = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setNaszeModeleHeight: React.Dispatch<React.SetStateAction<number>>;
  endpoint: string;
  vehicle: string;
};

const Vehicles = ({ setSidebarOpen, setNaszeModeleHeight, endpoint, vehicle }: VehicleProps) => {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      
       const controller = new AbortController();
       
      const fetchVehicles = async () => {
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


      fetchVehicles()


      return () => {
        controller.abort();
  };
    }, [endpoint])


  if (loading) return <div className="flex justify-center items-center h-52 w-full">
    <PropagateLoader />
  </div>

  if (error) return <div className="flex justify-center items-center h-52 w-full">
    
      <p>{error}</p>
    </div>


  return (
    <div className="p-3 grid gap-3 h-screen content-start bg-slate-200">
      {vehicles.map((item) => {
        const { id, name, images, colorNames, license } = item;
        return (
          <Link
            to={`/${vehicle}/${id}?${new URLSearchParams({
              color: colorNames[0].name,
            })}`}
            key={id}
            className="py-3 px-4 hover:shadow-lg hover:text-red-600 bg-white relative"
            onClick={() => {
              setSidebarOpen(false);
              setNaszeModeleHeight(0);
            }}
          >
            <p className="absolute top-1 left-3 text-[.8rem] text-red-600 font-semibold">
              {license}
            </p>
            <article className="flex items-center gap-x-3">
              <img src={images[0]} width={70} height={70} alt={name} />
              <p className="text-[0.875rem] font-semibold">{name}</p>
            </article>
          </Link>
        );
      })}
    </div>
  );
};

export default Vehicles
import { useFetchMultiple } from "@/hooks/useFetchMultiple";
import { useLocation, useSearchParams } from "react-router-dom";
import CompareImages from "./components/CompareImages";
import UpperPanel from "./components/UpperPanel";
import { Motorcycle, Atv } from "@/utils/types";
import { useState, useEffect } from "react";
import Modal from "./components/Modal";

const ComparePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const param = searchParams.get("products")
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { products, isLoading, error } = useFetchMultiple(param, location.pathname)
    
 // handle remove model function
  const removeModel = (vehicle: Motorcycle | Atv): void => {
    const iDs = searchParams.get('products')?.split(" ");
    const newIds = iDs?.filter(id => id !== vehicle.id);
    

    const newSearchParams = new URLSearchParams(searchParams);
    
    if (newIds?.length) {
      newSearchParams.set('products', newIds?.join(" ") || " ");
    } else {
      newSearchParams.delete('products');
    }
    
    setSearchParams(newSearchParams);
  }


  // add model to compare function
  const addVehicle = (): void => {
    setIsModalOpen(true);
  }



  // handle scroll function
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    
    if (error) return <div className="h-screen flex items-center justify-center">
      <h1 className="text-[2rem] font-semibold">Wystąpił błąd: {error}</h1>
    </div>;
  return (
    <>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <UpperPanel products={products} removeModel={removeModel} addVehicle={addVehicle} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <CompareImages products={products} removeModel={removeModel} addVehicle={addVehicle} isLoading={isLoading}/>
    </>
  )
}
export default ComparePage
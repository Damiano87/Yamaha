import { useFetchMultiple } from "@/hooks/useFetchMultiple";
import { useLocation, useSearchParams } from "react-router-dom";
import CompareImages from "./components/CompareImages";
import UpperPanel from "./components/UpperPanel";
import { Motorcycle, Atv } from "@/utils/types";
import { useState, useEffect } from "react";
import Modal from "./components/Modal";
import TechDataToCompare from "./components/TechDataToCompare";
import Links from "./components/Links";

const ComparePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const param = searchParams.get("products")
  const [isOpen, setIsOpen] = useState(false);
  const [vehicles, setVehicles] = useState<Motorcycle[] | Atv[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isFirstOpen, setIsFirstOpen] = useState<boolean>(true);

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

  const techData = products?.map(product => product.daneTechniczne)
  
  
    if (error) return <div className="h-screen flex items-center justify-center">
      <h1 className="text-[2rem] font-semibold">{error}</h1>
    </div>;
  return (
    <div className="bg-neutral-100 py-14">
      {isModalOpen && <Modal vehicles={vehicles} setVehicles={setVehicles} isFirstOpen={isFirstOpen} setIsFirstOpen={setIsFirstOpen} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>}
      <UpperPanel products={products} removeModel={removeModel} addVehicle={addVehicle} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <CompareImages products={products} removeModel={removeModel} addVehicle={addVehicle} isLoading={isLoading}/>
      {products?.length ? <TechDataToCompare techData={techData}/> : null}
      <Links products={products}/>
    </div>
  )
}
export default ComparePage
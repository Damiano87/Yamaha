import { useState, useEffect } from "react"
import { Motorcycle, Atv } from "@/utils/types";
import VehicleCard from './VehicleCard';
import AddModel from './AddModel';
import { useSearchParams } from "react-router-dom";



const UpperPanel = ({products}: {products: Motorcycle[] | Atv[]}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
    // handle scroll function
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


  // handle remove model function
  const removeModel = (product: Motorcycle | Atv) => {
    const iDs = searchParams.get('products')?.split(" ");
    const removeIDs = iDs?.filter(id => id !== product.id)

    console.log(removeIDs);
    
    searchParams.set('products', removeIDs?.join(" ") || '')
    if (removeIDs?.length === 0) searchParams.delete('products')
    setSearchParams(searchParams)
  }


  return (
    <div className={`${isOpen ? "translate-y-0" : "-translate-y-full"} fixed z-[2] transition-all duration-300 top-[calc(83px)] left-0 bg-white py-6 w-full shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-4 grow">
                  {products[0] ? (
                    <VehicleCard vehicle={products[0]} onRemove={removeModel} className="py-3 col-start-2"/>
                ) : (
                    <AddModel text="Dodaj nowy" className="col-start-2"/>
                )}
                  {products[1] ? (
                    <VehicleCard vehicle={products[1]} onRemove={removeModel} className="py-3"/>
                ) : (
                    <AddModel text="Dodaj nowy"/>
                )}
                  {products[2] ? (
                    <VehicleCard vehicle={products[2]} onRemove={removeModel} className="py-3"/>
                ) : (
                    <AddModel text="Dodaj nowy"/>
                )}
                  {products[3] ? (
                    <VehicleCard vehicle={products[3]} onRemove={removeModel} className="py-3"/>
                ) : (
                    <AddModel text="Dodaj nowy"/>
                )}
            </div>
        </div>
    </div>
  )
}
export default UpperPanel
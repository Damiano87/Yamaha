import { useFetchMultiple } from "@/hooks/useFetchMultiple";
import { useLocation, useSearchParams } from "react-router-dom";
import CompareImages from "./components/CompareImages";
import UpperPanel from "./components/UpperPanel";



const ComparePage = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const param = searchParams.get("products")

  const { products, isLoading, error } = useFetchMultiple(param, location.pathname)


    
    
    if (isLoading) return <div>Ładowanie...</div>;
    if (error) return <div>Wystąpił błąd: {error}</div>;
  return (
    <>
      <UpperPanel products={products}/>
      <CompareImages products={products} />
    </>
  )
}
export default ComparePage
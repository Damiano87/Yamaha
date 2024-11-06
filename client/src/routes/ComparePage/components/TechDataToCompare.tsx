import Data from "./Data"
import { daneTech, TechMoto } from "@/utils/types"
import { engineNames, suspensionNames, dimensionsNames, maxLoadNames, additionalInfoNames, engineNamesMoto, suspensionNamesMoto, dimensionsNamesMoto } from "./names";
import { useLocation } from "react-router-dom";

type TechCompareProps = {
  techData: Array<daneTech | TechMoto>
}

const TechDataToCompare = ({techData}: TechCompareProps) => {
    const location = useLocation();
    const path = location.pathname.split('/').filter(Boolean)[0]
    


    const engines = techData?.map(item => item.silnik) || []
    const suspension = techData?.map(item => item.podwozie) || []
    const dimensions = techData?.map(item => item.wymiary) || []
    const maxLoad = techData?.map(item => item.obciazenieMaksymalne) || []
    const additionalInfo = techData?.map(item => item.informacjeDodatkowe) || []

  return (
    <section className="tech-data-to-compare max-w-7xl mx-auto px-5 my-14">
        <Data open={true} data={engines} names={path === "motocycles" ? engineNamesMoto : engineNames} name="Silnik"/>
        <Data data={suspension} names={path === "motocycles" ? suspensionNamesMoto : suspensionNames} name="Podwozie"/>
        <Data data={dimensions} names={path === "motocycles" ? dimensionsNamesMoto : dimensionsNames} name="Wymiary" border={path === "motocycles"}/>
        {path === "atv" && <Data data={maxLoad} names={maxLoadNames} name="Obciążenie maksymalne"/>}
        {path === "atv" && <Data data={additionalInfo} names={additionalInfoNames} name="Informacje dodatkowe" border={true}/>}
    </section>
  )
}
export default TechDataToCompare
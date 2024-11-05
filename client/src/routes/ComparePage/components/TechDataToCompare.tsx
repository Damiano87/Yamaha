import Engine from "./Engine"
import { daneTech, TechMoto } from "@/utils/types"

type TechCompareProps = {
  techData: Array<daneTech | TechMoto>
}

const TechDataToCompare = ({techData}: TechCompareProps) => {
    const engines = techData?.map(item => item.silnik) || []
    
  return (
    <section className="tech-data-to-compare max-w-7xl mx-auto px-5 lg:px-0 my-14">
        <Engine engines={engines}/>
    </section>
  )
}
export default TechDataToCompare
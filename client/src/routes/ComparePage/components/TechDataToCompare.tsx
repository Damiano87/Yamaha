import Engine from "./Engine"



const TechDataToCompare = ({techData}) => {
    const engines = techData.map(item => item.silnik)
    
  return (
    <section className="tech-data-to-compare max-w-7xl mx-auto px-5 my-14">
        <Engine engines={engines}/>
    </section>
  )
}
export default TechDataToCompare
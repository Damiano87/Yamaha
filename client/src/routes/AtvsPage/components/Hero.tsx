import { IoMdInformationCircleOutline } from "react-icons/io";


const Hero = () => {
  return (
    <section className="flex items-end m-auto max-w-[95rem] h-80 md:h-screen bg-[url('images/coolquad.jpeg')] bg-black/35 bg-blend-darken bg-cover bg-center bg-no-repeat">
        <div className="text-white max-w-7xl w-full mx-auto mb-7 md:mb-28 px-5">
          <h4 className="uppercase text-slate-200 text-[.8rem] md:text-[1.2rem] font-semibold tracking-wider">
            #drivenbyvictory
          </h4>
          <h1 className="uppercase text-slate-200 text-[1.5rem] md:text-[2.5rem] font-bold tracking-wider">
            atv - sport & utility
          </h1>
          <div className="flex items-center gap-3 text-slate-200">
            <IoMdInformationCircleOutline />
            <p className="text-xs md:text-base">
              Profesjonalny zawodnik demonstrujący zaawansowane umiejętności w
              zamkniętym obszarze.
            </p>
          </div>
        </div>
      </section>
  )
}
export default Hero
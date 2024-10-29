import { IoMdInformationCircleOutline } from "react-icons/io";


const Hero = () => {
  return (
    <section className="m-auto  flex h-80 md:h-screen items-end bg-[url('images/yamahared.jpg')] bg-cover bg-no-repeat">
        <div className="mx-auto mb-16 md:mb-28 w-full max-w-7xl px-5 text-white">
          <h4 className="md:text-[1.2rem] font-semibold uppercase tracking-wider">
            r/world
          </h4>
          <h1 className="text-[1.7rem] md:text-[2.5rem] font-bold uppercase tracking-wider">
            supersport
          </h1>
          <div className="flex items-center gap-3">
            <IoMdInformationCircleOutline />
            <p className="text-[.7rem] md:text-[1rem]">
              Profesjonalny zawodnik demonstrujący zaawansowane umiejętności w
              zamkniętym obszarze.
            </p>
          </div>
        </div>
      </section>
  )
}
export default Hero
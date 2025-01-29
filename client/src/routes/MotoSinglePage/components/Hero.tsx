import { formatCurrencyPLN } from "@/utils/functions"

type HeroProps = {
    name: string;
    price: number;
    images: string[];
}


const Hero = ({name, price, images}: HeroProps) => {
  return (
    <section className="flex items-end h-80 md:h-screen px-10 bg-black/35 bg-blend-darken bg-center bg-cover" style={{ backgroundImage: `url(${images[3]})` }}>
          <div className="text-white h-fit w-full max-w-7xl mx-auto mb-24">
            <h2 className="text-[.8rem] md:text-[1rem] lg:text-[1.3rem] uppercase font-semibold">
              the beauty of work.
            </h2>
            <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[3rem] uppercase font-bold tracking-wider">
              {name}
            </h1>
            <p className="font-semibold mt-5">Od</p>
            <p className="text-[1.2rem] font-semibold">
              {formatCurrencyPLN(price)}
            </p>
          </div>
        </section>
  )
}
export default Hero
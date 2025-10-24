import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Motorcycle = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  const slideVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };


  return (
    <motion.div
        ref={ref}
        variants={slideVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
    >
        <Link
          to={"/motocycles"}
          className="p-3"
        >
          <div className="flex hover:scale-105 duration-300 flex-col justify-between h-[220px] aspect-square">
            <picture>
              <source srcSet="/images/motocycle-transparent.webp" type="image/webp"/>
              <img 
              src="/images/Yamaha-Motorcycle-Transparent-Image.png"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain" 
              alt="atv vehicle" 
              />
            </picture>
            <h4 className="uppercase font-semibold tracking-wider text-white">
              motocykle
            </h4>
          </div>
        </Link>
    </motion.div>
  )
}
export default Motorcycle
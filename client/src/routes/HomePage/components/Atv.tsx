import atvs from "../../../images/atv-transparent.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";


const slideVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };


const Atv = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

  return (
    <motion.div
        ref={ref}
        variants={slideVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
    >
        <Link
          to={"/atv"}
          className="p-3"
        >
          <div className="flex hover:scale-105 duration-300 flex-col justify-between h-[220px] aspect-square">
            <img src={atvs}  alt="atv vehicle" className="w-full h-full object-contain" />
            <h4 className="uppercase font-semibold tracking-wider text-white">atv</h4>
          </div>
        </Link>
    </motion.div>
  )
}
export default Atv
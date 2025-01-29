
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { useIndexContext } from "@/hooks/useDropdownContext";
import { useState, useEffect } from "react";

import Modal from "./Modal";
import { useLocation } from "react-router-dom";


type CarouselProps = {
  images: string[];
  name: string;
};

const Karuzela = ({ images, name }: CarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const { current, setCurrent } = useIndexContext();
  const [showModal, setShowModal] = useState<boolean>(false);
  const location = useLocation(); 


  // scroll to specific image in carousel
  const getImage = (index: number) => {
    api?.scrollTo(index);
    setCurrent(index);
  };
  // get next image
  const next = () => {
    setCurrent((prev) => prev + 1);
    api?.scrollNext();
  };

  // get previous image
  const previous = () => {
    setCurrent((prev) => prev - 1);
    api?.scrollPrev();
  };

  // reset state on path change
  useEffect(() => {
    setCurrent(0);
  }, [location.pathname, setCurrent]);


  return (
    <div>
      <Carousel
        className="h-64 md:h-[600px] flex items-center border-2 sm:w-[400px] lg:w-auto mb-8 lg:mb-0 mx-auto"
        opts={{
          align: "start",
          duration: 15,
        }}
        setApi={setApi}
      >
        <CarouselContent className="flex items-center">
          {images.map((image, index) => {
            return (
              <CarouselItem
                key={index}
                className="cursor-pointer"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                <img
                  src={image}
                  width={800}
                  height={800}
                  alt={name}
                  className="h-auto"          
                ></img>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious
          className={`${
            current === 0 && "hidden"
          } left-6 bg-black text-white h-6 w-6 md:h-12 md:w-12 bg-opacity-35`}
          onClick={previous}
        />
        <CarouselNext
          className={`${
            current === images.length - 1 && "hidden"
          } right-6 bg-black text-white h-6 w-6 md:h-12 md:w-12 bg-opacity-35`}
          onClick={next}
        />
      </Carousel>
      <div className="inline-flex flex-wrap justify-center lg:justify-start gap-3 mt-3 custom-inner-shadow-right">
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              width={100}
              height={100}
              alt={name}
              className={`${
                index === current ? "border-black" : "opacity-50"
              } border-2 cursor-pointer`}
              onClick={() => getImage(index)}
            ></img>
          );
        })}
      </div>

      <Modal
        api={api}
        setApi={setApi}
        getImage={getImage}
        previous={previous}
        next={next}
        images={images}
        name={name}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default Karuzela;

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { useState, useEffect, useRef } from "react";
import { useIndexContext } from "../hooks/useDropdownContext";
import { X } from "lucide-react";
import { EmblaCarouselType } from "embla-carousel";


type ModalProps = {
  api: EmblaCarouselType | undefined;
  setApi: React.Dispatch<React.SetStateAction<EmblaCarouselType | undefined>>;
  getImage: (index: number) => void;
  previous: () => void;
  next: () => void;
  images: string[];
  name: string;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ getImage, previous, next, showModal, setShowModal, images, name }: ModalProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const { current, setCurrent } = useIndexContext();
  
  const modalRef = useRef<HTMLDivElement>(null);

  // scroll to specific image in modal carousel
  const getImageModal = (index: number) => {
    getImage(index);
    api?.scrollTo(index);
    setCurrent(index);
  };

  // next modal image
  const nextModal = () => {
    next();
    api?.scrollNext();
  };

  // previous modal image
  const previousModal = () => {
    previous();
    api?.scrollPrev();
  };

  // get current image
  useEffect(() => {
    api?.scrollTo(current);
  });

  // close modal on click outside
  const closeOutside = (event: MouseEvent) => {
    event.preventDefault();
    const target = event.target as HTMLElement;
    if (modalRef.current && !modalRef.current.contains(target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeOutside);

    return () => {
      document.removeEventListener("mousedown", closeOutside);
    };
  });

  if (showModal) {
    return (
      <div className="flex justify-center items-center fixed left-0 top-0 w-screen h-screen bg-black/70 z-10">
        <div
          className="h-screen lg:h-auto bg-white rounded-lg"
          ref={modalRef}
        >
          <div>
            <div className="flex justify-between p-6 border-b-2 capitalize text-[1.2rem]">
              <h1 className="font-bold">{name} galeria</h1>
              <button onClick={() => setShowModal(false)}>
                <X />
              </button>
            </div>
            <div className="lg:hidden flex justify-end px-6 py-2">
              <p className="text-[.8rem] font-bold">
                {current + 1}/{images.length}
              </p>
            </div>
          </div>
          <div className="p-6 h-full flex flex-col items-center lg:block">
            <Carousel
              className="flex items-start max-w-[600px] mx-auto"
              opts={{
                align: "start",
                duration: 15,
              }}
              setApi={setApi}
            >
              <CarouselContent className="flex items-center">
                {images.map((image, index) => {
                  return (
                    <CarouselItem key={index}>
                      <img
                        src={image}
                        width={600}
                        height={600}
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
                onClick={previousModal}
              />
              <CarouselNext
                className={`${
                  current === images.length - 1 && "hidden"
                } right-6 bg-black text-white h-6 w-6 md:h-12 md:w-12 bg-opacity-35`}
                onClick={nextModal}
              />
            </Carousel>
            <div className="flex gap-2  lg:hidden">
              {Array.from({ length: images.length }, (_, index) => (
                <div
                  key={index}
                  className={`${
                    current === index ? "bg-black" : "bg-slate-400"
                  }  w-2 h-2 rounded-full mt-5`}
                ></div>
              ))}
            </div>
            <div className="hidden lg:flex flex-wrap justify-center lg:justify-start gap-3 mt-16">
              {images.map((image, index) => {
                return (
                  <img
                    key={index}
                    src={image}
                    width={80}
                    height={80}
                    alt={name}
                    className={`${
                      index === current ? "border-black" : "opacity-50"
                    } border-2 cursor-pointer`}
                    onClick={() => getImageModal(index)}
                  ></img>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Modal;

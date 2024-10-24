import { GiGears } from "react-icons/gi";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { updateAtvSchema, type updateAtv } from "../../schemas/updateAtvSchema";
import apiRequest from '../../api/apiRequest';
// import UploadWidget from "@/components/uploadWidget.tsx";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import AtvDisplay from "./components/AtvDisplay";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { Atv } from "@/utils/types";

const AtvUpdatePage = () => {
    const [images, setImages] = useState([]);
    const [selectedOption, setSelectedOption] = useState("option1");
    const atv = useLoaderData() as Atv;
    const {id} = useParams();
    const navigate = useNavigate();

    const {register, handleSubmit, reset, formState: {errors, isSubmitting}} = useForm<updateAtv>({
        resolver: zodResolver(updateAtvSchema),
        mode: "onChange",
    })
    
    // Funkcja obsługująca zmianę wyboru
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value); // Zmienia stan na wybraną opcję
  };


    const onSubmit = async (data: updateAtv) => {
        
        
        try {
            const response = await apiRequest.patch("/vehicles/atv", {...data, id})

            
            setImages([]);
            toast.success('Successfully updated!');
            reset();

            const colorParams = new URLSearchParams({color: response.data.colorNames[0].name}).toString()
        
            navigate(`/atv/${id}?${colorParams}`, { replace: true });
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong');
    };
}

  return (
    <section className="nice-gradient mt-[84px] py-14">
        <Toaster />
        <div className="max-w-7xl mx-auto px-4">
            <AtvDisplay atv={atv}/>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="max-w-[45rem]">
                <div className="name input-box">
                   <label htmlFor="name" className="text-[1.2rem] text-white font-medium cursor-pointer">Nazwa produktu</label>
                   <input type="text" {...register("name")} id="name" name="name" className={`${errors.name && "border-red-500"} custom-input`}/>
                    {errors.name && <p>{errors.name.message}</p>}

            </div>

            <div className="price input-box">
                   <label htmlFor="price" className="text-[1.2rem] text-white font-medium cursor-pointer">Cena</label>
                   <input type="number" {...register("price", {setValueAs: (value) => value === "" ? null : parseFloat(value)})}  id="price" name="price" className={`${errors.price && "border-red-500"} custom-input`}/>    
                    {errors.price && <p>{errors.price.message === "Expected number, received nan" ? "To pole jest wymagane" : errors.price.message}</p>}

            </div>

            <div className="priceInfo input-box">
                   <label htmlFor="priceInfo" className="text-[1.2rem] text-white font-medium cursor-pointer">Informacja o cenach</label>
                   <input type="text" {...register("priceInfo")} id="priceInfo" name="priceInfo" className={`${errors.priceInfo && "border-red-500"} custom-input`}/>
                   {errors.priceInfo && <p>{errors.priceInfo.message}</p>}
            </div>

            <div className="desc input-box">
                   <label htmlFor="desc" className="text-[1.2rem] text-white font-medium cursor-pointer">Opis</label>
                   <textarea rows={5} maxLength={200} {...register("desc")} id="desc" name="desc" className={`${errors.desc && "border-red-500"} custom-input`}/>
                   {errors.desc && <p>{errors.desc.message}</p>}
            </div>

            

            {/* amount of colors container */}
            <div className="colors space-y-3 mt-8">
                <h3 className="text-white text-[1.3rem]">Wybierz ilość kolorów:</h3>
                <div className="radio1"> 
                    <input
                        id="option1"
                        type="radio"
                        value="option1"
                        checked={selectedOption === "option1"} // Sprawdzamy, czy to wybrana opcja
                        onChange={handleOptionChange}
                        className="mr-3 cursor-pointer"
                    />
                    <label htmlFor="option1" className="text-[1.2rem] text-white font-medium cursor-pointer">1 kolor</label>
                </div>
                <div className="radio2"> 
                    <input
                        id="option2"
                        type="radio"
                        value="option2"
                        checked={selectedOption === "option2"} // Sprawdzamy, czy to wybrana opcja
                        onChange={handleOptionChange}
                        className="mr-3 cursor-pointer"
                    />
                    <label htmlFor="option2" className="text-[1.2rem] text-white font-medium cursor-pointer">2 kolory</label>
                </div>
                <div className="radio3"> 
                    <input
                        id="option3"
                        type="radio"
                        value="option3"
                        checked={selectedOption === "option3"} // Sprawdzamy, czy to wybrana opcja
                        onChange={handleOptionChange}
                        className="mr-3 cursor-pointer"
                    />
                    <label htmlFor="option3" className="text-[1.2rem] text-white font-medium cursor-pointer">3 kolory</label>
                </div>
            </div>

            <div className="color-inputs max-w-[25rem]">
                {selectedOption === "option1" && <div className="mt-10">
                            <div className="color input-box">
                   <label htmlFor="color" className="text-[1.2rem] text-white font-medium cursor-pointer">Nazwa koloru</label>
                   <input type="text" {...register("color")} id="color" name="color" className={`${errors.color && "border-red-500"} custom-input`}/>
                   {errors.color && <p>{errors.color.message}</p>}
            </div>

            <div className="hex input-box">
                   <label htmlFor="hex" className="text-[1.2rem] text-white font-medium cursor-pointer">Kod hex koloru</label>
                   <input type="text" {...register("hex")} id="hex" name="hex" className={`${errors.hex && "border-red-500"} custom-input`}/>
                   {errors.hex && <p>{errors.hex.message}</p>}
            </div>
                    </div>}
                {selectedOption === "option2" && <div className="mt-10">
                            <div className="color input-box">
                   <label htmlFor="color" className="text-[1.2rem] text-white font-medium cursor-pointer">Nazwa pierszego koloru</label>
                   <input type="text" {...register("color")} id="color" name="color" className={`${errors.color && "border-red-500"} custom-input`}/>
                   {errors.color && <p>{errors.color.message}</p>}
            </div>

            <div className="hex input-box">
                   <label htmlFor="hex" className="text-[1.2rem] text-white font-medium cursor-pointer">Kod hex pierwszego koloru</label>
                   <input type="text" {...register("hex")} id="hex" name="hex" className={`${errors.hex && "border-red-500"} custom-input`}/>
                   {errors.hex && <p>{errors.hex.message}</p>}
            </div>
            <div className="color input-box">
                   <label htmlFor="color2" className="text-[1.2rem] text-white font-medium cursor-pointer">Nazwa drugiego koloru</label>
                   <input type="text" {...register("color2")} id="color2" name="color2" className={`${errors.color2 && "border-red-500"} custom-input`}/>
                   {errors.color2 && <p>{errors.color2.message}</p>}
            </div>

            <div className="hex input-box">
                   <label htmlFor="hex2" className="text-[1.2rem] text-white font-medium cursor-pointer">Kod hex drugiego koloru</label>
                   <input type="text" {...register("hex2")} id="hex2" name="hex2" className={`${errors.hex2 && "border-red-500"} custom-input`}/>
                   {errors.hex2 && <p>{errors.hex2.message}</p>}
            </div>
                    </div>}
                {selectedOption === "option3" && <div className="mt-10">
                    <div className="color input-box">
                   <label htmlFor="color" className="text-[1.2rem] text-white font-medium cursor-pointer">Nazwa pierwszego koloru</label>
                   <input type="text" {...register("color")} id="color" name="color" className={`${errors.color && "border-red-500"} custom-input`}/>
                   {errors.color && <p>{errors.color.message}</p>}
            </div>

            <div className="hex input-box">
                   <label htmlFor="hex" className="text-[1.2rem] text-white font-medium cursor-pointer">Kod hex pierwszego koloru</label>
                   <input type="text" {...register("hex")} id="hex" name="hex" className={`${errors.hex && "border-red-500"} custom-input`}/>
                   {errors.hex && <p>{errors.hex.message}</p>}
            </div>
            <div className="color input-box">
                   <label htmlFor="color2" className="text-[1.2rem] text-white font-medium cursor-pointer">Nazwa drugiego koloru</label>
                   <input type="text" {...register("color2")} id="color2" name="color2" className={`${errors.color2 && "border-red-500"} custom-input`}/>
                   {errors.color2 && <p>{errors.color2.message}</p>}
            </div>

            <div className="hex input-box">
                   <label htmlFor="hex2" className="text-[1.2rem] text-white font-medium cursor-pointer">Kod hex drugiego koloru</label>
                   <input type="text" {...register("hex2")} id="hex2" name="hex2" className={`${errors.hex2 && "border-red-500"} custom-input`}/>
                   {errors.hex2 && <p>{errors.hex2.message}</p>}
            </div>
            <div className="color input-box">
                   <label htmlFor="color3" className="text-[1.2rem] text-white font-medium cursor-pointer">Nazwa trzeciego koloru</label>
                   <input type="text" {...register("color3")} id="color3" name="color3" className={`${errors.color3 && "border-red-500"} custom-input`}/>
                   {errors.color3 && <p>{errors.color3.message}</p>}
            </div>

            <div className="hex input-box">
                   <label htmlFor="hex3" className="text-[1.2rem] text-white font-medium cursor-pointer">Kod hex trzeciego koloru</label>
                   <input type="text" {...register("hex3")} id="hex3" name="hex3" className={`${errors.hex3 && "border-red-500"} custom-input`}/>
                   {errors.hex3 && <p>{errors.hex3.message}</p>}
            </div>    
                </div>}
            </div>

            </div>

            <h2 className="text-white text-[2rem] font-bold my-14">Dane techniczne pojazdu</h2>

            <div className="tech-data-container md:grid grid-cols-2 gap-14">
                
                <div className="engine">
                    <h3 className="text-slate-300 tracking-wider mb-3 text-[1.3rem] font-bold">Silnik</h3>

                    <div className="engineType input-box">
                        <label htmlFor="engineType" className="text-[1.2rem] text-white font-medium cursor-pointer">Typ silnika</label>
                        <input type="text" {...register("engineType")} id="engineType" name="engineType" className={`${errors.engineType && "border-red-500"} custom-input`}/>
                        {errors.engineType && <p>{errors.engineType.message}</p>}
                    </div>

                    <div className="capacity input-box">
                        <label htmlFor="capacity" className="text-[1.2rem] text-white font-medium cursor-pointer">Pojemność</label>
                        <input type="text" {...register("capacity")} id="capacity" name="capacity" className={`${errors.capacity && "border-red-500"} custom-input`}/>
                        {errors.capacity && <p>{errors.capacity.message === "Expected number, received nan" ? "To pole jest wymagane" : errors.capacity.message}</p>}
                    </div>

                    <div className="diameterXtlok input-box">
                        <label htmlFor="diameterXtlok" className="text-[1.2rem] text-white font-medium cursor-pointer">Średnica X skoku tłoka</label>
                        <input type="text" {...register("diameterXtlok")} id="diameterXtlok" name="diameterXtlok" className={`${errors.diameterXtlok && "border-red-500"} custom-input`}/>
                        {errors.diameterXtlok && <p>{errors.diameterXtlok.message === "Expected number, received nan" ? "To pole jest wymagane" : errors.diameterXtlok.message}</p>}
                    </div>

                    <div className="stopienSprezania input-box">
                        <label htmlFor="stopienSprezania" className="text-[1.2rem] text-white font-medium cursor-pointer">Stopień sprężania</label>
                        <input type="text" {...register("stopienSprezania")} id="stopienSprezania" name="stopienSprezania" className={`${errors.stopienSprezania && "border-red-500"} custom-input`}/>
                        {errors.stopienSprezania && <p>{errors.stopienSprezania.message}</p>}
                    </div>

                    <div className="ukladSmarowania input-box">
                        <label htmlFor="ukladSmarowania" className="text-[1.2rem] text-white font-medium cursor-pointer">Układ smarowania</label>
                        <input type="text" {...register("ukladSmarowania")} id="ukladSmarowania" name="ukladSmarowania" className={`${errors.ukladSmarowania && "border-red-500"} custom-input`}/>
                        {errors.ukladSmarowania && <p>{errors.ukladSmarowania.message}</p>}
                    </div>

                    <div className="ukladPaliwowy input-box">
                        <label htmlFor="ukladPaliwowy" className="text-[1.2rem] text-white font-medium cursor-pointer">Układ paliwowy</label>
                        <input type="text" {...register("ukladPaliwowy")} id="ukladPaliwowy" name="ukladPaliwowy" className={`${errors.ukladSmarowania && "border-red-500"} custom-input`}/>
                        {errors.ukladPaliwowy && <p>{errors.ukladPaliwowy.message}</p>}
                    </div>

                    <div className="ukladZaplonu input-box">
                        <label htmlFor="ukladZaplonu" className="text-[1.2rem] text-white font-medium cursor-pointer">Układ zapłonu</label>
                        <input type="text" id="ukladZaplonu" name="ukladZaplonu" className={`${errors.ukladZaplonu && "border-red-500"} custom-input`}/>
                        {errors.ukladZaplonu && <p>{errors.ukladZaplonu.message}</p>}
                    </div>

                    <div className="ukladRozrusznika input-box">
                        <label htmlFor="ukladRozrusznika" className="text-[1.2rem] text-white font-medium cursor-pointer">Układ rozrusznika</label>
                        <input type="text" {...register("ukladRozrusznika")} id="ukladRozrusznika" name="ukladRozrusznika" className={`${errors.ukladRozrusznika && "border-red-500"} custom-input`}/>
                        {errors.ukladRozrusznika && <p>{errors.ukladRozrusznika.message}</p>}
                    </div>

                    <div className="gearBox input-box">
                        <label htmlFor="gearBox" className="text-[1.2rem] text-white font-medium cursor-pointer">Skrzynia biegów</label>
                        <input type="text" {...register("gearBox")} id="gearBox" name="gearBox" className={`${errors.gearBox && "border-red-500"} custom-input`}/>
                        {errors.gearBox && <p>{errors.gearBox.message}</p>}
                    </div>

                    <div className="naped input-box">
                        <label htmlFor="naped" className="text-[1.2rem] text-white font-medium cursor-pointer">Napęd</label>
                        <input type="text" {...register("naped")} id="naped" name="naped" className={`${errors.naped && "border-red-500"} custom-input`}/>
                        {errors.naped && <p>{errors.naped.message}</p>}
                    </div>

                    <div className="napedKoncowy input-box">
                        <label htmlFor="napedKoncowy" className="text-[1.2rem] text-white font-medium cursor-pointer">Napęd końcowy</label>
                        <input type="text" {...register("napedKoncowy")} id="napedKoncowy" name="napedKoncowy" className={`${errors.napedKoncowy && "border-red-500"} custom-input`}/>
                        {errors.napedKoncowy && <p>{errors.napedKoncowy.message}</p>}
                    </div>
                    
                </div>

                <div className="suspension">
                    <h3 className="text-slate-300 tracking-wider mb-3 text-[1.3rem] font-bold">Podwozie</h3>

                    <div className="grid items-start h-full">
                        <div>
                            <div className="ukladPrzedZawieszenia input-box">
                        <label htmlFor="ukladPrzedZawieszenia" className="text-[1.2rem] text-white font-medium cursor-pointer">Układ przedniego zawieszenia</label>
                        <input type="text" {...register("ukladPrzedZawieszenia")} id="ukladPrzedZawieszenia" name="ukladPrzedZawieszenia" className={`${errors.ukladPrzedZawieszenia && "border-red-500"} custom-input`}/>
                        {errors.ukladPrzedZawieszenia && <p>{errors.ukladPrzedZawieszenia.message}</p>}
                    </div>

                    <div className="ukladTylZawieszenia input-box">
                        <label htmlFor="ukladTylZawieszenia" className="text-[1.2rem] text-white font-medium cursor-pointer">Układ tylnego zawieszenia</label>
                        <input type="text" {...register("ukladTylZawieszenia")} id="ukladTylZawieszenia" name="ukladTylZawieszenia" className={`${errors.ukladTylZawieszenia && "border-red-500"} custom-input`}/>
                        {errors.ukladTylZawieszenia && <p>{errors.ukladTylZawieszenia.message}</p>}
                    </div>

                    <div className="hamulecPrzedni input-box">
                        <label htmlFor="hamulecPrzedni" className="text-[1.2rem] text-white font-medium cursor-pointer">Hamulec przedni</label>
                        <input type="text" {...register("hamulecPrzedni")} id="hamulecPrzedni" name="hamulecPrzedni" className={`${errors.hamulecPrzedni && "border-red-500"} custom-input`}/>
                        {errors.hamulecPrzedni && <p>{errors.hamulecPrzedni.message}</p>}
                    </div>

                    <div className="hamulecTylny input-box">
                        <label htmlFor="hamulecTylny" className="text-[1.2rem] text-white font-medium cursor-pointer">Hamulec tylny</label>
                        <input type="text" {...register("hamulecTylny")} id="hamulecTylny" name="hamulecTylny" className={`${errors.hamulecTylny && "border-red-500"} custom-input`}/>
                        {errors.hamulecTylny && <p>{errors.hamulecTylny.message}</p>}
                    </div>

                    <div className="ogumieniePrzednie input-box">
                        <label htmlFor="ogumieniePrzednie" className="text-[1.2rem] text-white font-medium cursor-pointer">Ogumienie przednie</label>
                        <input type="text" {...register("ogumieniePrzednie")} id="ogumieniePrzednie" name="ogumieniePrzednie" className={`${errors.ogumieniePrzednie && "border-red-500"} custom-input`}/>
                        {errors.ogumieniePrzednie && <p>{errors.ogumieniePrzednie.message}</p>}
                    </div>

                    <div className="ogumienieTylne input-box">
                        <label htmlFor="ogumienieTylne" className="text-[1.2rem] text-white font-medium cursor-pointer">Ogumienie tylne</label>
                        <input type="text" {...register("ogumienieTylne")} id="ogumienieTylne" name="ogumienieTylne" className={`${errors.ogumienieTylne && "border-red-500"} custom-input`}/>
                        {errors.ogumienieTylne && <p>{errors.ogumienieTylne.message}</p>}
                    </div>
                        </div>
                    <div className="flex justify-center items-center">
                        <GiGears color="white" className="w-[100px] h-[100px] mt-10 md:w-[170px] md:h-[170px] md:mt-0"/>
                    </div>
                    </div>
                </div>

                <div className="dimensions">
                    <h3 className="text-slate-300 tracking-wider mb-3 text-[1.3rem] font-bold">Wymiary</h3>

                    <div className="dlugoscCalk input-box">
                        <label htmlFor="dlugoscCalk" className="text-[1.2rem] text-white font-medium cursor-pointer">Długość całkowita</label>
                        <input type="text" {...register("dlugoscCalk")} id="dlugoscCalk" name="dlugoscCalk" className={`${errors.dlugoscCalk && "border-red-500"} custom-input`}/>
                        {errors.dlugoscCalk && <p>{errors.dlugoscCalk.message}</p>}
                    </div>

                    <div className="szerCalk input-box">
                        <label htmlFor="szerCalk" className="text-[1.2rem] text-white font-medium cursor-pointer">Szerokość całkowita</label>
                        <input type="text" {...register("szerCalk")} id="szerCalk" name="szerCalk" className={`${errors.szerCalk && "border-red-500"} custom-input`}/>
                        {errors.szerCalk && <p>{errors.szerCalk.message}</p>}
                    </div>

                    <div className="wysokoscCalk input-box">
                        <label htmlFor="wysokoscCalk" className="text-[1.2rem] text-white font-medium cursor-pointer">Wysokość całkowita</label>
                        <input type="text" {...register("wysokoscCalk")} id="wysokoscCalk" name="wysokoscCalk" className={`${errors.wysokoscCalk && "border-red-500"} custom-input`}/>
                        {errors.wysokoscCalk && <p>{errors.wysokoscCalk.message}</p>}
                    </div>

                    <div className="wysSiodelka input-box">
                        <label htmlFor="wysSiodelka" className="text-[1.2rem] text-white font-medium cursor-pointer">Wysokość siodełka</label>
                        <input type="text" {...register("wysSiodelka")} id="wysSiodelka" name="wysSiodelka" className={`${errors.wysSiodelka && "border-red-500"} custom-input`}/>
                        {errors.wysSiodelka && <p>{errors.wysSiodelka.message}</p>}
                    </div>

                    <div className="rozstawOsi input-box">
                        <label htmlFor="rozstawOsi" className="text-[1.2rem] text-white font-medium cursor-pointer">Rozstaw osi</label>
                        <input type="text" {...register("rozstawOsi")} id="rozstawOsi" name="rozstawOsi" className={`${errors.rozstawOsi && "border-red-500"} custom-input`}/>
                        {errors.rozstawOsi && <p>{errors.rozstawOsi.message}</p>}
                    </div>
                    
                    <div className="minPrzeswit input-box">
                        <label htmlFor="minPrzeswit" className="text-[1.2rem] text-white font-medium cursor-pointer">Min. Prześwit</label>
                        <input type="text" {...register("minPrzeswit")} id="minPrzeswit" name="minPrzeswit" className={`${errors.minPrzeswit && "border-red-500"} custom-input`}/>
                        {errors.minPrzeswit && <p>{errors.minPrzeswit.message}</p>}
                    </div>
                    
                    <div className="minPromien input-box">
                        <label htmlFor="minPromien" className="text-[1.2rem] text-white font-medium cursor-pointer">Min. Promień Skrętu</label>
                        <input type="text" {...register("minPromien")} id="minPromien" name="minPromien" className={`${errors.minPromien && "border-red-500"} custom-input`}/>
                        {errors.minPromien && <p>{errors.minPromien.message}</p>}
                    </div>

                    <div className="masaZobciazeniem input-box">
                        <label htmlFor="masaZobciazeniem" className="text-[1.2rem] text-white font-medium cursor-pointer">Masa z obciążeniem</label>
                        <input type="text" {...register("masaZobciazeniem")} id="masaZobciazeniem" name="masaZobciazeniem" className={`${errors.masaZobciazeniem && "border-red-500"} custom-input`}/>
                        {errors.masaZobciazeniem && <p>{errors.masaZobciazeniem.message}</p>}
                    </div>

                    <div className="pojemoscPaliwa input-box">
                        <label htmlFor="pojemoscPaliwa" className="text-[1.2rem] text-white font-medium cursor-pointer">Pojemność Zbiornika Paliwa</label>
                        <input type="text" {...register("pojemoscPaliwa")} id="pojemoscPaliwa" name="pojemoscPaliwa" className={`${errors.pojemoscPaliwa && "border-red-500"} custom-input`}/>
                        {errors.pojemoscPaliwa && <p>{errors.pojemoscPaliwa.message}</p>}
                    </div>

                    <div className="pojemnoscOleju input-box">
                        <label htmlFor="pojemnoscOleju" className="text-[1.2rem] text-white font-medium cursor-pointer">Pojemność Zbiornika Oleju</label>
                        <input type="text" {...register("pojemnoscOleju")} id="pojemnoscOleju" name="pojemnoscOleju" className={`${errors.pojemnoscOleju && "border-red-500"} custom-input`}/>
                        {errors.pojemnoscOleju && <p>{errors.pojemnoscOleju.message}</p>}
                    </div>
                </div>

                <div className="max-weight col-start-2 row-start-2 self-start">
                    <h3 className="text-slate-300 tracking-wider mb-3 text-[1.3rem] font-bold">Obciążenie maksymalne</h3>

                    <div className="bagaznikPrzedni input-box">
                        <label htmlFor="bagaznikPrzedni" className="text-[1.2rem] text-white font-medium cursor-pointer">Bagażnik przedni</label>
                        <input type="text" {...register("bagaznikPrzedni")} id="bagaznikPrzedni" name="bagaznikPrzedni" className={`${errors.bagaznikPrzedni && "border-red-500"} custom-input`}/>
                        {errors.bagaznikPrzedni && <p>{errors.bagaznikPrzedni.message}</p>}
                    </div>

                    <div className="bagaznikTylny input-box">
                        <label htmlFor="bagaznikTylny" className="text-[1.2rem] text-white font-medium cursor-pointer">Bagażnik tylny</label>
                        <input type="text" {...register("bagaznikTylny")} id="bagaznikTylny" name="bagaznikTylny" className={`${errors.bagaznikTylny && "border-red-500"} custom-input`}/>
                        {errors.bagaznikTylny && <p>{errors.bagaznikTylny.message}</p>}
                    </div>
                </div>

                <div className="additional-info row-start-2 col-start-2 self-end">
                    <h3 className="text-slate-300 tracking-wider mb-3 text-[1.3rem] font-bold">Informacje dodatkowe</h3>
                    
                    <div className="ukladKier input-box">
                        <label htmlFor="ukladKier" className="text-[1.2rem] text-white font-medium cursor-pointer">Układ kierowniczy</label>
                        <input type="text" {...register("ukladKier")} id="ukladKier" name="ukladKier" className={`${errors.ukladKier && "border-red-500"} custom-input`}/>
                        {errors.ukladKier && <p>{errors.ukladKier.message}</p>}
                    </div>

                    <div className="frontMountedWinch input-box">
                        <label htmlFor="frontMountedWinch" className="text-[1.2rem] text-white font-medium cursor-pointer">Front Mounted Winch</label>
                        <input type="text" {...register("frontMountedWinch")} id="frontMountedWinch" name="frontMountedWinch" className={`${errors.frontMountedWinch && "border-red-500"} custom-input`}/>
                        {errors.frontMountedWinch && <p>{errors.frontMountedWinch.message}</p>}
                    </div>

                    <div className="trailerHitch input-box">
                        <label htmlFor="trailerHitch" className="text-[1.2rem] text-white font-medium cursor-pointer">Trailer hitch</label>
                        <input type="text" {...register("trailerHitch")} id="trailerHitch" name="trailerHitch" className={`${errors.trailerHitch && "border-red-500"} custom-input`}/>
                        {errors.trailerHitch && <p>{errors.trailerHitch.message}</p>}
                    </div>

                    <div className="seleFeatures input-box">
                        <label htmlFor="seleFeatures" className="text-[1.2rem] text-white font-medium cursor-pointer">Sele features</label>
                        <input type="text" {...register("seleFeatures")} id="seleFeatures" name="seleFeatures" className={`${errors.seleFeatures && "border-red-500"} custom-input`}/>
                        {errors.seleFeatures && <p>{errors.seleFeatures.message}</p>}
                    </div>

                    <div className="towingCapacity input-box">
                        <label htmlFor="towingCapacity" className="text-[1.2rem] text-white font-medium cursor-pointer">Towing Capacity</label>
                        <input type="text" {...register("towingCapacity")} id="towingCapacity" name="towingCapacity" className={`${errors.towingCapacity && "border-red-500"} custom-input`}/>
                        {errors.towingCapacity && <p>{errors.towingCapacity.message}</p>}
                    </div>
                </div>
            </div>
            {/* <div className="images-container flex justify-center items-center mt-10">
                <UploadWidget uwConfig={{
                    multiple: true,
                    cloudName: 'damiano',
                    uploadPreset: 'yamaha',
                    folder: 'yamaha atvs',
                }}
                setState={setImages}
                />
                
            </div> */}
            <div className="flex flex-col md:flex-row mx-auto justify-center gap-6 max-w-[1200px] mt-10">
                    {images.map((image: string, index: number) => {
                        return <div key={index} className="md:w-[250px] mx-auto">
                            <img src={image} alt="atv image" className="w-full h-full object-cover rounded-md" />
                        </div>
                    })}
                </div>
            <button type="submit" disabled={isSubmitting} className={`${isSubmitting ? "bg-slate-400 opacity-50" : "bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:scale-105 duration-300"} w-full mt-10 py-2 text-white text-[1.4rem] font-semibold tracking-wider`}>Update</button>
        </form>
        </div>
    </section>
  )
}

export default AtvUpdatePage
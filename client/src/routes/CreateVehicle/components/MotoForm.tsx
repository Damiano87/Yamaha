import { GiGears } from "react-icons/gi";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { createMotoSchema, type createMoto } from "@/schemas/createMotoSchema";
import axios from '../../../api/apiRequest.ts';
import UploadWidget from "@/components/uploadWidget.tsx";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';



const MotoForm = () => {
    const [images, setImages] = useState([]);
      const [selectedOption, setSelectedOption] = useState("option1");
      const [selectedLicense, setSelectedLicense] = useState("A");

    const {register, handleSubmit, reset, formState: {errors, isSubmitting}} = useForm<createMoto>({
        resolver: zodResolver(createMotoSchema),
        mode: "onChange",
    })
    
    // Funkcja obsługująca zmianę wyboru
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value); // Zmienia stan na wybraną opcję
  };

  // Funkcja obsługująca zmianę wyboru
  const handleLicenseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedLicense(event.target.value); // Zmienia stan na wybraną opcję
  };


    const onSubmit = async (data: createMoto) => {
        try {
            const response = await axios.post("/vehicles/moto", {...data, images, license: selectedLicense})

            console.log(response.data)
            setImages([]);
            toast.success('Successfully created!');
            reset();
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong');
    };
}


  return (
    <div>
        <Toaster />
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="max-w-[45rem]">
                <div className="name input-box">
                   <label htmlFor="name" className="text-[1.2rem] text-white font-medium cursor-pointer">Nazwa produktu</label>
                   <input type="text" {...register("name")} id="name" name="name" className={`${errors.name && "border-red-500"} custom-input`}/>
                    {errors.name && <p>{errors.name.message}</p>}

            </div>

            <div className="price input-box">
                   <label htmlFor="price" className="text-[1.2rem] text-white font-medium cursor-pointer">Cena</label>
                   <input type="number" {...register("price", {valueAsNumber: true})}  id="price" name="price" className={`${errors.price && "border-red-500"} custom-input`}/>    
                    {errors.price && <p>{errors.price.message === "Expected number, received nan" ? "To pole jest wymagane" : errors.price.message}</p>}

            </div>

            <div className="priceInfo input-box">
                   <label htmlFor="priceInfo" className="text-[1.2rem] text-white font-medium cursor-pointer">Informacja o cenach</label>
                   <input type="text" {...register("priceInfo")} id="priceInfo" name="priceInfo" className={`${errors.priceInfo && "border-red-500"} custom-input`}/>
                   {errors.priceInfo && <p>{errors.priceInfo.message}</p>}
            </div>

            

            <div className="desc input-box">
                   <label htmlFor="desc" className="text-[1.2rem] text-white font-medium cursor-pointer">Opis</label>
                   <textarea rows={5} maxLength={400} {...register("desc")} id="desc" name="desc" className={`${errors.desc && "border-red-500"} custom-input`}/>
                   {errors.desc && <p>{errors.desc.message}</p>}
            </div>

            

            <div className="descTitle input-box">
                   <label htmlFor="descTitle" className="text-[1.2rem] text-white font-medium cursor-pointer">Tytuł opisu podrzędnego</label>
                   <input type="text" {...register("descTitle")} id="descTitle" name="descTitle" className={`${errors.descTitle && "border-red-500"} custom-input`}/>
                   {errors.descTitle && <p>{errors.descTitle.message}</p>}
            </div>

            <div className="secondaryDesc input-box">
                   <label htmlFor="secondaryDesc" className="text-[1.2rem] text-white font-medium cursor-pointer">Opis podrzędny</label>
                   <textarea rows={5} {...register("secondaryDesc")} id="secondaryDesc" name="secondaryDesc" className={`${errors.secondaryDesc && "border-red-500"} custom-input`}/>
                   {errors.secondaryDesc && <p>{errors.secondaryDesc.message}</p>}
            </div>

            <div className="klauzula input-box">
                   <label htmlFor="klauzula" className="text-[1.2rem] text-white font-medium cursor-pointer">Klauzula</label>
                   <textarea rows={5} {...register("klauzula")} id="klauzula" name="klauzula" className={`${errors.klauzula && "border-red-500"} custom-input`}/>
                   {errors.klauzula && <p>{errors.klauzula.message}</p>}
            </div>

            <div className="maxPower input-box">
                   <label htmlFor="maxPower" className="text-[1.2rem] text-white font-medium cursor-pointer">Maksymalna moc</label>
                   <input type="number" {...register("maxPower", {valueAsNumber: true})} id="maxPower" name="maxPower" className={`${errors.maxPower && "border-red-500"} custom-input`}/>
                   {errors.maxPower && <p>{errors.maxPower.message}</p>}
            </div>

            <div className="version35kW">
                   <label htmlFor="version35kW" className="block mb-4 text-[1.2rem] text-white font-medium cursor-pointer">Wersja 35kW</label>
                    <input type="checkbox" id="version35kW" {...register("version35kW")} className="w-7 h-7 border-gray-300 bg-white accent-orange-500 focus:ring-yellow-500 dark:focus:ring-yellow-600 transition-all" />
            </div>

            {/* license container */}
            <h4 className="text-white text-[1.3rem] mt-8 mb-4">Wybierz kategorię:</h4>
            <div className="license flex gap-12">
                   <div className="radio1"> 
                    <input
                        id="A"
                        type="radio"
                        value="A"
                        checked={selectedLicense === "A"}
                        onChange={handleLicenseChange}
                        className="mr-2 cursor-pointer accent-orange-300"
                    />
                    <label htmlFor="A" className="text-[1.2rem] text-white font-medium cursor-pointer">A</label>
                </div>
                <div className="radio2"> 
                    <input
                        id="A1"
                        type="radio"
                        value="A1"
                        checked={selectedLicense === "A1"}
                        onChange={handleLicenseChange}
                        className="mr-2 cursor-pointer accent-orange-300"
                    />
                    <label htmlFor="A1" className="text-[1.2rem] text-white font-medium cursor-pointer">A1</label>
                </div>
                <div className="radio3"> 
                    <input
                        id="A2"
                        type="radio"
                        value="A2"
                        checked={selectedLicense === "A2"}
                        onChange={handleLicenseChange}
                        className="mr-2 cursor-pointer accent-orange-300"
                    />
                    <label htmlFor="A2" className="text-[1.2rem] text-white font-medium cursor-pointer">A2</label>
                </div>
            </div>

            
            {/* amount of colors container */}
            <div className="border p-4 mt-8 sm:w-[400px]">
                <div className="colors space-y-3">
                <h3 className="text-white text-[1.3rem]">Wybierz ilość kolorów:</h3>
                <div className="radio1"> 
                    <input
                        id="option1"
                        type="radio"
                        value="option1"
                        checked={selectedOption === "option1"} // Sprawdzamy, czy to wybrana opcja
                        onChange={handleOptionChange}
                        className="mr-3 cursor-pointer accent-orange-300"
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
                        className="mr-3 cursor-pointer accent-orange-300"
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
                        className="mr-3 cursor-pointer accent-orange-300"
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

            </div>


            {/* Dane techniczne */}
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

                    <div className="mocMaksymalna input-box">
                        <label htmlFor="mocMaksymalna" className="text-[1.2rem] text-white font-medium cursor-pointer">Moc maksymalna</label>
                        <input type="text" {...register("mocMaksymalna")} id="mocMaksymalna" name="mocMaksymalna" className={`${errors.mocMaksymalna && "border-red-500"} custom-input`}/>
                        {errors.mocMaksymalna && <p>{errors.mocMaksymalna.message}</p>}
                    </div>

                    <div className="maxMomentObrotowy input-box">
                        <label htmlFor="maxMomentObrotowy" className="text-[1.2rem] text-white font-medium cursor-pointer">Maks. moment obrotowy</label>
                        <input type="text" {...register("maxMomentObrotowy")} id="maxMomentObrotowy" name="maxMomentObrotowy" className={`${errors.maxMomentObrotowy && "border-red-500"} custom-input`}/>
                        {errors.maxMomentObrotowy && <p>{errors.maxMomentObrotowy.message}</p>}
                    </div>

                    <div className="ukladSmarowania input-box">
                        <label htmlFor="ukladSmarowania" className="text-[1.2rem] text-white font-medium cursor-pointer">Układ smarowania</label>
                        <input type="text" {...register("ukladSmarowania")} id="ukladSmarowania" name="ukladSmarowania" className={`${errors.ukladSmarowania && "border-red-500"} custom-input`}/>
                        {errors.ukladSmarowania && <p>{errors.ukladSmarowania.message}</p>}
                    </div>

                    <div className="typSprzegla input-box">
                        <label htmlFor="typSprzegla" className="text-[1.2rem] text-white font-medium cursor-pointer">Typ sprzęgła</label>
                        <input type="text" {...register("typSprzegla")} id="typSprzegla" name="typSprzegla" className={`${errors.ukladSmarowania && "border-red-500"} custom-input`}/>
                        {errors.typSprzegla && <p>{errors.typSprzegla.message}</p>}
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

                    <div className="spalanie input-box">
                        <label htmlFor="spalanie" className="text-[1.2rem] text-white font-medium cursor-pointer">Spalanie</label>
                        <input type="text" {...register("spalanie")} id="spalanie" name="spalanie" className={`${errors.spalanie && "border-red-500"} custom-input`}/>
                        {errors.spalanie && <p>{errors.spalanie.message}</p>}
                    </div>

                    <div className="emisjaCO2 input-box">
                        <label htmlFor="emisjaCO2" className="text-[1.2rem] text-white font-medium cursor-pointer">Emisja CO2</label>
                        <input type="text" {...register("emisjaCO2")} id="emisjaCO2" name="emisjaCO2" className={`${errors.emisjaCO2 && "border-red-500"} custom-input`}/>
                        {errors.emisjaCO2 && <p>{errors.emisjaCO2.message}</p>}
                    </div>

                    <div className="ukladZasilania input-box">
                        <label htmlFor="ukladZasilania" className="text-[1.2rem] text-white font-medium cursor-pointer">Układ zasilania</label>
                        <input type="text" {...register("ukladZasilania")} id="ukladZasilania" name="ukladZasilania" className={`${errors.ukladZasilania && "border-red-500"} custom-input`}/>
                        {errors.ukladZasilania && <p>{errors.ukladZasilania.message}</p>}
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
                            <div className="rama input-box">
                                <label htmlFor="rama" className="text-[1.2rem] text-white font-medium cursor-pointer">Rama</label>
                                <input type="text" {...register("rama")} id="rama" name="rama" className={`${errors.rama && "border-red-500"} custom-input`}/>
                                {errors.rama && <p>{errors.rama.message}</p>}
                            </div>

                            <div className="katWyprzGlowkiRamy input-box">
                                <label htmlFor="katWyprzGlowkiRamy" className="text-[1.2rem] text-white font-medium cursor-pointer">Kąt wyprzedzenia główki ramy</label>
                                <input type="text" {...register("katWyprzGlowkiRamy")} id="katWyprzGlowkiRamy" name="katWyprzGlowkiRamy" className={`${errors.katWyprzGlowkiRamy && "border-red-500"} custom-input`}/>
                                {errors.katWyprzGlowkiRamy && <p>{errors.katWyprzGlowkiRamy.message}</p>}
                            </div>

                            <div className="wyprzedzenie input-box">
                                <label htmlFor="wyprzedzenie" className="text-[1.2rem] text-white font-medium cursor-pointer">Wyprzedzenie</label>
                                <input type="text" {...register("wyprzedzenie")} id="wyprzedzenie" name="wyprzedzenie" className={`${errors.wyprzedzenie && "border-red-500"} custom-input`}/>
                                {errors.wyprzedzenie && <p>{errors.wyprzedzenie.message}</p>}
                            </div>

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

                            <div className="skokPrzedniegoZawieszenia input-box">
                                <label htmlFor="skokPrzedniegoZawieszenia" className="text-[1.2rem] text-white font-medium cursor-pointer">Skok przedniego zawieszenia</label>
                                <input type="text" {...register("skokPrzedniegoZawieszenia")} id="skokPrzedniegoZawieszenia" name="skokPrzedniegoZawieszenia" className={`${errors.skokPrzedniegoZawieszenia && "border-red-500"} custom-input`}/>
                                {errors.skokPrzedniegoZawieszenia && <p>{errors.skokPrzedniegoZawieszenia.message}</p>}
                            </div>

                            <div className="skokTylnegoZawieszenia input-box">
                                <label htmlFor="skokTylnegoZawieszenia" className="text-[1.2rem] text-white font-medium cursor-pointer">Skok tylnego zawieszenia</label>
                                <input type="text" {...register("skokTylnegoZawieszenia")} id="skokTylnegoZawieszenia" name="skokTylnegoZawieszenia" className={`${errors.skokTylnegoZawieszenia && "border-red-500"} custom-input`}/>
                                {errors.skokTylnegoZawieszenia && <p>{errors.skokTylnegoZawieszenia.message}</p>}
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

                            <div className="oponaPrzednia input-box">
                                <label htmlFor="oponaPrzednia" className="text-[1.2rem] text-white font-medium cursor-pointer">Opona przednia</label>
                                <input type="text" {...register("oponaPrzednia")} id="oponaPrzednia" name="oponaPrzednia" className={`${errors.oponaPrzednia && "border-red-500"} custom-input`}/>
                                {errors.oponaPrzednia && <p>{errors.oponaPrzednia.message}</p>}
                            </div>

                            <div className="oponaTylna input-box">
                                <label htmlFor="oponaTylna" className="text-[1.2rem] text-white font-medium cursor-pointer">Opona tylna</label>
                                <input type="text" {...register("oponaTylna")} id="oponaTylna" name="oponaTylna" className={`${errors.oponaTylna && "border-red-500"} custom-input`}/>
                                {errors.oponaTylna && <p>{errors.oponaTylna.message}</p>}
                            </div>
                        </div>
                    <div className="flex justify-center items-center">
                        <GiGears color="white" className="w-[100px] h-[100px] mt-10 md:w-[170px] md:h-[170px] md:mt-0"/>
                    </div>
                    </div>
                </div> 
            </div>

            <div className="dimensions mt-6">
                    <h3 className="text-slate-300 tracking-wider mb-3 text-[1.3rem] font-bold">Wymiary</h3>

                    <div className="sm:flex gap-6">
                        <div className="flex-1">
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

                            <div className="rozstawKol input-box">
                                <label htmlFor="rozstawKol" className="text-[1.2rem] text-white font-medium cursor-pointer">Rozstaw kół</label>
                                <input type="text" {...register("rozstawKol")} id="rozstawKol" name="rozstawKol" className={`${errors.rozstawKol && "border-red-500"} custom-input`}/>
                                {errors.rozstawKol && <p>{errors.rozstawKol.message}</p>}
                            </div>
                        </div>
                    
                        <div className="flex-1">
                            <div className="minPrzeswit input-box">
                                <label htmlFor="minPrzeswit" className="text-[1.2rem] text-white font-medium cursor-pointer">Min. Prześwit</label>
                                <input type="text" {...register("minPrzeswit")} id="minPrzeswit" name="minPrzeswit" className={`${errors.minPrzeswit && "border-red-500"} custom-input`}/>
                                {errors.minPrzeswit && <p>{errors.minPrzeswit.message}</p>}
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
                    </div>
                </div>

            <div className="images-container flex justify-center items-center mt-10">
                <UploadWidget uwConfig={{
                    multiple: true,
                    cloudName: 'damiano',
                    uploadPreset: 'yamaha',
                    folder: 'yamaha motos',
                }}
                setState={setImages}
                />
                
            </div>
            <div className="flex flex-col md:flex-row mx-auto justify-center gap-6 max-w-[1200px] mt-10">
                    {images.map((image: string, index: number) => {
                        return <div key={index} className="md:w-[250px] mx-auto">
                            <img src={image} alt="atv image" className="w-full h-full object-cover rounded-md" />
                        </div>
                    })}
                </div>
            <button type="submit" disabled={isSubmitting} className={`${isSubmitting ? "bg-slate-400 opacity-50" : "bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:scale-105 duration-300"} w-full mt-10 py-2 text-white text-[1.4rem] font-semibold tracking-wider`}>Create</button>
        </form>
    </div>
  )
}

export default MotoForm
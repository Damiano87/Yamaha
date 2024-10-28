import { useState, useEffect, type FormEvent } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { type DualRangeSliderProps } from "./DualRangeSlider";
import { useSearchParams } from "react-router-dom";

const FormForSlider = ({minVal, maxVal, setMinVal, setMaxVal}: DualRangeSliderProps) => {
    const [localMinVal, setLocalMinVal] = useState(minVal.toString());
    const [localMaxVal, setLocalMaxVal] = useState(maxVal.toString());
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setLocalMinVal(minVal.toString());
        setLocalMaxVal(maxVal.toString());
    }, [minVal, maxVal]);


    const handleMinValchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalMinVal(e.target.value);
    }

    const handleMaxValchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalMaxVal(e.target.value);
    }

    // submit form
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Sprawdzanie czy wartości są liczbami
        const minNumber = Number(localMinVal);
        const maxNumber = Number(localMaxVal) < 12 ? 12 : Number(localMaxVal);
        
        // Walidacja i korekta wartości
        const validatedMinVal = isNaN(minNumber) || minNumber > 146 ? 11 : Math.max(11, minNumber);
        const validatedMaxVal = isNaN(maxNumber) || minNumber >= maxNumber ? 147 : Math.min(147, maxNumber);
        
        // Aktualizacja głównych wartości po walidacji
        setMinVal(validatedMinVal);
        setMaxVal(validatedMaxVal);
        
        // Aktualizacja lokalnych wartości
        setLocalMinVal(validatedMinVal.toString());
        setLocalMaxVal(validatedMaxVal.toString());

        // send values to url as query params
        const params = new URLSearchParams(searchParams);
        params.set("motorcyclePower", `${validatedMinVal} to ${validatedMaxVal}`)
        setSearchParams(params)
    }

    return (
        <form onSubmit={handleSubmit} className="mt-2 flex items-center gap-3">
            <output className="flex items-center">
                <div className="relative">
                    <input
                        type="text"
                        value={localMinVal}
                        onChange={handleMinValchange}
                        className="w-full rounded-md border-2 py-2 pl-3 pr-9"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2">kW</div>
                </div>

                <span className="mx-2"> - </span>
                <div className="relative">
                    <input
                        type="text"
                        value={localMaxVal}
                        onChange={handleMaxValchange}
                        className="w-full rounded-md border-2 py-2 pl-3 pr-9"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2">kW</div>
                </div>
            </output>
            <button
                type="submit"
                className="flex items-center justify-center rounded-full bg-slate-200 p-3"
            >
                <FaArrowRight />
            </button>
        </form>
    )
}

export default FormForSlider
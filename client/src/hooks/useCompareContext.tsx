import { CompareContext } from "@/context/compareContext";
import { useContext } from "react";


export const useCompareContext = () => {
    const context = useContext(CompareContext);

    if (!context) {
        throw new Error("CompareContext must be used within CompareContextProvider")
    }
    
    return context
}
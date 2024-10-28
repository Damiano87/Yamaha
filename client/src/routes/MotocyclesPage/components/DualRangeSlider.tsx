import { useState, useEffect, useCallback } from 'react';

export type DualRangeSliderProps = {
    minVal: number;
    maxVal: number;
    setMinVal: React.Dispatch<React.SetStateAction<number>>;
    setMaxVal: React.Dispatch<React.SetStateAction<number>>;
}


const DualRangeSlider = ({minVal, maxVal, setMinVal, setMaxVal}: DualRangeSliderProps) => {
  
  
  // Obliczanie szerokości wypełnienia między suwakami
  const getPercent = useCallback(
    (value: number) => Math.round(((value - 11) / (147 - 11)) * 100),
    []
  );

  // Szerokość wypełnienia
  const [fillWidth, setFillWidth] = useState(getPercent(maxVal) - getPercent(minVal));

  // Aktualizacja wypełnienia po zmianie wartości
  useEffect(() => {
    const newFillWidth = getPercent(maxVal) - getPercent(minVal);
    setFillWidth(newFillWidth);
  }, [minVal, maxVal, getPercent]);

  return (
    <div className="w-full max-w-xl mx-auto py-3">
      <div className="relative h-2">
        {/* Tło suwaka */}
        <div className="absolute w-full h-1 bg-gray-200 rounded top-1/2 transform -translate-y-1/2"></div>
        
        {/* Wypełnienie między suwakami */}
        <div
          className="absolute h-1 bg-orange-500 rounded top-1/2 transform -translate-y-1/2"
          style={{
            left: `${getPercent(minVal)}%`,
            width: `${fillWidth}%`
          }}
        ></div>
        
        {/* Lewy suwak */}
        <input
          type="range"
          min={11}
          max={147}
          value={minVal}
          step={1}
          onChange={(e) => {
            const value = Math.min(Number(e.target.value), maxVal - 1);
            setMinVal(value);
          }}
          className="absolute w-full h-1 appearance-none pointer-events-none bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-orange-500 [&::-webkit-slider-thumb]:cursor-pointer hover:[&::-webkit-slider-thumb]:bg-orange-600"
        />
        
        {/* Prawy suwak */}
        <input
          type="range"
          min={11}
          max={147}
          value={maxVal}
          step={1}
          onChange={(e) => {
            const value = Math.max(Number(e.target.value), minVal + 1);
            setMaxVal(value);
          }}
          className="absolute w-full h-1 appearance-none pointer-events-none bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-orange-500 [&::-webkit-slider-thumb]:cursor-pointer hover:[&::-webkit-slider-thumb]:bg-orange-600"
        />
      </div>
      
      {/* Wyświetlanie wartości */}
      <div className="flex justify-between mt-4">
        <span className="px-2 py-1 bg-gray-100 rounded">
          Min: {minVal}
        </span>
        <span className="px-2 py-1 bg-gray-100 rounded">
          Max: {maxVal}
        </span>
      </div>
    </div>
  );
};

export default DualRangeSlider;
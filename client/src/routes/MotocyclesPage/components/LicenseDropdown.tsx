import { forwardRef, ForwardedRef } from 'react';
import { IoIosClose } from "react-icons/io";
import { useSearchParams } from 'react-router-dom';



const LicenseDropdown = forwardRef<HTMLDivElement>((props, ref: ForwardedRef<HTMLDivElement>) => {
  
  const [searchParams, setSearchParams] = useSearchParams();

  // Odczytywanie stanu z URL
  const getCheckboxState = (key: string) => searchParams.get(key) === 'true';

  const checkboxes = {
    a: getCheckboxState('a'),
    a1: getCheckboxState('a1'),
    a2: getCheckboxState('a2'),
  };
  

  // Aktualizacja pojedynczego checkboxa
  const handleChange = (key: string, value: boolean) => {
    const newParams = new URLSearchParams(searchParams);

    if (value) {
      newParams.set(key, 'true');
      
    } else {
      newParams.delete(key);
      // newParams.delete('all');
    }
    
    setSearchParams(newParams);
  };


  // Funkcja do usuwania wszystkich checkboxów
  const clearAllCheckboxes = () => {
    const params = ['a', 'a1', 'a2'];
    params.forEach(param => searchParams.delete(param))

    setSearchParams(searchParams);
  };


  // Funkcja do zaznaczania wszystkich checkboxów
  const selectAllCheckboxes = () => {
    const paramNames = ['a', 'a1', 'a2'];
    const selectedParams = paramNames.filter(name => searchParams.has(name));
    
    const newParams = new URLSearchParams(searchParams);
    

    if (selectedParams.length === 3) {
      clearAllCheckboxes()

    } else {
      ['a', 'a1', 'a2'].forEach(key => {
        newParams.set(key, 'true');
      });

      setSearchParams(newParams);
    }

    
  };

  // Funkcja sprawdzająca czy wszystkie checkboxy są zaznaczone
  const getAllCheckboxes = () => {
    return ['a', 'a1', 'a2'].every(key => getCheckboxState(key) === true)
  }


  // styles
  const checkboxStyle = "h-5 w-5 rounded border-2 border-gray-300  appearance-none checked:bg-black checked:border-transparent relative cursor-pointer transition-all duration-200 ease-in-out" 
  const checkmarkStyle = "absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 top-[45%] left-1/2 flex items-center justify-center text-white pointer-events-none";
  const label = "flex items-center p-2 space-x-2 cursor-pointer hover:bg-slate-100";

  // Destructured checkboxes for easier access
  const {a, a1, a2} = checkboxes;

  return (
    <div 
      ref={ref} 
      {...props} 
      className="absolute z-50 mt-3 w-full rounded-md bg-white px-2  shadow-md"
    >
      {/* Checkbox "Zaznacz wszystko" */}
      <label className={`${label} border-b-2 hover:bg-transparent`}>
        <div className="relative">
          <input
            type="checkbox"
            checked={getAllCheckboxes()}
            onChange={selectAllCheckboxes}
            className={checkboxStyle}
          />
          
            {getAllCheckboxes() && (
              <svg className={checkmarkStyle} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          
        </div>
        <span className='mb-1 text-[.8rem]'>Zaznacz wszystko</span>
      </label>

      {/* Checkbox "A" */}
      <label className={label}>
        <div className="relative">
          <input
            type="checkbox"
            checked={checkboxes.a}
            onChange={(e) => handleChange('a', e.target.checked)}
            className={checkboxStyle}
          />
          
            {checkboxes.a && (
              <svg className={checkmarkStyle} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          
        </div>
        <span className='mb-1 text-[.8rem]'>A</span>
      </label>

      {/* Checkbox "A1" */}
      <label className={label}>
        <div className="relative">
          <input
            type="checkbox"
            checked={checkboxes.a1}
            onChange={(e) => handleChange('a1', e.target.checked)}
            className={checkboxStyle}
          />
          
            {checkboxes.a1 && (
              <svg className={checkmarkStyle} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          
        </div>
        <span className='mb-1 text-[.8rem]'>A1</span>
      </label>

      {/* Checkbox "A2" */}
      <label className={label}>
        <div className="relative">
          <input
            type="checkbox"
            checked={checkboxes.a2}
            onChange={(e) => handleChange('a2', e.target.checked)}
            className={checkboxStyle}
          />
          
            {checkboxes.a2 && (
              <svg className={checkmarkStyle} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          
        </div>
        <span className='mb-1 text-[.8rem]'>A2</span>
      </label>
      {/* Clear all checkboxes */}
      {(a || a1 || a2) && <div className='clear-all border-t-2 py-2'>
            <button 
              className='flex items-center w-full'
              onClick={clearAllCheckboxes}
              >
              <IoIosClose size={33}/>
              <span className='mb-[2px]'>Wyczyść wszystko</span>
              </button>
      </div>}
    </div>
  );
});

export default LicenseDropdown;






// const handleSelectAll = (checked: boolean) => {
//     setCheckboxes({
//       all: checked,
//       a: checked,
//       a1: checked,
//       a2: checked,
//     });
//   };

//   const handleSingleCheck = (name: keyof typeof checkboxes, checked: boolean) => {
//     const newCheckboxes = {
//       ...checkboxes,
//       [name]: checked,
//     };
    
    
//     const allOthersChecked = ['a', 'a1', 'a2'].every(key => newCheckboxes[key as keyof typeof checkboxes]);
//     newCheckboxes.all = allOthersChecked;

    
//     if (!checked && name !== 'all') {
//       newCheckboxes.all = false;
//     }

//     setCheckboxes(newCheckboxes);
//   };

//   const clearAllCheckboxes = () => {
//   setCheckboxes({
//     all: false,
//     a: false,
//     a1: false,
//     a2: false,
//   });
// };
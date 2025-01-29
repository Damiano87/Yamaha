import { createContext, useEffect, useState } from "react";

// Create a context to manage the script loading state
// @ts-expect-error abc
const CloudinaryScriptContext = createContext();

// @ts-expect-error abc
function UploadWidget({ uwConfig, setState }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Check if the script is already loaded
    if (!loaded) {
      const uwScript = document.getElementById("uw");
      if (!uwScript) {
        // If not loaded, create and load the script
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.setAttribute("id", "uw");
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
      } else {
        // If already loaded, update the state
        setLoaded(true);
      }
    }
  }, [loaded]);
  
  const initializeCloudinaryWidget = () => {
    
    if (loaded) {
      // @ts-expect-error abc
      const myWidget = window.cloudinary.createUploadWidget(
        
        uwConfig,
        // @ts-expect-error abc
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            setState((prev: string) => [...prev, result.info.secure_url]
            )
        }}
      );
      // @ts-expect-error abc
      document.getElementById("upload_widget").addEventListener(
        "click",
        function () {
          myWidget.open();
        },
        false
      );
    }
  };

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <button
      type="button"
        id="upload_widget"
        className="text-white md:text-[1.5rem] bg-orange-500 md:w-1/2 hover:bg-orange-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={initializeCloudinaryWidget}
      >
        Dodaj zdjęcia
      </button>
    </CloudinaryScriptContext.Provider>
  );
}

export default UploadWidget;
export { CloudinaryScriptContext };

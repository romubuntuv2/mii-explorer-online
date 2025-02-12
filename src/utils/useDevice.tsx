import { useEffect, useState } from "react";

const useDeviceType = () => {
  const [isComputer, setIsComputer] = useState(true);

  useEffect(() => {
    const updateDeviceType = () => {
      const width = window.innerWidth;

    if (width < 1200) {
        setIsComputer(false);
      } else {
        setIsComputer(true);
      }
    };

    // Vérification initiale
    updateDeviceType();

    // Écoute des changements de taille d'écran
    window.addEventListener("resize", updateDeviceType);

    return () => {
      window.removeEventListener("resize", updateDeviceType);
    };
  }, []);

  return {isComputer};
};

export default useDeviceType;

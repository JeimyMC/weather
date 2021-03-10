import { useRef, useEffect, useState } from "react";
import Clouds from "vanta/dist/vanta.clouds.min";
import * as THREE from "three";

const useWelcomeScreen = () => {
  const myRefDiv = useRef(null);
  const [vanta, setVanta] = useState(0);

  useEffect(() => {
    if (!vanta) {
      setVanta(
        Clouds({
          THREE,
          el: myRefDiv.current,
        })
      );
    }
    return () => (vanta ? vanta.destroy() : null);
  }, [vanta]);
  return myRefDiv;
};

export default useWelcomeScreen;

import { useState } from "react";

const useCaillou = () => {
  const [caillou, setCaillou] = useState(0);
  const [displayText, setDisplayText] = useState(false);
  const [isInactive, setIsInactive] = useState(false);
  const maxPas = 100000;

  const caillouClick = () => {
    setCaillou(caillou + 1);
    setDisplayText(true);
    setIsInactive(true);
    console.log("sInactiveve", isInactive);
  };

  const locationCaillou = (getLoc) => {
    getLoc();
    setIsInactive(false);
    setDisplayText(false);
  };
  return {
    caillou,
    setCaillou,
    displayText,
    maxPas,
    caillouClick,
    locationCaillou,
    isInactive,
    setIsInactive,
  };
};

export default useCaillou;
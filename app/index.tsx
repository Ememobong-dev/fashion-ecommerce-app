import StartingSplashScreen from "@/screens/splash-screens";
import ChooseProductSplash from "@/screens/splash-screens/choose-product-splash";
import { useState } from "react";

export default function Index() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  if(showSplashScreen){
    return <StartingSplashScreen onChange={() => setShowSplashScreen(false)} />
  }
  return <ChooseProductSplash />
}

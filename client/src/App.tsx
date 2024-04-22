import { useState } from "react";
import "./App.css";
import CurrentCast from "./components/CurrentCast";
import HourlyDaily from "./components/HourlyDaily";

function App() {
  const [location, setLocation] = useState("");
  return (
    <div className="bg-[#D1D8DC] flex h-dvh w-full}">
      <CurrentCast />
      <HourlyDaily location={location} setLocation={setLocation} />
    </div>
  );
}

export default App;

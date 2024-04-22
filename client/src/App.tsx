import "./App.css";
import CurrentCast from "./components/CurrentCast";
import HourlyDaily from "./components/HourlyDaily";

function App() {
  return (
    <div className="bg-[#D1D8DC] flex h-dvh w-full}">
      <CurrentCast />
      <HourlyDaily />
    </div>
  );
}

export default App;

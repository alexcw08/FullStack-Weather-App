import "./App.css";
import Header from "./components/Header";
import HourlyCast from "./components/HourlyCast";
function App() {
  return (
    <div className="bg-[#3B4664] px-[5%] flex flex-col gap-2 h-dvh w-full}">
      <Header />
      <HourlyCast />
    </div>
  );
}

export default App;

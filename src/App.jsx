import "./index.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Drivers from "./pages/Drivers";
import Calendar from "./pages/Calendar";
import About from "./pages/About";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold underline">F1 news project</h1>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;

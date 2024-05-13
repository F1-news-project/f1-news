import "./index.css" 
import Header from "./components/Header";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Header></Header>
      <h1 className="text-3xl font-bold underline">F1 news project</h1>
      <Homepage></Homepage>
    </>
  );
}

export default App;

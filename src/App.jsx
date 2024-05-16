import "./index.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Drivers from "./pages/Drivers";
import Calendar from "./pages/Calendar";
import About from "./pages/About";
import Error from "./pages/Error";
import CreateArticle from "./pages/CreateArticle";
import ArticleDetailView from "./pages/ArticleDetailView";
import EditArticle from "./pages/EditArticle";
import Logo from "/f1newslogo.jpg";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header Logo={Logo} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreateArticle />} />
        <Route path="/articles/:articleId" element={<ArticleDetailView />} />
        <Route path="/edit/:articleId" element={<EditArticle />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;

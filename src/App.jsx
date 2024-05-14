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

function App() {
  return (
    <>
      <Header />
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
    </>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import ArticleDetail from "./components/ArticleDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:articleId" element={<ArticleDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

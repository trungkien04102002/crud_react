import "./App.css";
import ClubFilter from "./components/Modal/ClubFilter";
import ClubsPage from "./components/Page/ClubsPage/ClubsPage";
import FixturesPage from "./components/Page/FixuresPage/FixuresPage";
import PageTest from "./components/Page/PageTest/PageTest";
import ResultsPage from "./components/Page/ResultsPage/ResultsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<PageTest />} />
        <Route path="/fixures" element={<FixturesPage />} />
        <Route path="/result" element={<ResultsPage/>} />
        <Route path="/club" element={<ClubsPage />} />
      </Routes>
    </>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import MatchListPage from "./Matchlist/list";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Matchlist" element={<MatchListPage />} />
    </Routes>
  );
}

export default App;

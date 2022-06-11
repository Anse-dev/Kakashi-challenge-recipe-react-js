import { Route, Routes } from "react-router";
import Aside from "./components/Aside/Aside/Aside";
import MetaInfo from "./components/MetaInfo/MetaInfo";
import HomePage from "./Layout/Home/HomePage";
import SinglePage from "./Layout/Single/SinglePage";
import logo from "./logo.png";

function App() {
  return (
    <div className="pages">
      <Aside />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/single-item" element={<SinglePage />} />
      </Routes>
      <MetaInfo />
    </div>
  );
}

export default App;

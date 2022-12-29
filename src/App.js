import { Route, Routes } from "react-router-dom";
import "./App.css";
import Loadmap from "./pages/Loadmap";
import Main from "./pages/Main";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/loadmap" element={<Loadmap />} />
      </Routes>
    </div>
  );
}

export default App;

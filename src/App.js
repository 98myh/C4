import { Route, Routes } from "react-router-dom";
import "./App.css";
import Kakao from "./components/Kakao";
import Main from "./pages/Main";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/kakao" element={<Kakao />} />
      </Routes>
    </div>
  );
}

export default App;

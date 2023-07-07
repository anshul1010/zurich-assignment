import "./App.css";
import Login from "./views/Login";
import Home from "./views/Home";
import { useLocalStorage } from "./hooks/useLocalStorage";

import { Route, Routes } from "react-router-dom";

function App() {
  const [user] = useLocalStorage("user", null);
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home user={user} />} />
      </Routes>
    </div>
  );
}

export default App;

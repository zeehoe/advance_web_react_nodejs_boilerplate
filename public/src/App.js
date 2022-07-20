import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/login"
import Register from "./pages/register"
import SetAvatar from "./pages/setAvatar"
import Home from "./pages/home"

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/home" element={<Home />}/>
      </Routes>
      </BrowserRouter>
    </>    
  );
}

export default App;

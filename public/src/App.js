import logo from './logo.svg';
import './App.css';
import Login from "./pages/login";
import Register from "./pages/register";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

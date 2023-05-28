import ReactDOM from "react-dom/client";
import Nav from "./components/navBar/Nav";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="login"  index element={<Login />} ></Route>
        <Route path="register" element={<Register />} ></Route>
    </Routes>
  </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

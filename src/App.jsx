import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Cart from "./Cart.jsx";
import "./App.css";
import Pulsa from "./Pulsa.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>} replace/>
        <Route path="/pulsa" element={<Pulsa/>} replace/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Cart from "./Cart.jsx";
import Contoh from "./Contoh.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/contoh" element={<Contoh/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

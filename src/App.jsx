import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Cart from "./Cart.jsx";
import "./App.css";
import Pulsa from "./Pulsa.jsx";
import Alert from "./component/Alert.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>} replace/>
        <Route path="/pulsa" element={<Pulsa/>} replace/>
        <Route path="/alert" element={<Alert/>} replace/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

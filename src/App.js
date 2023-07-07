import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Payment from "./screens/payment";
// import { CartProvider } from "./components/ContextReucer";

function App() {
  return (
    // <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/payment" element={<Payment/>}/>
        </Routes>
    </Router>
    // </CartProvider>
    
  );
}

export default App;

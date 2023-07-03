import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Login from "./screens/Login";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

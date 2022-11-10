import "./App.css";
import AddNum from "./components/AddNum";
import Todo from "./components/Todo";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Temperature from "./components/Temperature";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddNum" element={<AddNum />} />
          <Route path="/Todo" element={<Todo />} />
          <Route path="/Temperature" element={<Temperature />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

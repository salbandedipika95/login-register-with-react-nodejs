import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./component/login/Login";
import Register from "./component/register/Register";
import Nav from "./component/nav/Nav";
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

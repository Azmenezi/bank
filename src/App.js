import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Transactions } from "./pages/Transactions";
import { MyAccount } from "./pages/MyAccount";
import Users from "./pages/Users";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/transaction" element={<Transactions />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;

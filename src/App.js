import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Transactions } from "./pages/Transactions";
import { MyAccount } from "./pages/MyAccount";
import Users from "./pages/Users";
import UserContext from "./context/UserContext";
import { useEffect, useState } from "react";
import { checkToken } from "./API/auth";
import Main from "./pages/Main";
import Navbar from "./components/Navbar";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    setUser(checkToken());
    console.log(checkToken());
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/transaction" element={<Transactions />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;

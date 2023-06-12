import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Transactions } from "./pages/Transactions";
import { MyAccount } from "./pages/MyAccount";
import Users from "./pages/Users";
import UserContext from "./context/UseContext";
import { useEffect, useState } from "react";
import { checkToken } from "./API/auth";
import Main from "./pages/Main";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    setUser(checkToken());
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div>
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

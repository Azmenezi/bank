import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Transactions } from "./pages/Transactions";
import { MyAccount } from "./pages/MyAccount";
import Userslist from "./components/Userslist";
import UserContext from "./context/UserContext";
import { useEffect, useState } from "react";
import { checkToken } from "./API/auth";
import Main from "./pages/Main";
import UsersCard from "./components/UsersCard";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    setUser(checkToken());
    console.log(checkToken());
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
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/users" element={<Userslist />} />
          <Route path="/users-details/:userId" element={<UsersCard />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;

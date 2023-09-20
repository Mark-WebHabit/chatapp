import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// screens
import Main from "./views/Main";
import Register from "./views/Register";
import Login from "./views/Login";

// context
import AuthContextProvider from "./context/AuthContext";

const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/main" element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default App;

// src/App.jsx
import React from "react";
import "./index.css";
import LoginPage from "./custom/auth/pages/Login";
import SignupPage from "./custom/auth/pages/Signup";
import {BrowserRouter,Routes,Route} from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
};

export default App;

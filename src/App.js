import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";
const App = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <Fragment>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Routes>
              <Route path="/room/:roomId" element={<Chat />} />
              <Route path="/" element={<h1>Welcome</h1>} />
            </Routes>
          </div>
        </Fragment>
      )}

      {/* React Router - For Chat Screen */}
    </div>
  );
};

export default App;

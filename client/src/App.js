import React from "react";
import { Routes, Route } from "react-router-dom";
import PostContext from "./Context/PostContext";
import Home from "./components/Home";
import Plans from "./components/Plans";
import Panel from "./components/Panel";
import Login from "./components/Login";
import HomePanel from "./Layout/HomePanel";
import Detay from "./components/Detay";
import Ekle from "./components/Ekle";
import Error from "./components/Error";
const App = () => {
  return (
    <>
     <PostContext>
      <Routes>
       
          <Route path="/" element={<Home />} />

          <Route path="/plans" element={<Plans />} />
          <Route path="/login" element={<Login />} />

          <Route path="/panel" element={<Panel content={<HomePanel />} />} />
          <Route path="/ekle" element={<Panel content={<Ekle />} />} />
          <Route path="/panel/:id" element={<Panel content={<Detay />} />} />

        <Route path="*" element={<Error />} />
      </Routes>
      </PostContext>
    </>
  );
};

export default App;

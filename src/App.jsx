import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import NaoEncontrado from "./Pages/NaoEncontrado";
import DetalhesNoticia from "./Pages/DetalhesNoticia";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Home></Home>}></Route>
        <Route
          path="/noticias/:id"
          element={<DetalhesNoticia></DetalhesNoticia>}
        ></Route>
      </Route>
      <Route path="*" element={<NaoEncontrado></NaoEncontrado>}></Route>
    </Routes>
  );
}

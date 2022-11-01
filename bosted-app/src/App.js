import "./index.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";
import Properties from "./pages/properties";
import Map from "./pages/map";

export default function App() {
  return (
    <BrowserRouter basename="/creative-project-3/bosted-app/build/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="properties" element={<Properties />} />
          <Route path="map" element={<Map />} />
          <Route path="*" element={<Navigate to="/" />}  />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import About from "./pages/About/About";
import Components from "./pages/Components/Components";
import Home from "./pages/Home/Home";
import Page404 from "./pages/Page404/Page404";
import Body from "./components/Body/Body";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Body />}>
          <Route index element={<Home />} />
          <Route path="components" element={<Components />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

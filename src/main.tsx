import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";

import Root from "./layouts/Root";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Teams from "./pages/Teams";
import BlogList from "./pages/BlogList";
import CreateBlog from "./pages/CreateBlog";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Services from "./pages/Products";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/bloglist" element={<BlogList />} />
          <Route path="/createblog" element={<CreateBlog />} />
        </Route>
        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

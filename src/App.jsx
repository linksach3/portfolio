import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

// Components
import Header from "../app/frontend/src/components/Header";
import Hero from "../app/frontend/src/components/Hero";
import About from "../app/frontend/src/components/About";
import Skills from "../app/frontend/src/components/Skills";
import Experience from "../app/frontend/src/components/Experience";
import Projects from "../app/frontend/src/components/Projects";
import Contact from "../app/frontend/src/components/Contact";
import Footer from "../app/frontend/src/components/Footer";

const BACKEND_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Portfolio = () => {
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent my-8" />
        <About />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent my-8" />
        <Skills />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent my-8" />
        <Experience />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent my-8" />
        <Projects />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent my-8" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

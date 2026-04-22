// App.jsx
import React, { useContext, useEffect } from "react";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ScrollToTop from "./components/ScrollToTop";

// Import AOS for scroll animations
import AOS from 'aos';
import 'aos/dist/aos.css';

function MainApp() {
  const { dark } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    console.log("Current theme:", dark ? "dark" : "light");
  }, [dark]);

  if (dark === undefined) {
    return <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-white">Loading...</div>
    </div>;
  }

  return (
    <div className={dark ? "dark" : ""}>
      {/* Custom cursor - only shows on desktop */}
      <CustomCursor />
      
      {/* Scroll to top button and progress bar */}
      <ScrollToTop />
      
      {/* Main content */}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}

export default App;
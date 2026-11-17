import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Components/Home";
import About from "./Pages/About";
import Course from "./Pages/Course";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Apply from "./Pages/Apply";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-navy">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Course />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<Apply />} />
          <Route
            path="*"
            element={
              <section className="mx-auto max-w-6xl px-4 py-20 text-center">
                <h1 className="text-4xl font-bold">404</h1>
                <p className="mt-2">Page not found.</p>
              </section>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

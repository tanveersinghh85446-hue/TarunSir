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
import Mode from "./Pages/Mode";
import Online from "./Pages/Online";
import Offline from "./Pages/Offline";
import Hybrid from "./Pages/Hybrid";
import EnrollNow from "./Pages/EnrollNow";
import OnlineExam from "./Pages/OnlineExam";
import PayFee from "./Pages/PayFee";
import Result from "./Pages/Result";
import Franchise from "./Pages/Franchise";

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
          <Route path="/mode" element={<Mode />} />
          <Route path="/online" element={<Online />} />
          <Route path="/offline" element={<Offline />} />
          <Route path="/hybrid" element={<Hybrid />} />
          <Route path="/enroll-now" element={<EnrollNow />} />
          <Route path="/online-exam" element={<OnlineExam />} />
          <Route path="/pay-fee" element={<PayFee />} />
          <Route path="/result" element={<Result />} />
          <Route path="/franchise" element={<Franchise />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

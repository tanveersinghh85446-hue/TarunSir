import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteName = "ANITIO";

// Title and description of every page (used by Google and the browser tab)
const pages = {
  "/": {
    title: "ANITIO | IT & Skill Development Institute",
    description:
      "ANITIO Information Technology & Skill Development Institute offers career oriented short and long term courses. Registered by Ministry of Corporate Affairs & MSME. ISO 9001:2015 certified.",
  },
  "/about": {
    title: "About Us",
    description:
      "About ANITIO: our recognition, the director's message and key features of the institute.",
  },
  "/course": {
    title: "Courses",
    description:
      "Short and long term courses in IT, office & accounts, design, teacher training, fashion & beauty and more at ANITIO.",
  },
  "/mode": {
    title: "Learning Modes",
    description: "Choose how you want to learn at ANITIO: online, offline or hybrid.",
  },
  "/online": {
    title: "Online Mode",
    description:
      "Learn online with ANITIO: study material, assignments, regular tests and online examinations.",
  },
  "/offline": {
    title: "Offline Mode",
    description:
      "Learn at the institute with experienced faculty, a practical lab and flexible batch timings.",
  },
  "/hybrid": {
    title: "Hybrid Mode",
    description:
      "Hybrid mode at ANITIO combines classroom practice with online learning.",
  },
  "/enroll-now": {
    title: "Enroll Now",
    description:
      "Enroll at ANITIO in a few simple steps. Admission is conducted throughout the year.",
  },
  "/apply": {
    title: "Apply for Admission",
    description:
      "Apply for admission at ANITIO and read the rules and regulations.",
  },
  "/online-exam": {
    title: "Online Examination",
    description: "Instructions for the ANITIO online examination.",
  },
  "/pay-fee": {
    title: "Pay Fee",
    description: "Fee payment details, due dates and charges at ANITIO.",
  },
  "/result": {
    title: "Check Result",
    description: "Check your ANITIO examination result with your roll number.",
  },
  "/franchise": {
    title: "Franchise",
    description:
      "Interested in a franchise? Send an enquiry to become a part of the ANITIO family.",
  },
  "/blog": {
    title: "Blog",
    description: "News and articles from ANITIO.",
  },
  "/contact": {
    title: "Contact Us",
    description: "Contact ANITIO for admission and course enquiries.",
  },
  "/terms": {
    title: "Terms & Conditions",
    description: "Terms and conditions of ANITIO.",
  },
  "/privacy": {
    title: "Privacy Policy",
    description: "Privacy policy of ANITIO.",
  },
};

const notFound = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    // treat "/about/" and "/about" the same
    const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
    const page = pages[path] ?? notFound;

    document.title = path === "/" ? page.title : `${page.title} | ${siteName}`;

    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.name = "description";
      document.head.appendChild(tag);
    }
    tag.content = page.description;
  }, [pathname]);

  return null;
}

import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const logo = "AnitioLogo.png";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/course", label: "Courses" },
  { to: "/mode", label: "Learning Modes" },
  { to: "/franchise", label: "Franchise" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const studentLinks = [
  { to: "/enroll-now", label: "Enroll Now" },
  { to: "/apply", label: "Apply" },
  { to: "/online-exam", label: "Online Exam" },
  { to: "/pay-fee", label: "Pay Fee" },
  { to: "/result", label: "Result" },
];

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-gray-600 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          {logo ? (
            <div className="inline-block rounded bg-white p-2">
              <img
                src={logo}
                alt="ANITIO - Information Technology & Skill Development Institute"
                className="h-14 w-auto sm:h-16"
              />
            </div>
          ) : (
            <h3 className="text-xl font-bold text-gold">ANITIO</h3>
          )}
          <p className="mt-3 text-sm text-black font-semibold">
            Information Technology & Skill Development Institute. Registered by
            Ministry of Corporate Affairs & MSME. ISO 9001:2015 certified.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-3 text-xl font-bold text-black">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white font-semibold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Students */}
        <div>
          <h4 className="mb-3 text-xl font-bold text-black">For Students</h4>
          <ul className="space-y-2 text-sm">
            {studentLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white font-semibold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-3 text-xl font-bold text-black">Contact</h4>
          <ul className="space-y-3 font-semibold text-sm text-white">
            <li className="flex items-center gap-4">
              <FiPhone className="shrink-0 mt-4 text-xl text-white" />
              <span className="mt-2">+91 92894 38428</span>
            </li>
            <li className="flex items-center gap-4">
              <FiPhone className="shrink-0 mt-2 text-xl text-white" />
              <span>+91 99719 69158</span>
            </li>
            <li className="flex items-center gap-4">
              <FiMail className="shrink-0 mt-2 text-lg text-white" />
              <span className="break-all">anitioinstitute@gmail.com</span>
            </li>

            <li className="flex items-start gap-4">
              <FiMapPin className="mt-5 text-lg shrink-0 text-black" />
              <span>
                H-20, Sewak Park, Dwarka Mor Metro Station, Pillar No. 772,
                Uttam Nagar, New Delhi – 110059
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-white/70 sm:flex-row">
        <p>© {year} ANITIO. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/terms" className="hover:text-gold-light">
            Terms & Conditions
          </Link>
          <Link to="/privacy" className="hover:text-gold-light">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

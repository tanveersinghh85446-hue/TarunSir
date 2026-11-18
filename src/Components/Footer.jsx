import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const logo = "AnitioLogo.png"; // public/logo.png. Khali ("") rakhega toh text dikhega

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
    <footer className="bg-navy text-white">
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
          <p className="mt-3 text-sm text-white/80">
            Information Technology & Skill Development Institute. Registered by
            Ministry of Corporate Affairs & MSME. ISO 9001:2015 certified.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-3 text-lg font-semibold text-gold">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/80 hover:text-gold-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Students */}
        <div>
          <h4 className="mb-3 text-lg font-semibold text-gold">For Students</h4>
          <ul className="space-y-2 text-sm">
            {studentLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/80 hover:text-gold-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-3 text-lg font-semibold text-gold">Contact</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <FiMapPin className="mt-0.5 shrink-0 text-gold" />
              <span>Your address here</span>
            </li>
            <li className="flex items-center gap-2">
              <FiPhone className="shrink-0 text-gold" />
              <span>+91 00000 00000</span>
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="shrink-0 text-gold" />
              <span className="break-all">email@example.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/30">
        <p className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-white/70">
          © {year} ANITIO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

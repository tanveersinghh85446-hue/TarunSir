import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/course", label: "Courses" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
  { to: "/apply", label: "Apply" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold">
            Tarun <span className="text-gold">Sir</span>
          </h3>
          <p className="mt-3 text-sm text-white/80">
            Quality guidance and learning to help you reach your goals.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-3 text-lg font-semibold text-gold">Quick Links</h4>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {quickLinks.map((l) => (
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
          © {new Date().getFullYear()} Tarun Sir. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

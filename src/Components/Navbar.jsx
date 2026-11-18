import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const logo = "AnitioLogo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/course", label: "Courses" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block px-3 py-2 text-sm font-medium border-b-2 ${
      isActive
        ? "text-black border-black"
        : "text-black border-transparent hover:text-yellow-300"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center">
          {logo ? (
            <img
              src={logo}
              alt="ANITIO - Information Technology & Skill Development Institute"
              className="h-12 w-auto md:h-16 lg:h-20"
            />
          ) : (
            <span className="text-2xl font-bold tracking-wide text-yellow-300">
              ANITIO
            </span>
          )}
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-2 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to === "/"} className={linkClass}>
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/apply"
              className="ml-3 rounded bg-yellow-300 px-5 py-2 text-sm font-semibold text-black hover:bg-yellow-300"
            >
              Apply Now
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="text-white md:hidden"
        >
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gold/30 bg-navy-dark md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  className={linkClass}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="mt-3">
              <Link
                to="/apply"
                onClick={() => setOpen(false)}
                className="block rounded bg-gold px-5 py-2 text-center text-sm font-semibold text-navy hover:bg-gold-light"
              >
                Apply Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

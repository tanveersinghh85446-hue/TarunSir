import { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiHome,
  FiInfo,
  FiBookOpen,
  FiLayers,
  FiUsers,
  FiBriefcase,
  FiEdit3,
  FiPhone,
} from "react-icons/fi";

const logo = "AnitioLogo.png";

const menu = [
  { label: "Home", to: "/", icon: FiHome },
  { label: "About", to: "/about", icon: FiInfo },
  { label: "Courses", to: "/course", icon: FiBookOpen },
  {
    label: "Mode",
    icon: FiLayers,
    children: [
      { label: "All Modes", to: "/mode" },
      { label: "Online", to: "/online" },
      { label: "Offline", to: "/offline" },
      { label: "Hybrid", to: "/hybrid" },
    ],
  },
  {
    label: "Student Zone",
    icon: FiUsers,
    children: [
      { label: "Online Exam", to: "/online-exam" },
      { label: "Pay Fee", to: "/pay-fee" },
      { label: "Result", to: "/result" },
    ],
  },
  { label: "Franchise", to: "/franchise", icon: FiBriefcase },
  { label: "Blog", to: "/blog", icon: FiEdit3 },
  { label: "Contact", to: "/contact", icon: FiPhone },
];

// Desktop link style
const linkStyle = (active) =>
  `px-2.5 py-2 text-sm font-medium border-b-2 ${
    active
      ? "text-black  border-black"
      : "text-black  border-transparent hover:text-yellow-300"
  }`;

// Mobile drawer link styles
const drawerLink = (active) =>
  `flex items-center gap-3 rounded-md border-l-4 px-4 py-3 text-base font-medium ${
    active
      ? "border-black bg-white/10 text-black"
      : "border-transparent text-black hover:bg-white/10"
  }`;

const drawerSubLink = (active) =>
  `block rounded-md px-3 py-2 text-sm ${
    active
      ? "font-semibold text-black"
      : "text-black font-semibold hover:text-yellow-300"
  }`;

function Logo({ className }) {
  if (!logo) {
    return (
      <span className="text-2xl font-bold tracking-wide text-yellow-300">
        ANITIO
      </span>
    );
  }
  return (
    <img
      src={logo}
      alt="ANITIO - Information Technology & Skill Development Institute"
      className={className}
    />
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile drawer
  const [group, setGroup] = useState(null); // drawer: which group is expanded
  const [dropdown, setDropdown] = useState(null); // desktop: which dropdown is open
  const desktopMenuRef = useRef(null);
  const { pathname } = useLocation();

  const closeMenu = () => setOpen(false);

  // true when one of the dropdown pages is open
  const childActive = (item) =>
    item.children?.some((child) => child.to === pathname) ?? false;

  const openDrawer = () => {
    // expand the group of the current page, if any
    setGroup(menu.find((item) => childActive(item))?.label ?? null);
    setOpen(true);
  };

  // Drawer open: stop page scroll and close on Esc key
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Desktop dropdown open: close on outside click or Esc key
  useEffect(() => {
    if (!dropdown) return;

    const onClick = (e) => {
      if (!desktopMenuRef.current?.contains(e.target)) setDropdown(null);
    };
    const onKey = (e) => e.key === "Escape" && setDropdown(null);

    document.addEventListener("mousedown", onClick);
    window.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("mousedown", onClick);
      window.removeEventListener("keydown", onKey);
    };
  }, [dropdown]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto font-semi flex max-w-6xl items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center">
          <Logo className="h-12 w-auto sm:h-14 xl:h-20" />
        </Link>

        {/* Desktop menu */}
        <ul ref={desktopMenuRef} className="hidden items-center gap-1 lg:flex ">
          {menu.map((item) => (
            <li key={item.label} className="relative">
              {item.children ? (
                <>
                  <button
                    type="button"
                    aria-expanded={dropdown === item.label}
                    onClick={() =>
                      setDropdown(dropdown === item.label ? null : item.label)
                    }
                    className={`flex items-center gap-1 ${linkStyle(
                      childActive(item) || dropdown === item.label,
                    )}`}
                  >
                    {item.label}
                    <FiChevronDown
                      size={14}
                      className={dropdown === item.label ? "rotate-180" : ""}
                    />
                  </button>

                  {dropdown === item.label && (
                    <ul className="absolute left-0 top-full min-w-44 rounded border border-gray-200 bg-white py-1 shadow-lg">
                      {item.children.map((child) => (
                        <li key={child.to}>
                          <NavLink
                            to={child.to}
                            onClick={() => setDropdown(null)}
                            className={({ isActive }) =>
                              `block px-4 py-2 text-sm font-semibold text-black hover:text-white hover:bg-yellow-300 ${
                                isActive ? "font-semibold" : ""
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setDropdown(null)}
                  className={({ isActive }) => `block ${linkStyle(isActive)}`}
                >
                  {item.label}
                </NavLink>
              )}
            </li>
          ))}

          <li>
            <Link
              to="/enroll-now"
              onClick={() => setDropdown(null)}
              className="ml-2 rounded bg-yellow-300 px-5 py-2 text-sm font-semibold text-black hover:bg-yellow-300"
            >
              Enroll Now
            </Link>
          </li>
        </ul>

        {/* Hamburger (mobile) */}
        <button
          type="button"
          aria-label="Open menu"
          onClick={openDrawer}
          className="rounded border border-gray-300 p-2 text-black lg:hidden"
        >
          <FiMenu size={24} />
        </button>
      </nav>

      {/* Mobile side drawer */}
      {open && (
        <div className="lg:hidden">
          {/* Dark overlay */}
          <div
            onClick={closeMenu}
            aria-hidden="true"
            className="fixed inset-0 z-40 bg-black/60"
          />

          {/* Drawer */}
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
            className="fixed right-0 top-0 z-50 flex h-full w-[85%] max-w-sm flex-col bg-white shadow-2xl"
          >
            {/* Top: logo + close */}
            <div className="flex items-center justify-between bg-white px-4 py-3">
              <Link to="/" onClick={closeMenu}>
                <Logo className="h-12 w-auto" />
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={closeMenu}
                className="rounded-full border border-gray-300 p-2 text-navy"
              >
                <FiX size={22} />
              </button>
            </div>
            <div className="h-1 bg-black" />

            {/* Links */}
            <nav className="flex-1 overflow-y-auto px-3 py-4">
              <ul className="space-y-1">
                {menu.map((item) => {
                  const Icon = item.icon;
                  const expanded = group === item.label;

                  return (
                    <li key={item.label}>
                      {item.children ? (
                        <>
                          <button
                            type="button"
                            aria-expanded={expanded}
                            onClick={() =>
                              setGroup(expanded ? null : item.label)
                            }
                            className={`w-full justify-between ${drawerLink(
                              childActive(item),
                            )}`}
                          >
                            <span className="flex items-center gap-3">
                              <Icon size={18} />
                              {item.label}
                            </span>
                            <FiChevronDown
                              size={18}
                              className={expanded ? "rotate-180" : ""}
                            />
                          </button>

                          {expanded && (
                            <ul className="ml-7 mt-1 space-y-1 border-l border-white/20 pl-3">
                              {item.children.map((child) => (
                                <li key={child.to}>
                                  <NavLink
                                    to={child.to}
                                    onClick={closeMenu}
                                    className={({ isActive }) =>
                                      drawerSubLink(isActive)
                                    }
                                  >
                                    {child.label}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      ) : (
                        <NavLink
                          to={item.to}
                          end={item.to === "/"}
                          onClick={closeMenu}
                          className={({ isActive }) => drawerLink(isActive)}
                        >
                          <Icon size={18} />
                          {item.label}
                        </NavLink>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Bottom: button + recognition */}
            <div className="border-t border-white/10 p-4">
              <Link
                to="/enroll-now"
                onClick={closeMenu}
                className="block rounded bg-yellow-300 px-5 py-3 text-center font-semibold text-black"
              >
                Enroll Now
              </Link>
              <p className="mt-3 text-center text-xs text-white/60">
                Registered by Ministry of Corporate Affairs & MSME
                <br />
                ISO 9001:2015 certified
              </p>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}

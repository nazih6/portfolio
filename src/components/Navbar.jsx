import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const menuRef = useRef(null);
  const firstLinkRef = useRef(null);
  const lastScrollY = useRef(0);
  const location = useLocation();

  // Load saved theme on first load
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Enable dark mode + save in localStorage
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // Close menu when navigating
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close menu on Escape and focus first link when opening
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    if (menuOpen && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Click outside to close mobile menu
  useEffect(() => {
    const onClick = (e) => {
      if (!menuOpen) return;
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [menuOpen]);

  // Add shadow & hide navbar on scroll
  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 8);

      if (current > lastScrollY.current && current > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItem = (path, label, opts = {}) => {
    const active = location.pathname === path;
    const base = `px-3 py-1 rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 dark:focus:ring-purple-500 nav-underline`;

    if (opts.cta) {
      return (
        <Link
          to={path}
          className={`${base} bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-95`}
          aria-current={active ? "page" : undefined}
        >
          {label}
        </Link>
      );
    }

    return (
      <Link
        to={path}
        ref={opts.first ? firstLinkRef : null}
        className={`${base} ${
          active
            ? "font-semibold text-blue-600 dark:text-purple-400"
            : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        }`}
        aria-current={active ? "page" : undefined}
      >
        {label}
      </Link>
    );
  };

  return (
    <header
      className={`fixed w-full z-50 top-0 backdrop-blur bg-white/60 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-800 transition-shadow transform ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "shadow-lg" : "shadow-sm"}`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" aria-label="Home">
          <svg
            className="w-10 h-10 rounded-full shadow-lg"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden={true}
          >
            <defs>
              <linearGradient id="logoGradient" x1="0" x2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <circle cx="24" cy="24" r="24" fill="url(#logoGradient)" />
            <text
              x="50%"
              y="58%"
              textAnchor="middle"
              fontWeight="700"
              fontSize="20"
              fill="#fff"
            >
              N
            </text>
          </svg>
          <span className="font-semibold text-lg">Nazih Abboud</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-6"
          role="navigation"
          aria-label="Main navigation"
        >
          {navItem("/", "Home")}
          {navItem("/about", "About")}
          {navItem("/projects", "Projects")}
          {navItem("/contact", "Contact", { cta: true })}

          {/* Dark mode button */}
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDark(!dark)}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 px-4 py-4 space-y-4"
        >
          {navItem("/", "Home", { first: true })}
          {navItem("/about", "About")}
          {navItem("/projects", "Projects")}
          {navItem("/contact", "Contact", { cta: true })}

          <button
            onClick={() => setDark(!dark)}
            className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition w-full justify-center"
            aria-pressed={dark}
          >
            {dark ? <FaSun /> : <FaMoon />}
            <span>{dark ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>
      )}
    </header>
  );
}

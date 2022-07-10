import Link from "next/link";
import styles from "../styles/Navbar.module.css";

import dynamic from "next/dynamic";
import React, { useState } from "react";

const ThemeToggle = dynamic(() => import("../components/ThemeToggle.js"), {
  ssr: false,
});

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.navbar_container}>
      <div className={styles.navlinks_container}>
        <nav>
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-7">
                <div className="flex items-center py-4">
                  <span className="text-lg">
                    <ThemeToggle />
                  </span>
                </div>
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-1">
                  <a href="/" className="py-4 px-2">
                    HOME
                  </a>
                  <a
                    href="#about_section"
                    className="py-4 px-2 transition duration-300"
                  >
                    ABOUT
                  </a>
                  <a
                    href="https://www.notion.so/communaltech/Kylee-Fields-Communal-Tech-1-0730bd5aa6a24f6d9e91b895e56cee48#9d1c94f8f82c4781b8e7befcd8fb9189"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-4 px-2 transition duration-300"
                  >
                    SERVICES+SKILLS
                  </a>
                  <a
                    href="#socials_section"
                    className="py-4 px-2 transition duration-300"
                  >
                    LINKS
                  </a>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-3 ">
                <a
                  target="_blank"
                  href="https://blljhazo9cp.typeform.com/to/vOzyqBjF"
                  rel="noopener noreferrer"
                  className="py-2 px-2 rounded transition duration-300"
                >
                  Let's Connect!
                </a>
              </div>
              {/* Mobile menu toggle */}
              <div className="md:hidden flex items-center">
                <button
                  className="outline-none mobile-menu-button"
                  onClick={() => setToggle(!toggle)}
                >
                  <svg
                    className="w-6 h-6"
                    x-show="!showMenu"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          {toggle && (
            <ul className="">
              <li className="active">
                <a href="" className="block text-sm px-2 py-4">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://www.notion.so/communaltech/Kylee-Fields-Communal-Tech-1-0730bd5aa6a24f6d9e91b895e56cee48#9d1c94f8f82c4781b8e7befcd8fb9189"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm px-2 py-4 transition duration-300"
                >
                  Services+Skills
                </a>
              </li>
              <li>
                <a
                  href="#about_section"
                  className="block text-sm px-2 py-4 transition duration-300"
                >
                  About
                </a>
                <a
                  href="#socials_section"
                  className="block text-sm px-2 py-4 transition duration-300"
                >
                  Links
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://blljhazo9cp.typeform.com/to/vOzyqBjF"
                  rel="noopener noreferrer"
                  className="block text-sm px-2 py-4 transition duration-300 font-bold"
                >
                  Let's Connect!
                </a>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

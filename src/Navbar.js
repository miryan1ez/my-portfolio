import React from "react";
import { ArrowLongDownIcon, CheckIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom"; 

function Navbar({ highlightStep, onCheck }) {
  const highlights = {
    1: { text: "Go to top", label: "Home" },
    2: { text: "Learn about me", label: "About Me" },
    3: { text: "Reach me here", label: "Contact" },
  };

  const routes = ["/", "/about-me", "/contacts"]; // ✅ Actual pages

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-transparent border-none`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 pt-6 relative">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 ml-[-220px]">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#e0aaff]">
            PORTFOLIO
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:block relative">
          <ul className="flex gap-8 text-white font-medium">
            {["Home", "About Me", "Contact"].map((item, index) => {
              const step = index + 1;
              const isActive = highlightStep === step;
              const info = highlights[step];

              return (
                <li key={item} className={isActive ? "relative" : ""}>
                  <Link
                    to={routes[index]} // ✅ use actual route here
                    className={`transition-colors ${
                      isActive ? "text-[#e0aaff]" : "hover:text-[#e0aaff]"
                    }`}
                  >
                    {item}
                  </Link>

                  {isActive && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-10 flex flex-col items-center">
                      {/* Arrow above box */}
                      <ArrowLongDownIcon className="w-6 h-6 text-[#e0aaff] animate-bounce mb-3" />

                      {/* Tutorial box */}
                      <div className="bg-gray-900/90 border border-[#e0aaff]/50 rounded-xl p-3 shadow-lg w-44 text-center mt-1">
                        <p className="text-md text-gray-300 mb-2">
                          {info.text}
                        </p>
                        <div className="flex justify-center">
                          <button
                            onClick={onCheck}
                            className="flex items-center gap-1 bg-[#e0aaff] hover:bg-purple-500 text-gray-900 text-xs px-4 py-1.5 rounded-lg font-semibold transition-all"
                          >
                            <CheckIcon className="w-4 h-4" />
                            Got it
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import { useEffect, useState } from "react";

import "@fontsource/poppins";
import "@fontsource/poppins/700.css";
import { ArrowDownTrayIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Navbar from "./Navbar";

function Home() {
  const [showTutorial, setShowTutorial] = useState(false);
  const [step, setStep] = useState(1);
  const [navbarStep, setNavbarStep] = useState(1); // for per-button highlight

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedPortfolio");
    if (!hasVisited) {
      setShowTutorial(true);
    }
  }, []);

  const handleNextStep = () => {
    if (step === 1) {
      setStep(2); // Move to navbar tutorial
    } else if (step === 2) {
      localStorage.setItem("hasVisitedPortfolio", "true");
      setShowTutorial(false);
    } else {
      localStorage.setItem("hasVisitedPortfolio", "true");
      setShowTutorial(false);
    }
  };

  const handleNavbarCheck = () => {
    if (navbarStep < 3) {
      setNavbarStep(navbarStep + 1);
    } else {
      setStep(3);
      setNavbarStep(0);
    }
  };

  const handleClose = () => setShowTutorial(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Von-Voltaire-Resume.pdf";
    link.click();
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-poppins relative">

      <Navbar highlightStep={step === 2 ? navbarStep : 0} onCheck={handleNavbarCheck} />


      <section className="flex flex-col md:flex-row items-center justify-between min-h-[70vh] px-8 gap-12">
        <div className="flex-shrink-0 w-full md:w-1/2 h-[100vh]">
          <img
            src="https://res.cloudinary.com/dglawxazg/image/upload/v1759869489/Adobe_Express_-_file_z8ks6x.png"
            alt="profile"
            className="w-full h-full object-cover rounded-lg opacity-80"
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold">Hello everyone, my name is</h2>
          <h2 className="text-5xl font-extrabold tracking-wide text-[#e0aaff]">
            VON VOLTAIRE
          </h2>
          <h2 className="text-5xl font-extrabold tracking-wide text-[#e0aaff]">
            PAGSIAT
          </h2>

          <p className="mt-4 text-lg max-w-xl">
            A Web & Mobile App Developer passionate about creating modern apps.
          </p>

          <button
            onClick={handleDownload}
            className="relative inline-flex items-center justify-center p-0.5 mt-4 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span className="relative flex items-center gap-2 px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              <ArrowDownTrayIcon className="w-5 h-5 text-[#e0aaff] group-hover:text-white transition-colors duration-300" />
              <p className="text-[#e0aaff] group-hover:text-white transition-colors duration-300">
                Resume
              </p>
            </span>
          </button>
        </div>
      </section>


      {showTutorial && step === 1 && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999]">
          <div className="relative bg-gray-800 text-white rounded-2xl p-8 max-w-lg w-full text-center shadow-2xl border border-[#e0aaff]/30">
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold mb-3 text-[#e0aaff]">Welcome!</h2>
            <p>This is your first time here 🎉</p>
            <p className="mt-2 text-sm text-gray-300">
              Let’s take a quick tour so you know how to explore my portfolio.
            </p>

            <div className="mt-6 flex justify-center">
              <button
                onClick={handleNextStep}
                className="bg-[#e0aaff] hover:bg-purple-500 text-gray-900 font-semibold px-6 py-2 rounded-lg transition-all"
              >
                Start Tour
              </button>
            </div>
          </div>
        </div>
      )}

      {showTutorial && step === 3 && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999]">
          <div className="relative bg-gray-800 text-white rounded-2xl p-8 max-w-lg w-full text-center shadow-2xl border border-[#e0aaff]/30">
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold mb-3 text-[#e0aaff]">Resume Button</h2>
            <p>
              Click the{" "}
              <span className="text-[#e0aaff]">Resume</span> button to download my CV anytime!
            </p>
            <div className="mt-4 flex justify-center">
              <ArrowDownTrayIcon className="w-12 h-12 text-[#e0aaff] animate-bounce" />
            </div>

            <div className="mt-6 flex justify-center">
              <button
                onClick={handleNextStep}
                className="bg-[#e0aaff] hover:bg-purple-500 text-gray-900 font-semibold px-6 py-2 rounded-lg transition-all"
              >
                Finish
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

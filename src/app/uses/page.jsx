"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function Uses() {
  // State to track the theme (light or dark)
  const [isDarkMode, setIsDarkMode] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);

  // Effect to listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setIsDarkMode(e.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Apply the theme class to the HTML element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
      <main className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-[1280px] h-auto bg-white dark:bg-zinc-900">
          {/* Header */}
          <header className="max-w-[1280px] w-full mx-auto flex justify-between items-center p-4 mt-3">
            <div></div>
            <nav className="flex items-center relative">
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-[#14b8a6] p-2 shadow-md" // Removed border here
                >
                  {isMenuOpen ? "Close Menu" : "Open Menu"}
                </button>
              </div>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <div className="absolute top-0 right-0 mt-2 w-[280px] bg-zinc-800 text-white rounded-lg shadow-md z-50">
                  <div className="flex justify-between items-center p-4">
                    <ul className="flex flex-col space-y-4">
                      {["Home", "About", "Projects", "Uses"].map((item, i) => (
                        <li key={i}>
                          <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="relative group">
                            <span className={`hover:text-[#14b8a6] ${item === "Uses" ? "text-[#14b8a6]" : ""}`}>
                              {item}
                            </span>
                            <span className="absolute top-7 left-0 w-0 h-px bg-gradient-to-r from-white via-[#14B8A6] to-white group-hover:w-full"></span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Close button (X) */}
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-2 right-2 text-white text-xl p-2"
                  >
                    &times;
                  </button>
                </div>
              )}

              {/* Navigation Links for Larger Screens */}
              <ul className="hidden lg:flex flex-row space-x-5 dark:text-white dark:bg-zinc-800 dark:border-[#FFFFFF1A] px-4 py-2 rounded-full border border-gray-100 justify-center items-center shadow-md">
                {["Home", "About", "Projects", "Uses"].map((item, i) => (
                  <li key={i}>
                    <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="relative group">
                      <span className={`hover:text-[#14b8a6] ${item === "Uses" ? "text-[#14b8a6]" : ""}`}>{item}</span>
                      <span className="absolute top-7 left-0 w-0 h-px bg-gradient-to-r from-white via-[#14B8A6] to-white group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div
              className="p-2 text-[#14b8a6] bg-white dark:bg-[#27272AE5] dark:border-[#FFFFFF1A] border rounded-3xl hover:bg-[#fafbfa] flex items-center shadow-lg hover:shadow-xl cursor-pointer"
              onClick={toggleTheme}
            >
              <img
                className="moon cursor-pointer w-6 h-6"
                src={isDarkMode ? "./home-pic/icon-moon.svg" : "./home-pic/icon-sun.svg"}
                alt={isDarkMode ? "Moon Icon" : "Sun Icon"}
              />
            </div>
          </header>

          {/* Content Below Header */}
          <div className={`transition-all ${isMenuOpen ? "mt-[150px]" : "mt-0"}`}>
            {/* Your main content here */}
            <p></p>
          </div>
          {/* Header End */}
          {/* Main */}
          <div className="w-full max-w-[1028px] h-auto">
            {/* Intro */}
            <div className="w-full max-w-[672px] ml-10 mt-12 lg:ml-28">
              <p className="text-3xl lg:text-5xl pb-8 font-semibold dark:text-zinc-100">
                Software I use, gadgets I love, and other things I recommend.
              </p>
              <p className="text-sm lg:text-base dark:text-zinc-400">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet
                consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..
              </p>
            </div>
            {/* Intro End */}
            {/* Workstagion */}
            <div className="w-full h-auto mt-16 flex flex-col ml-4 md:ml-28 border-l border-zinc-100 dark:border-zinc-700">
              <h2 className="dark:text-zinc-100 ml-3 mb-6">Workstagion</h2>
              <div className="grid grid-row-4 gap-5">
                <div className="w-full md:w-[738px] h-auto md:h-auto md:ml-32 dark:text-zinc-400 grid-flow-col">
                  <h3 className="mb-3 dark:text-zinc-100">Item Name</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                    Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
                    mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
                    interdum eu.
                  </p>
                </div>
                <div className="w-full md:w-[738px] h-auto md:h-auto md:ml-32 dark:text-zinc-400 grid-flow-col">
                  <h3 className="mb-3 dark:text-zinc-100">Item Name</h3>
                  <p className="break-words">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                    Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
                    mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
                    interdum eu.
                  </p>
                </div>
                <div className="w-full md:w-[738px] h-auto md:h-auto md:ml-32 dark:text-zinc-400">
                  <h3 className="mb-3 dark:text-zinc-100">Item Name</h3>
                  <p className="break-words">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                    Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
                    mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
                    interdum eu.
                  </p>
                </div>
                <div className="w-full md:w-[738px] h-auto md:h-auto md:ml-32 dark:text-zinc-400">
                  <h3 className="mb-3 dark:text-zinc-100">Item Name</h3>
                  <p className="break-words">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                    Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
                    mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
                    interdum eu.
                  </p>
                </div>
                <div className="w-full md:w-[738px] h-auto md:h-auto md:ml-32 dark:text-zinc-400">
                  <h3 className="mb-3 dark:text-zinc-100">Item Name</h3>
                  <p className="break-words">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                    Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
                    mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
                    interdum eu.
                  </p>
                </div>
              </div>
            </div>
            {/* Workstagion End */}
            {/* Development-tools */}
            <div className="w-full h-auto mt-16 flex flex-col ml-4 md:ml-28 border-l border-zinc-100 dark:border-zinc-700">
              <h2 className="dark:text-zinc-100 ml-3 mb-6">Development tools</h2>
              <div className="grid grid-row-4 gap-5">
                <div className="w-full md:w-[738px] h-auto md:h-auto md:ml-32 dark:text-zinc-400 grid-flow-col">
                  <h3 className="mb-3 dark:text-zinc-100">Item Name</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                    Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
                    mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
                    interdum eu.
                  </p>
                </div>
                <div className="w-full md:w-[738px] h-auto md:h-auto md:ml-32 dark:text-zinc-400 grid-flow-col">
                  <h3 className="mb-3 dark:text-zinc-100">Item Name</h3>
                  <p className="break-words">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                    Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
                    mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
                    interdum eu.
                  </p>
                </div>
                <div className="w-full md:w-[738px] h-auto md:h-auto md:ml-32 dark:text-zinc-400">
                  <h3 className="mb-3 dark:text-zinc-100">Item Name</h3>
                  <p className="break-words">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                    Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
                    mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
                    interdum eu.
                  </p>
                </div>
                <div className="w-full md:w-[738px] h-auto md:h-auto md:ml-32 dark:text-zinc-400">
                  <h3 className="mb-3 dark:text-zinc-100">Item Name</h3>
                  <p className="break-words">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                    Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
                    mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
                    interdum eu.
                  </p>
                </div>
              </div>
            </div>
            {/* Development-tools End */}
            {/* Design */}
            <div className="w-full h-auto mt-16 flex flex-col ml-4 md:ml-28 border-l border-zinc-100 dark:border-zinc-700">
              <h2 className="dark:text-zinc-100 ml-3 mb-6">Development tools</h2>
              <div className="grid grid-row-4 gap-5">
                <div className="w-full md:w-[738px] h-auto md:h-auto md:ml-32 dark:text-zinc-400 grid-flow-col">
                  <h3 className="mb-3 dark:text-zinc-100">Whimsical</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                    Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
                    mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
                    interdum eu.
                  </p>
                </div>
                <div className="w-full md:w-[738px] h-auto md:h-auto md:ml-32 dark:text-zinc-400 grid-flow-col">
                  <h3 className="mb-3 dark:text-zinc-100">Figma</h3>
                  <p className="break-words">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                    Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
                    mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
                    interdum eu.
                  </p>
                </div>
              </div>
            </div>
            {/* Design End */}
            {/* Productivity */}
            <div className="w-full h-auto mt-16 flex flex-col ml-4 md:ml-28 border-l border-zinc-100 dark:border-zinc-700">
              <h2 className="dark:text-zinc-100 ml-3 mb-6">Productivity</h2>
              <div className="grid grid-row-4 gap-5">
                <div className="w-full md:w-[738px] h-auto md:h-auto md:ml-32 dark:text-zinc-400 grid-flow-col">
                  <h3 className="mb-3 dark:text-zinc-100">Item Name</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                    Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
                    mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
                    interdum eu.
                  </p>
                </div>
                <div className="w-full md:w-[738px] h-auto md:h-auto md:ml-32 dark:text-zinc-400 grid-flow-col">
                  <h3 className="mb-3 dark:text-zinc-100">Item Name</h3>
                  <p className="break-words">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                    Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
                    mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
                    interdum eu.
                  </p>
                </div>
                <div className="w-full md:w-[738px] h-auto md:h-auto md:ml-32 dark:text-zinc-400">
                  <h3 className="mb-3 dark:text-zinc-100">Item Name</h3>
                  <p className="break-words">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                    Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
                    mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
                    interdum eu.
                  </p>
                </div>
                <div className="w-full md:w-[738px] h-auto md:h-auto md:ml-32 dark:text-zinc-400">
                  <h3 className="mb-3 dark:text-zinc-100">Item Name</h3>
                  <p className="break-words">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                    Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
                    mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna
                    interdum eu.
                  </p>
                </div>
                {/* Productivity End */}
              </div>
            </div>
          </div>
          {/* Main End */}
          {/* Footer */}
          <footer className="max-w-[1280px] h-[148px] w-full mx-auto flex flex-col sm:flex-row justify-between items-center p-4 border-t mt-32">
            <nav>
              <ul className="flex space-x-5 bg-[#FFFFFF] dark:bg-zinc-900 dark:text-white w-[280px] h-[40px] ml-24">
                <li>
                  <a href="./" className="relative group">
                    <span className="hover:text-[#9fa0a0]">Home</span>
                  </a>
                </li>
                <li>
                  <a href="./about" className="relative group">
                    <span className="hover:text-[#9fa0a0]">About</span>
                  </a>
                </li>
                <li>
                  <a href="./projects" className="relative group">
                    <span className="hover:text-[#9fa0a0]">Projects</span>
                  </a>
                </li>
                <li>
                  <a href="./uses" className="relative group">
                    <span className="hover:text-[#9fa0a0]">Uses</span>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="text-[#A1A1AA] text-sm mr-32">© 2024 John Doe. All rights reserved.</div>
          </footer>
          {/* Footer End */}
        </div>
      </main>
    </div>
  );
}

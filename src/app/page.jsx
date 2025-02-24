"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function Home() {
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
          <header className="max-w-[1280px] w-full mx-auto flex justify-between items-center p-4">
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
                            <span className={`hover:text-[#14b8a6] ${item === "Home" ? "text-[#14b8a6]" : ""}`}>
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
              <ul className="hidden lg:flex flex-row space-x-5 dark:text-white dark:bg-zinc-800 dark:border-[#FFFFFF1A] px-4 py-2 rounded-full border border-gray-100 justify-center items-center">
                {["Home", "About", "Projects", "Uses"].map((item, i) => (
                  <li key={i}>
                    <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="relative group">
                      <span className={`hover:text-[#14b8a6] ${item === "Home" ? "text-[#14b8a6]" : ""}`}>{item}</span>
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
          {/* MainContent */}
          <div className="w-full max-w-screen-xl pt-6 pr-10 pb-16 pl-10 gap-6 dark:text-zinc-400 ">
            {/* Intro */}
            <div className="flex flex-col items-baseline gap-6 w-full max-w-full lg:w-[672px] h-auto">
              <div className="relative flex flex-col justify-center items-center p-0.5 w-[64px] h-[64px] shadow-md rounded-full">
                <div className="relative flex flex-col justify-center items-center p-0.5 w-[64px] h-[64px] shadow-md rounded-full"></div>
                <img
                  className="absolute inset-0 bg-cover bg-center object-scale-down rounded-full w-[60px] h-[60px]"
                  src="./home-pic/me.png"
                />
              </div>
              <div className="flex flex-row items-center p-0 w-full lg:w-[672px] h-auto">
                <h1 className="text-3xl lg:text-5xl font-bold text-zinc-800 dark:text-zinc-100">
                  Software engineer, father, and believer
                </h1>
              </div>
              <div className="flex flex-row items-start p-0 w-full lg:w-[672px] h-auto">
                <p className="text-sm lg:text-base font-normal text-zinc-600 dark:text-zinc-400 leading-[28px]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet
                  consectetur adipiscing elit Ut et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut
                  et massa mi Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi..
                </p>
              </div>
              <div className="flex flex-row items-center gap-3 p-0 w-full lg:w-[96px] h-aut dark:dark:bg-zinc-900">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img className="w-[24px] h-[24px]" src="./home-pic/LinkIn-logo.svg" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <img className="w-[24px] h-[24px]" src="./home-pic/X-logo.svg" />
                </a>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                  <img className="w-[24px] h-[24px]" src="./home-pic/Github-logo.svg" />
                </a>
              </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row justify-between gap-6">
              <div className="w-full lg:w-[594px] h-auto pt-[32px] pb-[32px]">
                {/* Articles */}
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="w-full lg:w-[512px] pt-8 pb-8">
                    <article className="w-full lg:w-[512px]">
                      <div className="w-full lg:w-[512px] h-[24px]">
                        <time className="text-sm text-gray-500 dark:text-zinc-400 pl-2 pr-6 h-6 w-full ">
                          December 25, 2023
                        </time>
                      </div>
                      <div className="w-full lg:w-[512px] h-[40px] pt-3">
                        <h2 className="text-base font-semibold mt-2 dark:text-zinc-100">Lorem ipsum dolor sit amet</h2>
                      </div>
                      <div className="w-full lg:w-[512px] h-[80px] pt-2">
                        <p className="text-sm mt-4 text-gray-700 dark:text-zinc-400">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
                          urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                          Maecenas vitae mattis tellus. Nullam quis imperdiet augue...
                        </p>
                      </div>
                      <div className="w-[512px] h-[40px] pt-4 gap-1">
                        <a href="#" className="text-[#14B8A6] mt-2 inline-flex items-center">
                          Read article
                          {/* Left-pointing arrow */}
                          <img className=" w-[10px] h-[10px] pl-1" src="./home-pic/Right-arrow.svg" />
                        </a>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
              {/* Widgets */}
              <div className="w-[398px] h-[972px] flex flex-col gap-[24px]">
                {/* Email */}
                <div className="border-[#F4F4F5] dark:border-zinc-700/40 border p-6 radius-[16px] w-[398px] h-[196px] rounded-2xl">
                  <div className="w-[350px] h-[28px] flex gap-3">
                    <img className="w-6 h-6" src="./home-pic/Mail.svg" />
                    <h2 className="text-base leading-7 font-semibold text-gray-800 dark:text-zinc-100">
                      Stay up to date
                    </h2>
                  </div>
                  <div className="w-[305px] h-[56px] pt-2">
                    <p className="mt-2 text-gray-600 dark:text-zinc-400">
                      Get notified when I publish something new, and unsubscribe at any time.
                    </p>
                  </div>
                  <form action="#" method="POST" className="w-[350px] h-[64px] pt-6 gap-4">
                    <div className="flex items-center gap-4">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-[282px] h-[40px] border pt-2 pr-3 pb-2 pl-3 gap-1 shadow-md dark:bg-zinc-700/20 dark:border-zinc-700 border-[#17171A1A]"
                        placeholder="Your email"
                      />
                      <button
                        type="submit"
                        className="w-[52px] bg-[#272729] pt-2 pr-3 pb-2 pl-3 gap-1 text-white py-2 rounded-md hover:bg-[#414144] focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        Join
                      </button>
                    </div>
                  </form>
                </div>
                {/* Work */}
                <div className="flex flex-col items-start p-6 w-[398px] h-auto border dark:border-zinc-700/40 border-zinc-100 rounded-2xl">
                  <div className=" flex items-center gap-3 pb-2">
                    <img className="w-6 h-6" src="./home-pic/Briefcase.svg" />
                    <h2 className="text-base leading-7 font-semibold text-gray-800 dark:text-zinc-100">Work</h2>
                  </div>
                  <div className="h-auto">
                    <p className="text-[#52525B]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                    </p>
                    <div className="w-[350px] h-[264px] pt-6 gap-4">
                      <div className="w-[350px] h-12 flex">
                        <div className="flex-col">
                          {/* SLACK */}
                          <div className="flex pb-4">
                            <div className="w-[42px] h-[42px] border border-spacing-1 border-zinc-900-5% dark:bg-zinc-800 dark:border-[#3F3F4666] rounded-full">
                              <img className="w-9 h-9 pt-[6px] pl-[5.5px]" src="./home-pic/Slack-logo.svg" />
                            </div>
                            <div className="w-[294px] h-[48px] pl-3">
                              <h1 className="text-zinc-900 dark:text-zinc-400">Slack</h1>
                              <div className="flex justify-between">
                                <p className=" leading-6 text-[12px] text-zinc-500 ">SOFTWARE ENGINEER</p>
                                <p className="pl-20 leading-6 text-[12px] text-zinc-400 ">2016 - Present</p>
                              </div>
                            </div>
                          </div>
                          {/* END SLACK */}
                          {/* SPOTIFY */}
                          <div className="flex pb-4">
                            <div className="w-[42px] h-[42px] border border-spacing-1 border-zinc-900_5% dark:bg-zinc-800 dark:border-[#3F3F4666] rounded-full">
                              <img className="w-9 h-9 pt-[6px] pl-[5.5px]" src="./home-pic/Spotify-logo.svg" />
                            </div>
                            <div className="w-[294px] h-[48px] pl-3">
                              <h1 className="text-zinc-900 dark:text-zinc-400">Spotify</h1>
                              <div className="flex justify-between">
                                <p className=" leading-6 text-[12px] text-zinc-500 ">SOFTWARE ENGINEER</p>
                                <p className="pl-20 leading-6 text-[12px] text-zinc-400 ">2014 - 2015</p>
                              </div>
                            </div>
                          </div>
                          {/* END SPOTIFY */}
                          {/* AUDIBLE */}
                          <div className="flex pb-4">
                            <div className="w-[42px] h-[42px] border border-spacing-1 border-zinc-900_5% dark:bg-zinc-800 dark:border-[#3F3F4666] rounded-full">
                              <img className="w-9 h-9 pt-[6px] pl-[5.5px]" src="./home-pic/Audible-logo.svg" />
                            </div>
                            <div className="w-[294px] h-[48px] pl-3">
                              <h1 className="text-zinc-900 dark:text-zinc-400">Audible</h1>
                              <div className="flex justify-between">
                                <p className=" leading-6 text-[12px] text-zinc-500 ">SOFTWARE ENGINEER</p>
                                <p className="pl-20 leading-6 text-[12px] text-zinc-400 ">2012 - 2013</p>
                              </div>
                            </div>
                          </div>
                          {/* END AUDIBLE */}
                          {/* MICROSOFT */}
                          <div className="flex pb-4">
                            <div className="w-[42px] h-[42px] border border-spacing-1 border-zinc-900_5% dark:bg-zinc-800 dark:border-[#3F3F4666] rounded-full">
                              <img className="w-9 h-9 pt-[6px] pl-[5.5px]" src="./home-pic/Microsoft-logo.svg" />
                            </div>
                            <div className="w-[294px] h-[48px] pl-3">
                              <h1 className="text-zinc-900 dark:text-zinc-400">Microsift</h1>
                              <div className="flex justify-between">
                                <p className=" leading-6 text-[12px] text-zinc-500 ">SOFTWARE ENGINEER</p>
                                <p className="pl-20 leading-6 text-[12px] text-zinc-400 ">2010 - 2011</p>
                              </div>
                            </div>
                          </div>
                          {/* END MICROSOFT */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Skills */}
                <div className="w-[398px] h-[332px] border border-zinc-100 dark:border-zinc-700/40 p-6 rounded-2xl ">
                  <div className="w-[350px] h-7 flex items-center gap-3 pb-2">
                    <img className="w-6 h-6" src="./home-pic/Skill-icon.svg" />
                    <h2 className="text-base leading-7 font-semibold text-gray-800 dark:text-zinc-100">Skills</h2>
                  </div>
                  <div className="w-[350px] h-[56px] pt-2">
                    <p className="w-[350px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                    </p>
                  </div>
                  {/*HTML*/}
                  <div className="flex pb-1 pt-4">
                    <div className="w-[50px] h-[50px] border border-spacing-1 border-zinc-900_5% dark:bg-zinc-800 dark:border-[#3F3F4666] rounded-full">
                      <img className="w-[38px] h-[38px] pt-[10px] pl-[10px]" src="./home-pic/HTML-logo.svg" />
                    </div>
                    <div className="w-[294px] h-[48px] pl-3">
                      <h1 className="text-zinc-900 font-semibold">HTML</h1>
                      <div className="flex justify-between">
                        <progress
                          value={0.4}
                          className="w-[282px] h-6 dark:[&::-webkit-progress-bar]:bg-slate-600 [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-teal-500 [&::-moz-progress-bar]:bg-teal-500"
                        />
                      </div>
                    </div>
                  </div>
                  {/*CSS*/}
                  <div className="flex pb-1 pt-4">
                    <div className="w-[50px] h-[50px] border border-spacing-1 border-zinc-900_5% dark:bg-zinc-800 dark:border-[#3F3F4666] rounded-full">
                      <img className="w-[38px] h-[38px] pt-[10px] pl-[10px]" src="./home-pic/CSS-logo.svg" />
                    </div>
                    <div className="w-[294px] h-[48px] pl-3">
                      <h1 className="text-zinc-900 font-semibold">CSS</h1>
                      <div className="flex justify-between">
                        <progress
                          value={0.4}
                          className="w-[282px] h-6 dark:[&::-webkit-progress-bar]:bg-slate-600 [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-teal-500 [&::-moz-progress-bar]:bg-teal-500"
                        />
                      </div>
                    </div>
                  </div>
                  {/*JavaScript*/}
                  <div className="flex pb-3 pt-4">
                    <div className="w-[50px] h-[50px] border border-spacing-1 border-zinc-900_5% dark:bg-zinc-800 dark:border-[#3F3F4666] rounded-full">
                      <img className="w-[38px] h-[38px] pt-[10px] pl-[10px]" src="./home-pic/JavaScript-logo.svg" />
                    </div>
                    <div className="w-[294px] h-[48px] pl-3">
                      <h1 className="text-zinc-900 font-semibold">JavaScript</h1>
                      <div className="flex justify-between">
                        <progress
                          value={0.4}
                          className="w-[282px] h-6 dark:[&::-webkit-progress-bar]:bg-slate-600 [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-teal-500 [&::-moz-progress-bar]:bg-teal-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Widgets End */}
            </div>
          </div>
          {/* footer */}
          <footer className="max-w-[1280px] w-full mx-auto flex flex-col sm:flex-row justify-between items-center p-4">
            <nav>
              <ul className="flex space-x-5 bg-[#FFFFFF] dark:bg-zinc-900 dark:text-white w-[280px] h-[40px] pr-3 pl-4">
                <li>
                  <a href="./" className="relative group">
                    <span className="hover:text-[#565757]">Home</span>
                  </a>
                </li>
                <li>
                  <a href="./about" className="relative group">
                    <span className="hover:text-[#565757]">About</span>
                  </a>
                </li>
                <li>
                  <a href="./projects" className="relative group">
                    <span className="hover:text-[#565757]">Projects</span>
                  </a>
                </li>
                <li>
                  <a href="./uses" className="relative group">
                    <span className="hover:text-[#565757]">Uses</span>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="text-[#A1A1AA] text-sm">© 2024 John Doe. All rights reserved.</div>
          </footer>
        </div>
      </main>
    </div>
  );
}

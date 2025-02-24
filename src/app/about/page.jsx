"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function About() {
  const [isDarkMode, setIsDarkMode] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);
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
  {
    /* theme switcher end */
  }
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
                            <span className={`hover:text-[#14b8a6] ${item === "About" ? "text-[#14b8a6]" : ""}`}>
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
                      <span className={`hover:text-[#14b8a6] ${item === "About" ? "text-[#14b8a6]" : ""}`}>{item}</span>
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
          <div className="max-w-[1280px] w-full  h-auto pt-6 pb-16 px-6 flex flex-col-reverse lg:flex-row justify-center items-center gap-12">
            {/* Leftside */}
            <div className="w-[464px] max-w-[824px] h-[824px] gap-6 text-center lg:text-left">
              <h1 className="text-5xl dark:text-zinc-100">
                I&apos;m Caleb Vastbinder. I live in Taylorsville Utah, where I develop the future.
              </h1>
              <div className="dark:text-zinc-400 text-slate-600">
                <p className="pt-6">
                  I was married on September 29, 2023, which was one of the most significant milestones of my life. It
                  was a beautiful day filled with love, and I feel incredibly blessed to share my life with my wife. Our
                  journey together has been full of meaningful moments, and I’m excited for everything we’ll continue to
                  experience as we build our future.
                </p>
                <p className="pt-6">
                  Currently, I’m studying Computer Science, which has been a passion of mine for as long as I can
                  remember. The field fascinates me because of the endless possibilities it offers for problem-solving
                  and creativity. From writing code to designing software, every aspect of programming excites me. I’ve
                  always been drawn to the challenge of making something work, and programming allows me to constantly
                  push myself to learn and improve.
                </p>
                <p className="pt-6">
                  Growing up in Seattle, Washington, I’ve been surrounded by a tech-driven environment, which has
                  definitely shaped my career path. My dad is a web and app developer, and his influence has been a big
                  part of my journey. I’ve watched him work on various projects, and his passion for technology inspired
                  me to follow a similar path. I’ve been programming for most of my life, starting with small projects
                  and gradually building up my skills over the years.
                </p>
                <p className="pt-6">
                  As I continue my studies, I’m excited to see how I can use my knowledge to make a positive impact in
                  the world. The tech industry is constantly evolving, and I’m eager to be part of that change. Whether
                  it's developing new apps, improving systems, or creating innovative solutions, I’m ready to take on
                  the challenges that come with being a part of this field.
                </p>
              </div>
            </div>
            {/* Leftside End */}
            {/* rightside */}
            <div className="w-464 max-w-[764px] h-[764px] flex flex-col gap-[24px] items-center dark:text-zinc-400 text-slate-600">
              <img
                className="w-[464px] max-w-[672px] h-[452px] object-none rounded-xl"
                src="./about-pic/about-me.jpg"
              />
              <div className="flex flex-col items-start p-4 gap-4 w-[230px] h-[156px] mr-[270px]">
                <div className="flex">
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <img className="w-[24px] h-[24px]" src="./home-pic/X-logo.svg" />
                  </a>
                  <p className="ml-2 flex">Follow me on X</p>
                </div>
                <div className="flex">
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img className="w-[24px] h-[24px]" src="./home-pic/LinkIn-logo.svg" />
                  </a>
                  <p className="ml-2">Follow me on Linkedin</p>
                </div>
                <div className="flex flex-row">
                  <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                    <img className="w-[24px] h-[24px]" src="./home-pic/Github-logo.svg" />
                  </a>
                  <p className="ml-2 flex">follow me on Github</p>
                </div>
                <div className="w-[155px] h-[108px] border-t border-zinc-100 ">
                  <p className="pt-16">Cjvastbinder@gmail.com</p>
                </div>
              </div>
            </div>
            {/* rightside End*/}
          </div>
          {/* Main End */}
          {/* Footer */}
          <footer className=" max-w-[1280px] w-full mx-auto flex flex-col sm:flex-row justify-between items-center mt-52 p-4 border-t dark:border-zinc-700">
            <nav>
              <ul className="flex space-x-5 bg-[#FFFFFF] dark:bg-zinc-900 dark:text-white w-[280px] h-[40px] pr-3 pl-4">
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
            <div className="text-[#A1A1AA] text-sm">© 2024 John Doe. All rights reserved.</div>
          </footer>
          {/* Footer End */}
        </div>
      </main>
    </div>
  );
}

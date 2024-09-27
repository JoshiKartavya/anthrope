"use client"
import React, { useState } from "react";
import "./Navbar.scss";
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex flex-row absolute z-50 top-8 justify-between items-center w-[95%]">
        <div className="title text-[--primary]">
          <h1 className="font-bold overflow-y-hidden text-4xl">Anthrope <i className="ri-gemini-fill"></i></h1>
        </div>
        <div className="nav-links flex flex-row lg:gap-8">
          <div className="nav-links-sec text-sm lg:text-3xl bg-[--primary] flex items-center gap-0 lg:gap-6 px-0 lg:px-8 py-0 lg:py-3 rounded-full">
            <a href="#" className="nav-link hidden lg:block">
              Home
            </a>
            <a href="#" className="nav-link hidden lg:block">
              About Us
            </a>
            <a href="#" className="nav-link hidden lg:block">
              Reviews
            </a>
            <a href="#" className="nav-link hidden lg:block">
              Contact Us
            </a>
          </div>
          <div className="nav-link-book text-3xl bg-[--primary] flex items-center lg:gap-6 lg:px-6 lg:py-3 rounded-full">
            <a href="#" className="nav-book hidden lg:block">
              Book a room
            </a>
          </div>
          <div className="menu text-3xl bg-[--primary] flex items-center gap-6 px-4 py-1 rounded-full lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <i className={menuOpen ? "ri-close-line" : "ri-menu-3-fill"}></i>
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="mobile-menu fixed top-0 left-0 w-full h-full bg-[--primary] z-40 flex flex-col justify-center items-center">
          <a href="#" className="nav-link text-2xl mb-4">Home</a>
          <a href="#" className="nav-link text-2xl mb-4">About Us</a>
          <a href="#" className="nav-link text-2xl mb-4">Contact Us</a>
          <a href="#" className="nav-link text-2xl mb-4">Book a room</a>
        </div>
      )}
    </>
  );
};

export default Navbar;

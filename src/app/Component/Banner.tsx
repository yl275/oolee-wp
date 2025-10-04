"use client";

import React, { useState } from "react";

export default function Banner() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4">
      <div className="main-logo">
        <a className="navbar-brand" href="https://oolee.com.au/">
          <img
            src="https://app.oolee.com.au/Image/Oolee/logo1.png"
            alt="Logo"
            width="100"
          />
        </a>
      </div>

      <div className="main-all-menu ">
        <button
          className="navbar-toggler lg:hidden border-2 
          border-gray-200 rounded-full px-4 py-2 hover:border-[#ff3366] 
          hover:text-[#ff3366] cursor-pointer transition-all duration-300 
          hover:scale-105 active:scale-95 shadow-sm hover:shadow-md"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          Menu
        </button>
        <div className="hidden lg:block ">
          <ul className="flex gap-8 text-[#5E5E5E] font-[Poppins] text-[16px] font-[500] ">
            <li className="nav-item">
              <a className="nav-link" href="/Home">
                Offers
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://oolee.com.au/business/"
                target="_blank"
                rel="noopener noreferrer"
              >
                For Business
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://oolee.com.au/about-us/"
                target="_blank"
                rel="noopener noreferrer"
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://oolee.com.au/support/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Support
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-login-class hidden lg:block">
        <div
          className="before-login"
          id="beforeLogin"
          style={{ display: "block" }}
        >
          <button
            type="button"
            onClick={() => {
              /* OpenEndUserSingUp() */
            }}
            className="animated-btn btn trans-back border-2 px-6 py-2 rounded-full font-bold text-sm cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md"
            style={{ fontFamily: "Poppins", marginRight: "15px" }}
          >
            <span>Free Sign Up</span>
          </button>

          <button
            type="button"
            onClick={() => {
              /* openmember() */
            }}
            className="btn pnk-back border-2 px-6 py-2 rounded-full font-bold text-sm cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md"
            style={{ fontFamily: "Poppins" }}
          >
            Login
          </button>
        </div>
        <div
          className="after-login"
          id="afterLogin"
          style={{ display: "none" }}
        >
          <div className="user-dropdown">
            <div
              className="user-info"
              onClick={() => {
                /* toggleDropdown() */
              }}
            >
              <span id="userFullName"></span>
              <i className="fa fa-chevron-down dropdown-icon"></i>
            </div>
            <ul
              className="dropdown-menu"
              id="dropdownMenu"
              style={{ display: "none" }}
            >
              <li>
                <a
                  onClick={() => {
                    /* Opencard() */
                  }}
                >
                  Digital Card
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    /* openmyredem() */
                  }}
                >
                  My Offers
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    /* openmemberprofile() */
                  }}
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    /* changepassforUser() */
                  }}
                >
                  Change Password
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    /* logout() */
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

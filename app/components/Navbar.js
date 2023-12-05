"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useState } from "react";

import { BiMenu } from "react-icons/bi";
import { ImCross } from "react-icons/im";

import { motion } from "framer-motion";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
        <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="https://www.accountingbiz.co/">
                <Image
                  src="/new_logo_light.png"
                  width={200}
                  height={30}
                  alt="logo"
                  className="m-2"
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <ImCross className="text-xl text-white" />
                  ) : (
                    <BiMenu className="text-4xl text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="text-md text-white py-8 md:px-6 text-center  hover:bg-green  border-green  md:hover:text-green md:hover:bg-transparent">
                  <Link
                    href="https://www.accountingbiz.co"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Home
                  </Link>
                </li>
                <li className=" text-md text-white py-8 px-6 text-center hover:bg-green  border-green  md:hover:text-green md:hover:bg-transparent">
                  <Link
                    href="https://www.accountingbiz.co/pricing"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Plans
                  </Link>
                </li>
                <li className=" text-md text-white py-8 px-6 text-center hover:bg-green  border-green  md:hover:text-green md:hover:bg-transparent">
                  <Link
                    href="https://www.accountingbiz.co/bookkeeping"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Services
                  </Link>
                </li>
                <li className=" text-md text-white py-8 px-6 text-center hover:bg-green  border-green  md:hover:text-green md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Resources
                  </Link>
                </li>
                <li className=" text-md text-white py-8 px-6 text-center  hover:bg-green  border-green  md:hover:text-green md:hover:bg-transparent">
                  <Link
                    href="https://www.accountingbiz.co/contact-us"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

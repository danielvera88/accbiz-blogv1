import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#111] py-8 w-full">
      <div className="flex flex-col space-y-4 md:justify-between md:items-center md:space-x-4">
        <div>
          <Image
            src="/logo.png"
            width={200}
            height={100}
            alt="logo"
            className="mx-auto"
          />
        </div>
        <div className="text-white text-center text-sm font-light">
          <p>&copy; Copyright Accounting Biz, LLC.</p>
          <p>All rights reserved </p>
        </div>

        <div className="text-white text-center text-sm uppercase font-light space-x-2">
          <a href="/">home</a>
          <a href="/">careers</a>
        </div>
      </div>
    </footer>
  );
}

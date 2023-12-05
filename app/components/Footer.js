import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#111] py-8 w-full">
      <div className="flex flex-col space-y-4 md:justify-between md:items-center md:space-x-4">
        <div>
          <a href="https://www.accountingbiz.co/">
            <Image
              src="/new_logo_light.png"
              width={200}
              height={100}
              alt="logo"
              className="mx-auto"
            />
          </a>
        </div>
        <div className="text-white text-center text-sm font-light">
          <p>&copy; Copyright Accounting Biz, LLC.</p>
          <p>All rights reserved </p>
        </div>

        <div className="text-white text-center text-sm uppercase font-light space-x-2">
          <a href="https://www.accountingbiz.co/">home</a>
          <a href="/">careers</a>
        </div>
      </div>
    </footer>
  );
}

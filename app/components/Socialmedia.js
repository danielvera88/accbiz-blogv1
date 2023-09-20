import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Socialmedia() {
  return (
    <div>
      <div className=" bg-gray2 py-6">
        <h5 className="text-center mb-3 font-bold text-gold text-2xl">
          Follow us!
        </h5>
        <div className="flex justify-center items-center text-2xl space-x-8 text-black">
          <a href="">
            <AiFillFacebook />
          </a>
          <a href="">
            <AiFillInstagram />
          </a>
          <a href="">
            <AiFillTwitterCircle />
          </a>
          <a href="">
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

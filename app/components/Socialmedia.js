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
      <div className=" py-6">
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

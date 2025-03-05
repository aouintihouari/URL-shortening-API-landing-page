import React from "react";
import Logo from "../assets/images/light-logo.svg";
import FacebookIcon from "./FacebookIcon";
import TwitterIcon from "./TwitterIcon";
import PinterestIcon from "./PinterestIcon";
import InstagramIcon from "./InstagramIcon";

export default function Footer() {
  return (
    <footer className="bg-dark-violet flex h-[776px] w-full flex-col items-center gap-10 p-10 text-center md:h-[310px] md:flex-row md:items-stretch md:justify-between md:px-36 md:py-20 md:text-left">
      <img className="h-[32.67px] w-[120.04px]" src={Logo} alt="" />
      <div className="md:mt-0">
        <ul className="flex flex-col text-white">
          <li className="mb-5 text-[16px] font-bold">Features</li>
          <li className="hover:text-cyan mb-2 cursor-pointer text-[15px] transition duration-1000">
            Link Shortening
          </li>
          <li className="hover:text-cyan mb-2 cursor-pointer text-[15px] transition duration-1000">
            Branded Links
          </li>
          <li className="hover:text-cyan mb-2 cursor-pointer text-[15px] transition duration-1000">
            Analytics
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col text-white">
          <li className="mb-5 text-[16px] font-bold">Resources</li>
          <li className="hover:text-cyan mb-2 cursor-pointer text-[15px] transition duration-1000">
            Blog
          </li>
          <li className="hover:text-cyan mb-2 cursor-pointer text-[15px] transition duration-1000">
            Developers
          </li>
          <li className="hover:text-cyan mb-2 cursor-pointer text-[15px] transition duration-1000">
            Support
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col text-white">
          <li className="mb-5 text-[16px] font-bold">Company</li>
          <li className="hover:text-cyan mb-2 cursor-pointer text-[15px] transition duration-1000">
            About
          </li>
          <li className="hover:text-cyan mb-2 cursor-pointer text-[15px] transition duration-1000">
            Our Team
          </li>
          <li className="hover:text-cyan mb-2 cursor-pointer text-[15px] transition duration-1000">
            Careers
          </li>
          <li className="hover:text-cyan mb-2 cursor-pointer text-[15px] transition duration-1000">
            Contact
          </li>
        </ul>
      </div>
      <div className="flex gap-5">
        <FacebookIcon />
        <TwitterIcon />
        <PinterestIcon />
        <InstagramIcon />
      </div>
    </footer>
  );
}

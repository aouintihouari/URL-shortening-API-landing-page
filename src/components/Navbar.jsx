import { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-7 md:px-36 md:py-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex flex-row items-center gap-20">
          <Logo />
          <div className="text-grayish-violet hidden gap-4 space-x-6 text-[15px] md:flex">
            <a
              href="#"
              className="hover:text-dark-blue cursor-pointer transition duration-1000"
            >
              Features
            </a>
            <a
              href="#"
              className="hover:text-dark-blue cursor-pointer transition duration-1000"
            >
              Pricing
            </a>
            <a
              href="#"
              className="hover:text-dark-blue cursor-pointer transition duration-1000"
            >
              Resources
            </a>
          </div>
        </div>
        <button
          className="flex flex-col space-y-1 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block h-0.5 w-6 bg-gray-800"></span>
          <span className="block h-0.5 w-6 bg-gray-800"></span>
          <span className="block h-0.5 w-6 bg-gray-800"></span>
        </button>
        <ul className="hidden items-center gap-10 md:flex">
          <li className="text-grayish-violet hover:text-dark-blue cursor-pointer text-[15px] transition duration-1000">
            Login
          </li>
          <li className="bg-cyan flex h-[40px] w-[105px] cursor-pointer items-center justify-center rounded-[28px] text-[15px] font-bold text-white transition duration-1000 hover:brightness-115">
            Sign Up
          </li>
        </ul>
      </div>
      {isOpen && (
        <div className="bg-light-violet absolute top-20 left-[10%] z-10 my-1 mb-2 flex w-[80%] flex-col items-center rounded-2xl p-4 font-bold text-white shadow-lg md:hidden">
          <a href="#" className="my-1 block py-2 transition duration-1000">
            Features
          </a>
          <a href="#" className="my-1 block py-2 transition duration-1000">
            Pricing
          </a>
          <a href="#" className="my-1 block py-2 transition duration-1000">
            Resources
          </a>
          <hr className="border-grayish-violet my-2 h-0.5 w-10/12" />
          <a href="#" className="my-1 block py-2 transition duration-1000">
            Login
          </a>
          <a
            href="#"
            className="my-1 block w-10/12 rounded-2xl bg-teal-400 py-2 text-center transition duration-1000"
          >
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
}

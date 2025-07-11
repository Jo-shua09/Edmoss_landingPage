import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import { ButtonOne } from "../ui/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  window.onscroll = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex-wrap w-full bg-white border-b shadow-sm border-gray-50 h-fit backdrop-blur-sm">
      <div className="!py-10 w-full mx-auto section-page ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-end w-fit gap-x-4">
            <span className="py-3 text-5xl font-bold text-white px-7 bg-blue-950 rounded-2xl">E</span>{" "}
            <span className="text-5xl font-bold text-blue-950 font-two">Edmoss</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="items-center hidden space-x-12 md:flex">
            <a href="#services" className="text-3xl font-medium text-gray-600 transition-colors hover:text-blue-950 hover:font-semibold">
              Services
            </a>
            <a href="#values" className="text-3xl font-medium text-gray-600 transition-colors hover:text-blue-950 hover:font-semibold">
              Our Values
            </a>
            <a href="#about" className="text-3xl font-medium text-gray-600 transition-colors hover:text-blue-950 hover:font-semibold">
              About
            </a>
            <a href="#contact" className="text-3xl font-medium text-gray-600 transition-colors hover:text-blue-950 hover:font-semibold">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <ButtonOne name="get started" />
          </div>

          {/* Mobile Menu Button */}
          <button className="p-2 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <IoClose size={24} /> : <RiMenu3Line size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-gray-100 pb-7 mt-7 md:hidden">
            <nav className="flex flex-col pt-10 space-y-12">
              <a href="#services" className="text-3xl font-medium text-gray-600 transition-colors hover:text-blue-950 hover:font-semibold">
                Services
              </a>
              <a href="#values" className="text-3xl font-medium text-gray-600 transition-colors hover:text-blue-950 hover:font-semibold">
                Our Values
              </a>
              <a href="#about" className="text-3xl font-medium text-gray-600 transition-colors hover:text-blue-950 hover:font-semibold">
                About
              </a>
              <a href="#contact" className="text-3xl font-medium text-gray-600 transition-colors hover:text-blue-950 hover:font-semibold">
                Contact
              </a>

              <ButtonOne className="flex justify-center md:w-fit w-full h-[6rem] text-center" name="get started" />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

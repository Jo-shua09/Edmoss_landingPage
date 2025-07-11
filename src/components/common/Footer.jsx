import { BiMapPin, BiPhone } from "react-icons/bi";
import { BsMailbox, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";
import { RiMvAiLine } from "react-icons/ri";
import { ButtonOne } from "../ui/Button";
import { CiMail } from "react-icons/ci";

export default function Footer() {
  return (
    <footer id="contact" className="w-full mx-auto bg-blue-950  text-white section !pt-32">
      <div className="text-left">
        <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-end w-fit gap-x-4">
              <span className="py-3 text-5xl font-bold text-white bg-yellow-500 px-7 rounded-2xl">E</span>{" "}
              <span className="text-5xl font-bold font-two">Edmoss</span>
            </div>
            <p className="text-3xl text-gray-300 normal-case">
              Creating exceptional value for businesses through strategic innovation, operational excellence, and sustainable growth solutions.
            </p>
            <div className="flex space-x-8">
              <button className="p-2 text-white rounded-full hover:text-yellow-500 hover:bg-white/10">
                <LiaLinkedin className="text-5xl" />
              </button>
              <button className="p-2 text-white rounded-full hover:text-yellow-500 hover:bg-white/10">
                <BsTwitter className="text-5xl" />
              </button>
              <button className="p-2 text-white rounded-full hover:text-yellow-500 hover:bg-white/10">
                <FaFacebook className="text-5xl" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-10">
            <h2 className="text-5xl font-semibold">Services</h2>
            <div className="space-y-6">
              <a href="#" className="block text-3xl text-gray-300 normal-case transition-colors text-nowrap hover:text-yellow-500">
                Business Strategy
              </a>
              <a href="#" className="block text-3xl text-gray-300 normal-case transition-colors text-nowrap hover:text-yellow-500">
                Operations Excellence
              </a>
              <a href="#" className="block text-3xl text-gray-300 normal-case transition-colors text-nowrap hover:text-yellow-500">
                Digital Transformation
              </a>
              <a href="#" className="block text-3xl text-gray-300 normal-case transition-colors text-nowrap hover:text-yellow-500">
                Leadership Development
              </a>
              <a href="#" className="block text-3xl text-gray-300 normal-case transition-colors text-nowrap hover:text-yellow-500">
                Financial Optimization
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-10">
            <h2 className="text-5xl font-semibold">Company</h2>
            <div className="space-y-6">
              <a href="#" className="block text-3xl text-gray-300 normal-case transition-colors text-nowrap hover:text-yellow-500">
                About Us
              </a>
              <a href="#" className="block text-3xl text-gray-300 normal-case transition-colors text-nowrap hover:text-yellow-500">
                Our Team
              </a>
              <a href="#" className="block text-3xl text-gray-300 normal-case transition-colors text-nowrap hover:text-yellow-500">
                Case Studies
              </a>

              <a href="#" className="block text-3xl text-gray-300 normal-case transition-colors text-nowrap hover:text-yellow-500">
                Careers
              </a>
              <a href="#" className="block text-3xl text-gray-300 normal-case transition-colors text-nowrap hover:text-yellow-500">
                News
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-10">
            <h2 className="text-5xl font-semibold">Contact</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <CiMail className="text-5xl text-yellow-500" />
                <span className="text-3xl text-gray-300 normal-case">info@edmoss.com.ng</span>
              </div>
              <div className="flex items-center space-x-3">
                <BiPhone className="text-5xl text-yellow-500" />
                <span className="text-3xl text-gray-300 normal-case">+234 (0) 123 456 7890</span>
              </div>
              <div className="flex items-start space-x-3">
                <BiMapPin className="text-5xl text-yellow-500 mt-0.5" />
                <span className="text-3xl text-gray-300 normal-case">
                  Lagos, Nigeria
                  <br />
                  West Africa
                </span>
              </div>
            </div>

            <ButtonOne name="get in touch" className="w-full h-[6rem] flex text-center justify-center items-center !bg-yellow-500" />
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-gray-700">
          <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
            <p className="text-3xl text-center text-gray-400 normal-case md:text-left">© 2024 Edmoss. All rights reserved.</p>
            <div className="flex space-x-6 text-3xl normal-case">
              <a href="#" className="text-gray-400 transition-colors hover:text-yellow-500">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-yellow-500">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-yellow-500">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import logo from "../assets/logo.svg";
import Contact from "./Contact";

function Footer() {
  return (
    <div className="mt-32 bg-[#EBEBF8] w-full h-[360px] relative pt-28">
      <div className="absolute top-[-90px] w-[100%] flex justify-center">
        <Contact />
      </div>
      <div className="px-24 grid grid-cols-4 w-full gap-8">
        <div>
          <div className="flex gap-2 items-center">
            <img src={logo} alt="logo" className="h-12 w-12" />
            <h2 className="text-3xl font-semibold text-[#707070]">
              Learning Exp.
            </h2>
          </div>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div>
          <h3 className="font-bold">Links</h3>
          <div className="flex flex-col mt-5">
            <a href="" className="text-[#8A8A8A] font-semibold">Home</a>
            <a href="" className="text-[#8A8A8A] font-semibold">Pricing</a>
            <a href="" className="text-[#8A8A8A] font-semibold">Download</a>
            <a href="" className="text-[#8A8A8A] font-semibold">About</a>
            <a href="" className="text-[#8A8A8A] font-semibold">Service</a>
          </div>
        </div>
        <div>
          <h3 className="font-bold">Support</h3>
          <div className="flex flex-col mt-5">
            <a href="" className="text-[#8A8A8A] font-semibold">FAQ</a>
            <a href="" className="text-[#8A8A8A] font-semibold">How it Works</a>
            <a href="" className="text-[#8A8A8A] font-semibold">Features</a>
            <a href="" className="text-[#8A8A8A] font-semibold">Contact</a>
            <a href="" className="text-[#8A8A8A] font-semibold">Reporting</a>
          </div>
        </div>
        <div>
          <h3 className="font-bold">Contact Us</h3>
          <div className="flex flex-col mt-5">
            <span className="text-[#8A8A8A] font-semibold">+880 12345678</span>
            <span className="text-[#8A8A8A] font-semibold">youremail@gmail.com</span>
            <span className="text-[#8A8A8A] font-semibold">Pune City</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-[#8A8A8A] text-sm px-24 py-5">
        <span>Copyright & Design By @Learning Exp.</span>
        <div className="flex gap-5">
          <span>Terms of use</span> | <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;

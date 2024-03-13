import React from "react";

function Contact() {
  return (
    <div className="px-16 w-[70%] h-[180px] bg-[#333697] rounded-xl flex items-center gap-16">
      <div className="w-[50%]">
        <h2 className="text-white text-3xl mb-4">Contact Us!</h2>
        <p className="text-white text-sm">
          There are many variations of passages of Lorem Ipsum but the majority
          have suffered alteration.
        </p>
      </div>
      <div className="w-[50%] bg-white p-2 rounded-full pl-5 outline-none">
        <input type="text" placeholder="Enter Here" className="w-[65%]" />
        <button className="bg-[#FFEC05] text-sm font-semibold py-2 w-[35%] rounded-full">
          Send
        </button>
      </div>
    </div>
  );
}

export default Contact;

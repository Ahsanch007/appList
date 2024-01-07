"use client";

import { MdAccountCircle } from "react-icons/md";
import { useState } from "react";
export default function Review() {
  const [message, setMessage] = useState(false);

  const handleMessage = () => {
    setMessage(true);
  };

  setTimeout(() => {
    setMessage(false);
  }, 3000);

  return (
    <div className="flex flex-col gap-[2rem]">
      <h1 className="text-[14px] sm:text-[18px] font-[600] text-white opacity-60 uppercase tracking-widest">
        user reviews
      </h1>
      <div className="flex items-start gap-[1rem]">
        <MdAccountCircle className="text-[--pulper] w-[50px] h-[50px]" />
        <div className="flex flex-col gap-[5px]">
          <h1 className="text-[12px] sm:text-[18px] font-[900] text-white">
            Nulls Clash v15.547.8
          </h1>
          <h2 className="text-[12px] sm:text-[16px] font-[600] text-[--pulper] tracking-widest uppercase">
            sat, 28 mar 2023
          </h2>
          <p className="text-[12px] sm:text-[16px] font-[600] text-white opacity-60">
            Hi, I think its working very slow.
          </p>
        </div>
      </div>
      <div className="w-full h-[2px] bg-white opacity-20"></div>
      <div className="flex items-start gap-[1rem]">
        <MdAccountCircle className="text-[--pulper] w-[50px] h-[50px]" />
        <div className="flex flex-col gap-[5px]">
          <h1 className="text-[12px] sm:text-[18px] font-[900] text-white">
            Nulls Clash v15.547.8
          </h1>
          <h2 className="text-[12px] sm:text-[16px] font-[600] text-[--pulper] tracking-widest uppercase">
            Fri, 07 Mar 2023
          </h2>
          <p className="text-[12px] sm:text-[16px] font-[600] text-white opacity-60">
            Worked as promised literally..
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-[1rem] mt-[2rem]">
        <h1 className="text-[14px] sm:text-[18px] font-[600] text-white opacity-60 uppercase tracking-widest">
          leave a review
        </h1>
        <textarea
          rows="2"
          placeholder="Your Review..."
          className="w-full rounded-[1rem] bg-[#30293a] outline-none text-white p-[1rem] text-[12px] sm:text-[16px] sm:h-[10rem]"
        ></textarea>
        {message && (
          <p className="text-[10px] sm:text-[14px] font-[500] text-red-500">
            You must download an application first to leave a review!
          </p>
        )}
        <button
          className="text-[12px] sm:text-[14px] font-[700] text-white bg-[--pulper] py-[10px] px-[20px] rounded-[7px] uppercase w-full sm:w-fit"
          onClick={handleMessage}
        >
          add review
        </button>
      </div>
    </div>
  );
}

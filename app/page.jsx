"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import Card from "./components/Card";
import { appsData } from "./data/data";
import { Slide } from "react-awesome-reveal";
import Desktop from "./components/Desktop";
export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [windowWidth, setWindowWidth] = useState(0);

  const filteredApps = appsData.filter((data) =>
    data.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial window width
    setWindowWidth(window.innerWidth);

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (windowWidth < 600) {
    return (
      <Slide triggerOnce direction="left" duration={500}>
        <div className="pb-[3rem]">
          {/* ============== Search Bar ============ */}
          <div
            className="w-full flex flex-col items-center py-[2rem] gap-[10px] mb-[2rem] tracking-widest"
            style={{
              background:
                "linear-gradient(90deg,#1b121d 0,#120f2f 50%,#1b121d 100%)",
            }}
          >
            <div className="">
              <Image
                src="/images/logo.png"
                width={100}
                height={50}
                alt="logo"
                className="w-[80px] sm:w-[100px] h-[40px] sm:h-[50px]"
              />
            </div>
            <h1 className="text-white text-[24px] sm:text-[32px] font-[900]">
              UFO TWERK
            </h1>
            <div className="flex items-center gap-[1rem] bg-[--primaryColor] rounded-full py-[1rem] px-[2rem]">
              <FaSearch className="text-[--pulper]" />
              <input
                type="text"
                placeholder="Search for apps..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="bg-transparent h-full outline-none border-none text-white placeholder:text-[--pulper] text-[14px] sm:text-[16px]"
              />
            </div>
          </div>

          {/* ============= apps list ================ */}
          <div className="flex flex-wrap gap-[1.5rem] px-[20px]">
            {filteredApps.map((data) => (
              <Card key={data.id} data={data} />
            ))}
          </div>
        </div>
      </Slide>
    );
  } else return <Desktop />;
}

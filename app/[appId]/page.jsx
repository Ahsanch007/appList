"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Rating from "../components/Rating";
import Review from "../components/Review";
import Loader from "../components/Loader";
import { appsData } from "../data/data";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { Slide } from "react-awesome-reveal";
import Desktop from "../components/Desktop";

export default function AppDetailsPage({ params }) {
  const [loading, setLoading] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [selectedImage, setSelectedImage] = useState(localStorage.getItem('selectedImage') || null);
  const { appId } = params;
  const data = appsData.find((app) => app.id === parseInt(appId));



  const handleImageClick = (socialMedia) => {
    // Set the selectedImage state
    setSelectedImage(socialMedia);

    // Store the selected social media in localStorage
    localStorage.setItem('selectedImage', socialMedia);

    // Open the corresponding social media link in the same window
    const socialMediaLinks = {
      facebook: 'https://www.facebook.com/',
      twitter: 'https://twitter.com/',
      youtube: 'https://www.youtube.com/',
    };

    window.location.href = socialMediaLinks[socialMedia];
  };

  const handleInstallClick = () => {
    if (!selectedImage) {
      // Show an alert if the button is disabled
      alert('Please Complete One of the Task Above to Unlock this Download!');
      return;
    }
    setLoading(true);
    if (selectedImage) {

      setTimeout(() => {
        setLoading(false);
        // Redirect to google.com
        window.location.href = "https://www.google.com";
        localStorage.removeItem('selectedImage');

      }, 5000);
    }

  };

  useEffect(() => {
    // Check if there is a selected social media in localStorage
    const storedImage = localStorage.getItem('selectedImage');
    if (storedImage) {
      setSelectedImage(storedImage);
    }
  }, []);
  useEffect(() => {
    if (!loading) {
    }
  }, [loading]);

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
      <div className=" overflow-x-hidden">
        <Slide duration={1000} triggerOnce direction="right">
          <div className="flex flex-col min-h-screen">
            <div
              className="bg-cover bg-no-repeat bg-top object-cover h-[20rem] md:h-[25rem] mb-[-2rem]"
              style={{ backgroundImage: `url(${data.bigImage})` }}
            ></div>
            <Link href="/">
              <div className="bg-[#5e5964] w-[40px] h-[40px] rounded-full fixed z-10 top-[1rem] right-[1rem] flex items-center justify-center">
                <RxCross2 className="text-[24px] text-white font-[900]" />
              </div>
            </Link>
            <div
              className="px-[20px] flex flex-col gap-[3rem] py-[3rem] w-full rounded-t-[2rem]"
              style={{
                background:
                  "linear-gradient(90deg,#1b121d 0,#120f2f 50%,#1b121d 100%)",
              }}
            >
              <div className="flex flex-col gap-[10px]">
                <h1 className="text-[22px] sm:text-[26px] font-[700] text-white">
                  {data.name}
                </h1>
                <p className="text-[12px] sm:text-[15px] font-[500] text-white opacity-60">
                  {data.description}
                </p>
              </div>
              <div className="py-2" style={{ border: '2px solid #8103e4' }}>

                <div className="text px-2">
                  <h2 className="text-white text-center leading-[30px] text-[13px] font-bold">
                    Install button is locked. Please Share this page to Unlock
                  </h2>
                </div>
                <div className="flex py-2 justify-center gap-[15px]">
                  <Image src='/images/facebook.png' onClick={() => handleImageClick('facebook')} width={50} height={50} alt="facebook" />
                  <Image src='/images/twitter.png' onClick={() => handleImageClick('twitter')} width={50} height={50} alt="twitter" />
                  <Image src='/images/youtube.png' onClick={() => handleImageClick('youtube')} width={50} height={50} alt="youtube" />
                </div>
              </div>
              <div className="flex justify-between items-center gap-[1.5rem]">
                <div className="flex items-center gap-[1rem]">
                  <Image
                    src="/images/applogo.jpg"
                    width={70}
                    height={70}
                    alt=""
                  />
                  <div className="flex flex-col gap-[5px]">
                    <h2 className="text-[10px] sm:text-[14px] font-[500] text-[--pulper] uppercase">
                      mobile edition
                    </h2>
                    <h1 className="text-[12px] sm:text-[16px] font-[900] text-white">
                      {data.name}
                    </h1>
                    <h2 className="text-[10px] sm:text-[14px] font-[500] text-white opacity-60 uppercase">
                      android & ios
                    </h2>
                  </div>
                </div>
                {loading ? (
                  <Loader />
                ) : (

                  <button
                    className={`flex mx-auto sm:mx-0 text-[12px] sm:text-[14px] font-[900] text-white uppercase p-[15px] rounded-full w-fit ${selectedImage ? 'bg-[--pulper]' : 'bg-gray-300'}`}
                    onClick={handleInstallClick}
                  >
                    install
                  </button>
                )}
              </div>

              <Rating />
              <Review />
            </div>
          </div>
        </Slide>
      </div>
    );
  } else {
    return <Desktop />;
  }
}

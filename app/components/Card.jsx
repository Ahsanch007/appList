import Image from "next/image";
import { MdDownload } from "react-icons/md";
import { TiVendorAndroid } from "react-icons/ti";
import { FaApple } from "react-icons/fa";
import Link from "next/link";
export default function Card({ data }) {
  const { name, image, description, size, id, downloads } = data;
  return (
    <Link
      href={`/${id}`}
      className="w-full sm:max-w-[300px] flex justify-between"
    >
      <div
        className="w-full sm:max-w-[300px] flex flex-col justify-between rounded-[8px] gap-[1rem] cursor-pointer"
        style={{
          background:
            "linear-gradient(90deg,#1b121d 0,#120f2f 50%,#1b121d 100%)",
        }}
      >
        <div className="">
          <Image
            src={image}
            width={300}
            height={200}
            alt=""
            className="w-full rounded-t-[8px]"
          />
        </div>

        <div className=" flex justify-between items-center px-[10px]">
          <div className="">
            <div className="flex items-center gap-[5px]">
              <h2 className="text-[10px] sm:text-[12px] font-[400] text-white opacity-60 uppercase">
                file size:
              </h2>
              <span className="text-[10px] sm:text-[12px] font-[900] text-white">
                {size}
              </span>
            </div>
            <div className="flex items-center gap-[5px]">
              <h2 className="text-[10px] sm:text-[12px] font-[400] text-white opacity-60 uppercase">
                downloads
              </h2>
              <span className="text-[10px] sm:text-[12px] font-[900] text-white">
                {downloads}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="bg-[#201629] p-[7px] px-[15px] rounded-[5px]">
              <TiVendorAndroid className="text-[--pulper] text-[20px]" />
            </div>
            <div className="bg-[#201629] p-[7px] px-[15px] rounded-[5px]">
              <FaApple className="text-[--pulper] text-[18px]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[10px] px-[10px]">
          <h1 className="text-[14px] sm:text-[16px] font-[900] text-white tracking-wide">
            {name}
          </h1>
          <p className="text-[10px] sm:text-[12px] font-[400] text-white opacity-60">
            {description.substring(0, 150)}
          </p>
        </div>

        <div className="flex justify-center bg-[#201629] items-center p-[12px] mt-[1rem] rounded-b-[8px]">
          <MdDownload className="text-[--pulper] text-[22px]" />
        </div>
      </div>
    </Link>
  );
}

import { FaMinusCircle } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
export default function Desktop() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-[2rem] items-center justify-center px-[20px]">
      <FaMinusCircle className="w-[180px] h-[180px] text-[--pulper]" />
      <div className="flex flex-col items-center gap-[10px]">
        <h1 className="text-[44px] font-[900] text-white text-center">
          Mobile Device Not Detected
        </h1>
        <p className="text-[20px] font-[500] text-white text-center">
          Looks like you are trying to access this website from a non mobile
          phone device.
        </p>
        <div className="flex items-center gap-[10px] justify-center mx-auto">
          <IoIosInformationCircle className="w-[30px] h-[30px] text-[--pulper]" />
          <p className="text-[16px] font-[900] text-white">
            Please re-visit this website from your Android or iOS mobile device.
          </p>
        </div>
      </div>
    </div>
  );
}

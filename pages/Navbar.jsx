import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
  return (
    <main className="wrapper bg-white ">
      <section className="flex items-center w-full pt-[15px] 2xl:pt-[28px] px-1 2xl:px-6 justify-between">
        <div>
          <div className="h-[35px] md:h-[44px] w-[190px] md:w-[350px] rounded-xl 2xl:max-w-[503px] border-borderwhite  border-[1px] px-4 2xl:px-2 flex items-center justify-between">
            <div className="hidden md:block">
              <div className="flex items-center gap-2 ">
                <div>
                  <CiSearch color="#939393" className="text-2xl" />
                </div>
                <div>
                  <p className="text-sm text-lightblack ">Search doc</p>
                </div>
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="uments here..."
                className="text-sm text-lightblack w-[100px] 2xl:max-w-[130px] border-none outline-none bg-white"
              />
            </div>
            <div className="md:hidden">
              <CiSearch color="#939393" className="text-xl" />
            </div>
          </div>
        </div>
        <div className="flex gap-4 md:gap-3 2xl:gap-6 items-center">
          <div className="cursor-pointer">
            <AiOutlineInfoCircle className="text-[1.4rem] md:text-2xl" />
          </div>
          <div className="cursor-pointer">
            <IoMdNotificationsOutline className="text-[1.4rem] md:text-2xl" />
          </div>
          <div className="flex gap-1 items-center">
            <div>
              <img src="/user.png" alt="" className="h-6 lg:h-8" />
            </div>
            <div className="cursor-pointer hidden md:block">
              <BiChevronDown />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Navbar;

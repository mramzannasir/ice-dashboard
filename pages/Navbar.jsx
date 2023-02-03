import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { VscChromeClose } from "react-icons/vsc";
import { RiMenu3Fill } from "react-icons/ri";
import { Data } from "@/assets/Data";
import { FaRProject } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const inFo = () => {
    router.replace("information/Faq");
  };
  const [show, setShow] = useState(false);
  const showProfile = () => {
    router.replace("Profile");
  };
  const showNotification = () => {
    setShow(!show);
  };
  const [nav, setNav] = useState(false);
  return (
    <main
      className="
     bg-white">
      <section className="flex items-center  w-full pt-[15px] 2xl:pt-[28px] px-1 2xl:px-6 justify-between">
        <div className="w-[100%]  left-0 top-0 h-[35px] absolute px-1 lg:hidden bg-blue">
          <div className="flex items-center justify-between">
            <div>
              <img src="/side-logo.png" alt="" />
            </div>
            <div onClick={() => setNav(true)} className="">
              <RiMenu3Fill size={25} />
            </div>
          </div>
        </div>

        {nav && (
          <div className="absolute top-0 left-0 bg-[#03030352] h-full w-full z-[97]">
            <motion.div
              initial={{ x: 1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.4, opacity: 0 }}
              className="w-full h-full md:w-[40%] bg-blue text-white relative ">
              <div>
                <img src="/side-logo.png" className="pt-8" alt="" />
              </div>
              <div className="flex flex-col h-full w-full gap-7 pt-[4rem]   px-2 ">
                {Data.map((items, index) => (
                  <>
                    <Link key={"React" + index} href={items.path}>
                      <span
                        className={`flex   gap-3 transition-all duration-300 `}>
                        <img src={items.ico} alt="" className="w-[2rem]" />
                        <p className="text-xl text-left">{items.name}</p>
                      </span>
                    </Link>
                  </>
                ))}
              </div>

              <div
                onClick={() => setNav(false)}
                className="absolute cursor-pointer text-lg right-2 top-2 text-[white]">
                <VscChromeClose size={30} />
              </div>
            </motion.div>
          </div>
        )}
        {/* Search Box */}
        <div className="mt-6">
          <div className="h-[35px] md:h-[44px]  w-[190px] md:w-[350px] rounded-xl 2xl:max-w-[503px] border-borderwhite  border-[1px] px-1 md:px-4 2xl:px-2 flex items-center justify-between">
            <div className="">
              <div className="flex items-center gap-1   md:gap-2">
                <div>
                  <CiSearch color="#939393" className="text-2xl" />
                </div>
                <input
                  type="text"
                  placeholder="Search documents here..."
                  className="text-sm hidden sm:block font-light text-lightblack w-full border-none outline-none bg-white"
                />
                <input
                  type="text"
                  placeholder="Search documents..."
                  className="text-sm  sm:hidden font-light text-lightblack w-full border-none outline-none bg-white"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          {" "}
          <div className="flex gap-4 mt-6 xl:mt-3 md:gap-3 2xl:gap-6 md:pr-6 xl:pr-0 items-center ">
            <div className="cursor-pointer" onClick={inFo}>
              <AiOutlineInfoCircle className="text-[1.4rem] md:text-2xl" />
            </div>
            <div onClick={showNotification} className="cursor-pointer">
              <IoMdNotificationsOutline className="text-[1.4rem] md:text-2xl" />
            </div>
            {/* Notification */}
            {show && (
              <div className="absolute w-[100%] h-[100%] flex justify-center md:pr-4 md:justify-end items-start  left-0 top-0 z-[99] bg-[#3a39394f]">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.4, opacity: 0 }}
                  transition={{ type: "spring", duration: 1 }}
                  className="w-[92%] md:w-[350px] h-[450px] mt-10 flex flex-col rounded-xl card bg-white relative">
                  <div
                    onClick={() => setShow(false)}
                    className="absolute cursor-pointer text-lg right-2 top-2 text-[red]">
                    <VscChromeClose />
                  </div>
                  <div onClick={() => setShow(false)}>
                    <div className="flex flex-col gap-4 items-start  py-2 px-1 border-b-[1px] border-borderwhite">
                      <div className="flex items-center gap-2 p-1 ">
                        <div>
                          <img src="/user.png" className="" alt="" />
                        </div>
                        <div>
                          <h1 className="text-base font-medium">Jon Doe</h1>
                          <p className="text-sm -mt-1 font-light opacity-50">
                            Lorem ipsum dolor sit amet....{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start  py-2 px-1 border-b-[1px] border-borderwhite">
                      <div className="flex items-center gap-2 p-1 ">
                        <div>
                          <img src="/user.png" className="" alt="" />
                        </div>
                        <div>
                          <h1 className="text-base font-medium">Ali</h1>
                          <p className="text-sm -mt-1 font-light opacity-50">
                            Lorem ipsum dolor sit amet....{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start  py-2 px-1 border-b-[1px] border-borderwhite">
                      <div className="flex items-center gap-2 p-1 ">
                        <div>
                          <img src="/user.png" className="" alt="" />
                        </div>
                        <div>
                          <h1 className="text-base font-medium">Alex</h1>
                          <p className="text-sm -mt-1 font-light opacity-50">
                            Lorem ipsum dolor sit amet....{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
            <div
              onClick={showProfile}
              className="flex gap-1 cursor-pointer items-center">
              <div>
                <img src="/user.png" alt="" className="h-6 lg:h-8" />
              </div>
              <div className="cursor-pointer hidden md:block">
                <BiChevronDown />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Navbar;

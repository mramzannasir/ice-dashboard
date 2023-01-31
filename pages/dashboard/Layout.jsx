/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Navbar from "../Navbar";
import Rightbar from "./Rightbar";
import Sidebar from "./Sidebar";
import { SidebarContext } from "@/Context/Context";
import Link from "next/link";
import { Data } from "@/assets/Data";
import { useRouter } from "next/router";
const Layout = ({ children }) => {
  // 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
  const [width, setWidth] = useState(false);
  const [show, setShow] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <SidebarContext.Provider value={{ width, setWidth, show, setShow }}>
        <div className="relative w-full flex justify-center  transition-all duration-500">
          {/* RightBarshow_________btn_______________________________ */}

          <div
            onClick={handleClick}
            className="right-[1.5rem] top-[5rem] cursor-pointer xxl:hidden absolute bg-red-500 text-white ">
            <img src="/calender.png" alt="" />
          </div>

          {/* Sidebar______________________________________________________________________________________ */}
          <div
            className={`${
              width ? "w-[10%]" : "w-[4%]"
            } w-[10%] h-full hidden lg:block  transition-all duration-500`}>
            <Sidebar />
          </div>
          <div
            className={`w-full ${
              width ? "w-[90%]" : "w-[96%]"
            } transition-all  duration-500`}>
            {/* Navbar__________________________________________________________________________________ */}
            <div className="w-full h-[6%] md:h-[10%] lg:h-[15%]">
              <Navbar />
            </div>
            {/* Child ___________________________________________________________________________________________________________ */}
            <div className="h-[85%] w-full flex transition-all duration-500">
              <div
                className={`bg-primary w-[100%] transition-all duration-500`}>
                {children}
              </div>
              <Link
                href="/"
                className={
                  router.pathname === "/home"
                    ? "scale-100  block xl:w-[20%]"
                    : "scale-0 hidden "
                }>
                <div
                  className={` ${
                    show ? "scale-100" : "scale-0"
                  } transition-all xxl:scale-100 absolute xxl:static right-0 2xl:pr-6 duration-500`}>
                  <Rightbar />
                </div>
              </Link>
            </div>
          </div>
          {/* Bottom bar _____________________________________________________________________________________________ */}
          <div className="lg:hidden w-full h-[3.4rem] fixed bottom-0 bg-blue text-white">
            <div className="flex justify-between px-2 items-center h-full w-full">
              {Data.map((items, index) => (
                <>
                  <Link href={items.path}>
                    <span
                      className={`flex items-center   gap-3 transition-all duration-300 opacity-50 ${
                        router.pathname == items.path
                          ? "mt opacity-100"
                          : undefined
                      }`}>
                      <img src={items.ico} alt="" className="" />
                    </span>
                  </Link>
                </>
              ))}
            </div>
          </div>
        </div>
      </SidebarContext.Provider>
    </>
  );
};

export default Layout;

{
  /* <div className="flex col w-full h-full">
          
          
        </div> */
}

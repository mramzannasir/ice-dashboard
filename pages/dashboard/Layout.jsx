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

  return (
    <>
      <SidebarContext.Provider value={{ width, setWidth, show, setShow }}>
        <div className="relative w-full  flex justify-center h-full  transition-all duration-500">
          {/* Sidebar______________________________________________________________________________________ */}
          <div
            className={`${
              width
                ? "w-[10%] lg:w-[20%] xl:w-[12%] 2xl:[10%]"
                : "w-[4%] lg:w-[7%] xl:w-[5%] 2xl:w-[4%]"
            } w-[10%] h-full hidden lg:block transition-all duration-500`}>
            <Sidebar />
          </div>
          <div
            className={`w-full ${
              width ? "w-[90%]" : "w-[96%]"
            } transition-all  duration-500`}>
            {/* Navbar__________________________________________________________________________________ */}
            <div className="w-full h-[4%] md:h-[10%] lg:h-[15%]">
              <Navbar />
            </div>
            {/* Child ___________________________________________________________________________________________________________ */}
            <div className="h-[100%] w-full flex transition-all duration-500">
              <div
                className={`bg-primary w-[100%] transition-all duration-500`}>
                {children}
              </div>
              <Link
                href="/"
                className={
                  router.pathname === "/home"
                    ? "scale-100 hidden xl:block  w-[25%] "
                    : "scale-0 hidden "
                }>
                <div
                  className={`${
                    width ? "" : "scale-100"
                  } transition-all  absolute xxl:static right-0 2xl:pr-6 duration-500`}>
                  <Rightbar />
                </div>
              </Link>
            </div>
          </div>
          {/* Bottom bar _____________________________________________________________________________________________ */}
          <div className="lg:hidden w-full h-[3.4rem]  fixed bottom-0 bg-blue text-white">
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

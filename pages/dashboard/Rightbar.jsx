import React, { useState, useContext } from "react";
import { MdDone } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SidebarContext } from "../../Context/Context";
import { motion } from "framer-motion";

const Rightbar = () => {
  const { show, setShow } = useContext(SidebarContext);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`wrapper bg-white transition-all justify-center  mx-auto  h-[30rem] duration-500 md:h-[45rem] w-[100%] right-card `}>
        <section className="w-full h-full flex justify-center items-center px-2 ">
          <div className={` transition-all duration-500  xl:w-[100%]   `}>
            <h1 className="headings font-medium">Today’s tasks</h1>
            <div className="mt-4  flex items-center gap-5">
              <div className="h-[45px] w-[45px] cursor-pointer flex justify-center items-center bg-[#3AC237] rounded-xl">
                <MdDone size={30} color="white" />
              </div>
              <div>
                {" "}
                <p className="text-sm 2xl:text-lg font-medium text-[#3AC237]">
                  Run payroll
                </p>{" "}
                <p className="description text-lightblack">Done</p>
              </div>
            </div>
            <div className="mt-4 md:mt-7 flex items-center gap-5">
              <div className="h-[48px] flex-col w-[48px] cursor-pointer flex justify-center items-center bg-white p-2 rounded-xl">
                <p className="font-medium">Jan</p>
                <p className="text-lg mt-2 font-medium">2</p>
              </div>
              <div>
                {" "}
                <p className="text-sm 2xl:text-lg font-medium ">
                  Review time off re...
                </p>{" "}
                <p className="description text-lightblack">at 5:00 AM</p>
              </div>
            </div>
            <div className="mt-4 md:mt-7 flex items-center gap-5">
              <div className="h-[48px] flex-col w-[48px] cursor-pointer flex justify-center items-center bg-white p-2 rounded-xl">
                <p>Jan</p>
                <p className="text-lg mt-2">2</p>
              </div>
              <div>
                {" "}
                <p className="text-sm 2xl:text-lg font-medium ">
                  Sign board resoluti...
                </p>{" "}
                <p className="description text-lightblack">at 5:00 AM</p>
              </div>
            </div>

            {/* See all___________________________________ */}
            <div className="my-4 md:my-8 flex gap-2 cursor-pointer items-center">
              <div className="text-sm font-medium text-blue">See all</div>
              <div>
                <IoIosArrowRoundForward size={28} color="#2594F1" />
              </div>
            </div>

            {/*Recent Notes_________________________________ */}
            <div>
              <h1 className="headings font-medium">Recent Notes</h1>
            </div>
            <div className="p-3 mt-2 rounded-xl bg-white">
              <h1 className="text-sm xl:text-lg font-medium">My routine</h1>
              <p className="description text-lightblack mt-1">
                Lorem ipsum dolor sit amet, elit sed do eiusmod tempor
                incididunt ut labore et dolore magna...
              </p>
            </div>
            <div className="p-3 mt-2 rounded-xl bg-white">
              <h1 className="text-sm xl:text-lg font-medium">Darf</h1>
              <p className="description text-lightblack mt-1">
                Lorem ipsum dolor sit amet, elit sed do eiusmod tempor.
              </p>
            </div>
            {/* See all */}
            <div className="mt-4 md:mt-8 flex gap-2 cursor-pointer items-center">
              <div className="text-sm font-medium text-blue">See all</div>
              <div>
                <IoIosArrowRoundForward size={28} color="#2594F1" />
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
};

export default Rightbar;

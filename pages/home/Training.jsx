import React from "react";
import Layout from "../dashboard/Layout";
import { motion } from "framer-motion";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/router";
import { BiDotsVerticalRounded } from "react-icons/bi";

const Training = () => {
  const router = useRouter();
  const handleClick = () => {
    router.replace("/home/SubCategory");
  };
  return (
    <>
      <Layout>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.4, opacity: 0 }}
          transition={{ type: "spring", duration: 1 }}>
          <div className="px-4 mt-[4rem] md:mt-[3rem] lg:mt-0">
            <div
              onClick={handleClick}
              className="flex justify-start items-center gap-1 pl-2  cursor-pointer">
              <div>
                <IoIosArrowRoundBack size={35} color="#97AFC2" />
              </div>
              <div>
                <p className="text-base font-normal text-[#97AFC2]">Back</p>
              </div>
            </div>
            <div className="w-full flex flex-col">
              <div>
                <h1 className="headings font-medium mt-2">Sub-Category 1</h1>
              </div>
              <div className="w-full 2xl:max-w-[70%]">
                <p className="text-base font-normal text-lightblack">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut laboreet dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Layout>
    </>
  );
};

export default Training;

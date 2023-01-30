/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "../dashboard/Layout";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useRouter } from "next/router";
import { BsListTask } from "react-icons/bs";
import { TbClipboard } from "react-icons/tb";
import { motion } from "framer-motion";

const index = () => {
  const router = useRouter();
  const handleClick = () => {
    router.replace("/home/TrainingDoc");
  };
  return (
    <>
      <Layout>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.4, opacity: 0 }}
          transition={{ type: "spring", duration: 1 }}
          className="">
          <div className="w-full flex justify-between px-4 ">
            <div>
              <h1 className="headings font-medium">All Categories</h1>
              <p className="subtitle text-slate mt-2">
                Here you will find all of your documents
              </p>
            </div>
            <div className="hidden md:block">
              <div className="flex gap-4 ">
                <div className="rounded-xl px-4 cursor-pointer h-[3rem] flex items-center gap-2 border-[1px] border-borderwhite">
                  <BsListTask size={25} color="#939393" />
                  <div>
                    <h1 className="text-sm font-normal text-[#939393]">Task</h1>
                  </div>
                </div>
                <div className=" rounded-xl px-4 cursor-pointer h-[3rem] flex items-center gap-2 border-[1px] border-borderwhite">
                  <TbClipboard size={25} color="#939393" />
                  <div>
                    <h1 className="text-sm font-normal text-[#939393]">
                      Notes
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4  gap-4 place-items-center pb-[2.5rem]">
            <div
              onClick={handleClick}
              className="w-full overflow-hidden h-[200px] flex flex-col cursor-pointer border-[1px] border-borderwhite rounded-xl">
              <div className="h-[60%] w-full">
                <img
                  src="/All_categories-1.png"
                  className="h-[8rem]  w-full object-cover"
                  alt=""
                />
              </div>
              <div className="h-full flex justify-between items-center px-4  w-full bg-light">
                <div className="flex flex-col gap">
                  <h1 className="title font-medium">Computer Training</h1>
                  <p className="description font-normal text-slate">
                    10 Documents
                  </p>
                </div>
                <div>
                  <BiDotsVerticalRounded size={30} color="#97AFC2" />
                </div>
              </div>
            </div>
            <div
              onClick={handleClick}
              className="w-full overflow-hidden h-[200px] flex flex-col cursor-pointer border-[1px] border-borderwhite rounded-xl">
              <div className="h-[60%] w-full">
                <img
                  src="/All_categories-2.png"
                  className="h-[8rem]  w-full object-cover"
                  alt=""
                />
              </div>
              <div className="h-full flex justify-between items-center px-4  w-full bg-light">
                <div className="flex flex-col gap">
                  <h1 className="title font-medium">3D Ship</h1>
                  <p className="description font-normal text-slate">
                    12 Documents
                  </p>
                </div>
                <div>
                  <BiDotsVerticalRounded size={30} color="#97AFC2" />
                </div>
              </div>
            </div>
            <div
              onClick={handleClick}
              className="w-full overflow-hidden h-[200px] flex flex-col cursor-pointer border-[1px] border-borderwhite rounded-xl">
              <div className="h-[60%] w-full">
                <img
                  src="/All_categories-3.png"
                  className="h-[8rem]  w-full object-cover"
                  alt=""
                />
              </div>
              <div className="h-full flex justify-between items-center px-4  w-full bg-light">
                <div className="flex flex-col gap">
                  <h1 className="title font-medium">Maintenance</h1>
                  <p className="description font-normal text-slate">
                    5 Documents
                  </p>
                </div>
                <div>
                  <BiDotsVerticalRounded size={30} color="#97AFC2" />
                </div>
              </div>
            </div>
            <div
              onClick={handleClick}
              className="w-full overflow-hidden h-[200px] flex flex-col cursor-pointer border-[1px] border-borderwhite rounded-xl">
              <div className="h-[60%] w-full">
                <img
                  src="/All_categories-4.png"
                  className="h-[8rem]  w-full object-cover"
                  alt=""
                />
              </div>
              <div className="h-full flex justify-between items-center px-4  w-full bg-light">
                <div className="flex flex-col gap">
                  <h1 className="title font-medium">Simulator</h1>
                  <p className="description font-normal text-slate">
                    25 Documents
                  </p>
                </div>
                <div>
                  <BiDotsVerticalRounded size={30} color="#97AFC2" />
                </div>
              </div>
            </div>
            <div
              onClick={handleClick}
              className="w-full overflow-hidden h-[200px] flex flex-col cursor-pointer border-[1px] border-borderwhite rounded-xl">
              <div className="h-[60%] w-full">
                <img
                  src="/All_categories-5.png"
                  className="h-[8rem]  w-full object-cover"
                  alt=""
                />
              </div>
              <div className="h-full flex justify-between items-center px-4  w-full bg-light">
                <div className="flex flex-col gap">
                  <h1 className="title font-medium">Miscellaneous</h1>
                  <p className="description font-normal text-slate">
                    1 Documents
                  </p>
                </div>
                <div>
                  <BiDotsVerticalRounded size={30} color="#97AFC2" />
                </div>
              </div>
            </div>
            <div
              onClick={handleClick}
              className="w-full overflow-hidden h-[200px] flex flex-col cursor-pointer border-[1px] border-borderwhite rounded-xl">
              <div className="h-[60%] w-full">
                <img
                  src="/All_categories-6.png"
                  className="h-[8rem]  w-full object-cover"
                  alt=""
                />
              </div>
              <div className="h-full flex justify-between items-center px-4  w-full bg-light">
                <div className="flex flex-col gap">
                  <h1 className="title font-medium">Test</h1>
                  <p className="description font-normal text-slate">
                    2 Documents
                  </p>
                </div>
                <div>
                  <BiDotsVerticalRounded size={30} color="#97AFC2" />
                </div>
              </div>
            </div>
            <div
              onClick={handleClick}
              className="w-full overflow-hidden h-[200px] flex flex-col cursor-pointer border-[1px] border-borderwhite rounded-xl">
              <div className="h-[60%] w-full">
                <img
                  src="/All_categories-7.png"
                  className="h-[8rem]  w-full object-cover"
                  alt=""
                />
              </div>
              <div className="h-full flex justify-between items-center px-4  w-full bg-light">
                <div className="flex flex-col gap">
                  <h1 className="title font-medium">Simulator</h1>
                  <p className="description font-normal text-slate">
                    25 Documents
                  </p>
                </div>
                <div>
                  <BiDotsVerticalRounded size={30} color="#97AFC2" />
                </div>
              </div>
            </div>
            <div
              onClick={handleClick}
              className="w-full overflow-hidden h-[200px] flex flex-col cursor-pointer border-[1px] border-borderwhite rounded-xl">
              <div className="h-[60%] w-full">
                <img
                  src="/All_categories-8.png"
                  className="h-[8rem]  w-full object-cover"
                  alt=""
                />
              </div>
              <div className="h-full flex justify-between items-center px-4  w-full bg-light">
                <div className="flex flex-col gap">
                  <h1 className="title font-medium">Miscellaneous</h1>
                  <p className="description font-normal text-slate">
                    1 Documents
                  </p>
                </div>
                <div>
                  <BiDotsVerticalRounded size={30} color="#97AFC2" />
                </div>
              </div>
            </div>
            <div
              onClick={handleClick}
              className="w-full overflow-hidden h-[200px] flex flex-col cursor-pointer border-[1px] border-borderwhite rounded-xl">
              <div className="h-[60%] w-full">
                <img
                  src="/All_categories-9.png"
                  className="h-[8rem]  w-full object-cover"
                  alt=""
                />
              </div>
              <div className="h-full flex justify-between items-center px-4  w-full bg-light">
                <div className="flex flex-col gap">
                  <h1 className="title font-medium">Test</h1>
                  <p className="description font-normal text-slate">
                    1 Documents
                  </p>
                </div>
                <div>
                  <BiDotsVerticalRounded size={30} color="#97AFC2" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Layout>
    </>
  );
};

export default index;

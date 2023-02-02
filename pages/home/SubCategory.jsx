/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "../dashboard/Layout";
import { motion } from "framer-motion";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/router";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";

const SubCategory = () => {
  const router = useRouter();
  const handleClick = () => {
    router.replace("/home/TrainingDoc");
  };
  const goTo = () => {
    router.replace("Training");
  };
  return (
    <>
      <Layout>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.4, opacity: 0 }}
          transition={{ type: "spring", duration: 1 }}
          className="wrapper mt-[4rem] md:mt-0">
          <div className="px-4">
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
            <div className="w-full flex items-center justify-between">
              <div>
                <h1 className="headings font-medium mt-2">Sub-Category 1</h1>
              </div>
              <div className="hidden md:block">
                {" "}
                <div className="border-[1px] py-[10px] px-[16px] w-[173px] h-[44px] text-[#939393] hover:text-white hover:bg-[#000000] transition-all duration-500  flex justify-center items-center text-sm  rounded-xl border-[#e7e7e7] cursor-pointer">
                  <BsPlus size={28} />
                  <p>Add Document</p>
                </div>
              </div>
            </div>
            {/* Today */}
            <div className="w-full h-full flex flex-col mt-4 xl:mt-6">
              <div className="flex  items-center justify-between w-full">
                <div>
                  <h1 className="text-[18px] leading-7 font-medium">Today</h1>
                </div>
                <div className="ml-[28rem]">
                  <p className="text-[12px] hidden md:block text-slate font-normal">
                    Last opened
                  </p>
                </div>
                <div></div>
              </div>
              {/* _____________________________________________Items___________________________________________ */}
              <div className="flex flex-col w-full gap-2 justify-center mt-2 items-center md:justify-start md:items-start">
                {/* Children */}
                <div
                  onClick={goTo}
                  className="sm:flex cursor-pointer items-center justify-between w-full mt-4 relative">
                  <div className="flex gap-2 items-center justify-start">
                    <div>
                      <img
                        src="/doc-ico.png"
                        alt=""
                        className="h-[2rem] w-[3.5rem] sm:h-auto sm:w-auto"
                      />
                    </div>
                    <div>
                      <p className="title leading-5">
                        Online web club - design requirements & notes
                      </p>
                    </div>
                  </div>
                  <div className="ml-[8rem] hidden sm:block">
                    <p className="text-[12px] text-lightblack font-normal">
                      Dec 14, 2022
                    </p>
                  </div>
                  <div className="hidden sm:block">
                    <BiDotsVerticalRounded size={25} color="#939393" />
                  </div>
                  <div className="ml-[8rem] absolute -right-1 -top-4 sm:hidden ">
                    <p className="text-[12px] text-lightblack font-normal">
                      Dec 14, 2022
                    </p>
                  </div>
                </div>
                <div className="xl:px-4 w-full">
                  <div className="w-[100%] my-2 h-[1px] bg-[#E7E7E7]"></div>
                </div>
                <div className="sm:flex items-center justify-between w-full mt-4 relative">
                  <div className="flex gap-2 items-center justify-start">
                    <div>
                      <img
                        src="/doc-ico.png"
                        alt=""
                        className="h-[2rem] w-[3.5rem] sm:h-auto sm:w-auto"
                      />
                    </div>
                    <div>
                      <p className="title leading-5">
                        Online web club - design requirements & notes
                      </p>
                    </div>
                  </div>
                  <div className="ml-[8rem] hidden sm:block">
                    <p className="text-[12px] text-lightblack font-normal">
                      Dec 14, 2022
                    </p>
                  </div>
                  <div className="hidden sm:block">
                    <BiDotsVerticalRounded size={25} color="#939393" />
                  </div>
                  <div className="ml-[8rem] absolute -right-1 -top-4 sm:hidden ">
                    <p className="text-[12px] text-lightblack font-normal">
                      Dec 14, 2022
                    </p>
                  </div>
                </div>
                <div className="xl:px-4 w-full">
                  <div className="w-[100%] my-2 h-[1px] bg-[#E7E7E7]"></div>
                </div>
                <div className="sm:flex items-center justify-between w-full mt-4 relative">
                  <div className="flex gap-2 items-center justify-start">
                    <div>
                      <img
                        src="/doc-ico.png"
                        alt=""
                        className="h-[2rem] w-[3.5rem] sm:h-auto sm:w-auto"
                      />
                    </div>
                    <div>
                      <p className="title leading-5">
                        Online web club - design requirements & notes
                      </p>
                    </div>
                  </div>
                  <div className="ml-[8rem] hidden sm:block">
                    <p className="text-[12px] text-lightblack font-normal">
                      Dec 14, 2022
                    </p>
                  </div>
                  <div className="hidden sm:block">
                    <BiDotsVerticalRounded size={25} color="#939393" />
                  </div>
                  <div className="ml-[8rem] absolute -right-1 -top-4 sm:hidden ">
                    <p className="text-[12px] text-lightblack font-normal">
                      Dec 14, 2022
                    </p>
                  </div>
                </div>
                <div className="xl:px-4 w-full">
                  <div className="w-[100%] my-2 h-[1px] bg-[#E7E7E7]"></div>
                </div>
                <div className="sm:flex items-center justify-between w-full mt-4 relative">
                  <div className="flex gap-2 items-center justify-start">
                    <div>
                      <img
                        src="/doc-ico.png"
                        alt=""
                        className="h-[2rem] w-[3.5rem] sm:h-auto sm:w-auto"
                      />
                    </div>
                    <div>
                      <p className="title leading-5">
                        Online web club - design requirements & notes
                      </p>
                    </div>
                  </div>
                  <div className="ml-[8rem] hidden sm:block">
                    <p className="text-[12px] text-lightblack font-normal">
                      Dec 14, 2022
                    </p>
                  </div>
                  <div className="hidden sm:block">
                    <BiDotsVerticalRounded size={25} color="#939393" />
                  </div>
                  <div className="ml-[8rem] absolute -right-1 -top-4 sm:hidden ">
                    <p className="text-[12px] text-lightblack font-normal">
                      Dec 14, 2022
                    </p>
                  </div>
                </div>
                <div className="xl:px-4 w-full">
                  <div className="w-[100%] my-2 h-[1px] bg-[#E7E7E7]"></div>
                </div>
                {""}
                {/* __________________Line___________________________________________________________ */}
              </div>
            </div>
            {/* Older */}
            <div className="w-full h-full flex flex-col mt-6">
              <div className="flex  items-center justify-between w-full">
                <div>
                  <h1 className="text-[18px] leading-7 font-medium">Older</h1>
                </div>
                <div></div>
              </div>
              {/* _____________________________________________Items___________________________________________ */}
              <div className="flex flex-col w-full gap-2 justify-center mt-2 items-center md:justify-start md:items-start">
                {/* Children */}
                <div className="sm:flex items-center justify-between w-full mt-4 relative">
                  <div className="flex gap-2 items-center justify-start">
                    <div>
                      <img
                        src="/doc-ico.png"
                        alt=""
                        className="h-[2rem] w-[3.5rem] sm:h-auto sm:w-auto"
                      />
                    </div>
                    <div>
                      <p className="title leading-5">
                        Online web club - design requirements & notes
                      </p>
                    </div>
                  </div>
                  <div className="ml-[8rem] hidden sm:block">
                    <p className="text-[12px] text-lightblack font-normal">
                      Dec 14, 2022
                    </p>
                  </div>
                  <div className="hidden sm:block">
                    <BiDotsVerticalRounded size={25} color="#939393" />
                  </div>
                  <div className="ml-[8rem] absolute -right-1 -top-4 sm:hidden ">
                    <p className="text-[12px] text-lightblack font-normal">
                      Dec 14, 2022
                    </p>
                  </div>
                </div>
                <div className="xl:px-4 w-full">
                  <div className="w-[100%] my-2 h-[1px] bg-[#E7E7E7]"></div>
                </div>
                <div className="sm:flex items-center justify-between w-full mt-4 relative">
                  <div className="flex gap-2 items-center justify-start">
                    <div>
                      <img
                        src="/doc-ico.png"
                        alt=""
                        className="h-[2rem] w-[3.5rem] sm:h-auto sm:w-auto"
                      />
                    </div>
                    <div>
                      <p className="title leading-5">
                        Online web club - design requirements & notes
                      </p>
                    </div>
                  </div>
                  <div className="ml-[8rem] hidden sm:block">
                    <p className="text-[12px] text-lightblack font-normal">
                      Dec 14, 2022
                    </p>
                  </div>
                  <div className="hidden sm:block">
                    <BiDotsVerticalRounded size={25} color="#939393" />
                  </div>
                  <div className="ml-[8rem] absolute -right-1 -top-4 sm:hidden ">
                    <p className="text-[12px] text-lightblack font-normal">
                      Dec 14, 2022
                    </p>
                  </div>
                </div>
                <div className="xl:px-4 w-full">
                  <div className="w-[100%] my-2 h-[1px] bg-[#E7E7E7]"></div>
                </div>
                {""}
                {/* __________________Line___________________________________________________________ */}
              </div>
            </div>
          </div>
        </motion.div>
      </Layout>
    </>
  );
  s;
};

export default SubCategory;

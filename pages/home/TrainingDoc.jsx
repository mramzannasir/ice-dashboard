/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "../dashboard/Layout";
import { IoIosArrowRoundBack } from "react-icons/io";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useRouter } from "next/router";
import { Link } from "next/link";
import { motion } from "framer-motion";

const TrainingDoc = () => {
  const router = useRouter();
  const handleClick = () => {
    router.replace("/home");
  };
  const goTo = () => {
    router.replace("SubCategory");
  };
  return (
    <>
      <Layout>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.4, opacity: 0 }}
          transition={{ type: "spring", duration: 1 }}>
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
            <div className="w-full flex">
              <div>
                <h1 className="headings font-medium mt-2">
                  Computer Training Documents
                </h1>
              </div>
            </div>
          </div>
          {/* Cards______________________________________________________________________________________________ */}

          <div className="w-full h-[83%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4  gap-4 place-items-center pb-[2.5rem]">
            <div
              onClick={goTo}
              className="w-full overflow-hidden h-[200px] flex flex-col cursor-pointer border-[1px] border-borderwhite rounded-xl">
              <div className="h-[60%] w-full">
                <img
                  src="/Computer_Training-1.png"
                  className="h-[8rem]  w-full object-cover"
                  alt=""
                />
              </div>

              <div className="h-full flex justify-between items-center px-4  w-full bg-light">
                <div className="flex flex-col gap">
                  <h1 className="title font-medium">Hull</h1>
                  <p className="description font-normal text-slate">
                    10 Documents
                  </p>
                </div>
                <div>
                  <BiDotsVerticalRounded size={30} color="#97AFC2" />
                </div>
              </div>
            </div>

            <div className="w-full overflow-hidden h-[200px] flex flex-col cursor-pointer border-[1px] border-borderwhite rounded-xl">
              <div className="h-[60%] w-full">
                <img
                  src="/Computer_Training-2.png"
                  className="h-[8rem]  w-full object-cover"
                  alt=""
                />
              </div>
              <div className="h-full flex justify-between items-center px-4  w-full bg-light">
                <div className="flex flex-col gap">
                  <h1 className="title font-medium">Electrical</h1>
                  <p className="description font-normal text-slate">
                    12 Documents
                  </p>
                </div>
                <div>
                  <BiDotsVerticalRounded size={30} color="#97AFC2" />
                </div>
              </div>
            </div>
            <div className="w-full overflow-hidden h-[200px] flex flex-col cursor-pointer border-[1px] border-borderwhite rounded-xl">
              <div className="h-[60%] w-full">
                <img
                  src="/Computer_Training-3.png"
                  className="h-[8rem]  w-full object-cover"
                  alt=""
                />
              </div>
              <div className="h-full flex justify-between items-center px-4  w-full bg-light">
                <div className="flex flex-col gap">
                  <h1 className="title font-medium">Engineering</h1>
                  <p className="description font-normal text-slate">
                    5 Documents
                  </p>
                </div>
                <div>
                  <BiDotsVerticalRounded size={30} color="#97AFC2" />
                </div>
              </div>
            </div>
            <div className="w-full overflow-hidden h-[200px] flex flex-col cursor-pointer border-[1px] border-borderwhite rounded-xl">
              <div className="h-[60%] w-full">
                <img
                  src="/Computer_Training-4.png"
                  className="h-[8rem]  w-full object-cover"
                  alt=""
                />
              </div>
              <div className="h-full flex justify-between items-center px-4  w-full bg-light">
                <div className="flex flex-col gap">
                  <h1 className="title font-medium">Navigation</h1>
                  <p className="description font-normal text-slate">
                    25 Documents
                  </p>
                </div>
                <div>
                  <BiDotsVerticalRounded size={30} color="#97AFC2" />
                </div>
              </div>
            </div>
            <div className="w-full overflow-hidden h-[200px] flex flex-col cursor-pointer border-[1px] border-borderwhite rounded-xl">
              <div className="h-[60%] w-full">
                <img
                  src="/Computer_Training-5.png"
                  className="h-[8rem]  w-full object-cover"
                  alt=""
                />
              </div>
              <div className="h-full flex justify-between items-center px-4  w-full bg-light">
                <div className="flex flex-col gap">
                  <h1 className="title font-medium">Gunnery</h1>
                  <p className="description font-normal text-slate">
                    1 Documents
                  </p>
                </div>
                <div>
                  <BiDotsVerticalRounded size={30} color="#97AFC2" />
                </div>
              </div>
            </div>
            <div className="w-full overflow-hidden h-[200px] flex flex-col cursor-pointer border-[1px] border-borderwhite rounded-xl">
              <div className="h-[60%] w-full">
                <img
                  src="/Computer_Training-6.png"
                  className="h-[8rem]  w-full object-cover"
                  alt=""
                />
              </div>
              <div className="h-full flex justify-between items-center px-4  w-full bg-light">
                <div className="flex flex-col gap">
                  <h1 className="title font-medium">Warfare</h1>
                  <p className="description font-normal text-slate">
                    2 Documents
                  </p>
                </div>
                <div>
                  <BiDotsVerticalRounded size={30} color="#97AFC2" />
                </div>
              </div>
            </div>
            <div className="w-full overflow-hidden h-[200px] flex flex-col cursor-pointer border-[1px] border-borderwhite rounded-xl">
              <div className="h-[60%] w-full">
                <img
                  src="/Computer_Training-7.png"
                  className="h-[8rem]  w-full object-cover"
                  alt=""
                />
              </div>
              <div className="h-full flex justify-between items-center px-4  w-full bg-light">
                <div className="flex flex-col gap">
                  <h1 className="title font-medium">Sub-Category 7</h1>
                  <p className="description font-normal text-slate">
                    25 Documents
                  </p>
                </div>
                <div>
                  <BiDotsVerticalRounded size={30} color="#97AFC2" />
                </div>
              </div>
            </div>
            <div className="w-full overflow-hidden h-[200px] flex flex-col cursor-pointer border-[1px] border-borderwhite rounded-xl">
              <div className="h-[60%] w-full">
                <img
                  src="/Computer_Training-8.png"
                  className="h-[8rem]  w-full object-cover"
                  alt=""
                />
              </div>
              <div className="h-full flex justify-between items-center px-4  w-full bg-light">
                <div className="flex flex-col gap">
                  <h1 className="title font-medium">Sub-Category 8</h1>
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

export default TrainingDoc;
